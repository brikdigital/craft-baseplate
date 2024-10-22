import DOMHelper from "./utils/domHelper";

export interface Component {
    name: string;
    selector: string;
    plugins?: Plugin[];
}

interface Plugin {
    path: string;
    file: string;
    name: string;
}

export default class ComponentLoader {
    public async loadComponent(componentName: string,  selector: string, plugins: Plugin[] = []) {
        // NOTE: Maybe we can pass the elements down to the component's default function?
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            this.initComponent(componentName, plugins);
        }

        DOMHelper.onDynamicContent(document.documentElement, selector, (_elements) => {
            this.initComponent(componentName, plugins);
        });
    }

    private async initComponent(componentName: string, _plugins: Plugin[]) {
        const component = await import(`./components/${componentName}.ts`);
        if (!component.default || typeof component.default !== "function")
            throw new Error(`${componentName} doesn't export a default function!`)
        await component.default();
    }
}