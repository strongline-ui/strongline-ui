export default class Element {
    domElement = null;
    internalClassList = null;

    constructor(domElement) {
        this.domElement = domElement;
        this.internalClassList = domElement.classList;
    }

    get classList() {
        return this.internalClassList;
    }

    focus() {
        this.domElement.addEventListener("onfocus");
    }

    blur() {}

    hasState(stateSelector) {
        switch (stateSelector) {
            case ":focus":
                console.log(document.activeElement, this.domElement);
                return document.activeElement === this.domElement;
            default:
                return false;
        }
    }

    querySelector(...args) {
        const selectedDomNode = this.domElement.querySelector(...args);
        console.log("querySelector.selectedDomNode:", selectedDomNode);
        return selectedDomNode;
    }
}
