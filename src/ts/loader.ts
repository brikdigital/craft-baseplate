import DOMHelper from "./utils/domHelper";

export interface Component {
    name: string;
    className: string;
    selector: string;
    plugins?: Plugin[];
}

interface Plugin {
    path: string;
    file: string;
    name: string;
}

export default class ComponentLoader {
    public async loadComponent(componentName: string, className: string, selector: string, plugins: Plugin[] = []) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            this.initComponent(componentName, className, plugins);
        }

        DOMHelper.onDynamicContent(document.documentElement, selector, (elements) => {
            this.initComponent(componentName, className, plugins);
        });
    }

    private async initComponent(componentName: string, className: string, plugins: Plugin[]) {
        const component = await import(`./components/${componentName}.ts`);
        if (plugins.length > 0) {
            const pluginLoading = [];
            plugins.forEach((plugin) => {
                pluginLoading.push(
                    new Promise(async (resolve, reject) => {
                        const pluginModule = await import(`../plugins/${plugin.path}/${plugin.file}.ts`);
                        resolve(pluginModule[plugin.name]);
                    })
                );
            });
            Promise.all(pluginLoading).then((pluginModules) => {
                new component[className]({
                    plugins: pluginModules,
                });
            });
        } else {
            new component[className]();
        }
    }
}