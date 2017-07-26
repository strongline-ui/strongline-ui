import Element from "Element";

export const ANONYM_COMPONENT = "@@INTERNAL_ANONYM_COMPONENT";

export const staticComponentNameList = [];
export const registeredComponentList = [];

export default class Component {
    name = ANONYM_COMPONENT;

    constants = {};
    classes = {
        IS_UPGRADED: "is-upgraded"
    };

    constructor(name = ANONYM_COMPONENT, element = null) {
        if (name) {
            if (name === ANONYM_COMPONENT) {
                throw new Error(
                    `Component(...): Each component must have its own name passed in the super constructor.`
                );
            }

            if (~staticComponentNameList.indexOf(name)) {
                throw new Error(`Component(${name}): Components must have a unique name.`);
            }

            this.name = name;
            staticComponentNameList.push(this.name);
            global[this.name] = this;
        } else {
            throw new Error(
                `Component(${name}): Component names must be valid and unique, ${name} (${typeof name}) is already registered.`
            );
        }

        if (!element) {
            console.warn(
                `Component(${this
                    .name}, ${typeof element}): Might not register any component on invalid element(s).`
            );
        }

        this.element = new Element(element);
        this.init();
    }

    get elementClassList() {
        const optimisticElement = this.element || {};
        return Array.isArray(optimisticElement.classList) ? optimisticElement.classList : [];
    }

    get hasState() {}

    /**
     * @abstract
     */
    init() {}
}

export const registerComponent = ({ constructor, selector, widget = false }) => {
    registeredComponentList.push({
        selector,
        constructor,
        name: constructor.name,
        widget: !!widget
    });
};
