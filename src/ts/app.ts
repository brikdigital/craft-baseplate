import "@css/app.pcss";
import ComponentLoader, {Component} from "./loader";

const componentLoader = new ComponentLoader();
const components: Component[] = [
    {
        name: 'general',
        selector: 'body'
    }
];

for (let component of components) {
    componentLoader.loadComponent(component.name, component.selector, component.plugins ?? []);
}

// @ts-expect-error apparently import.meta is not supported in es2023?
if (import.meta.hot) {
    // @ts-expect-error apparently import.meta is not supported in es2023?
    import.meta.hot.accept();
}
