// Globals
import "assets/barrel.scss";

// Components
import "components/Button";
import "components/Grid";
import "components/TextField";

// Bootstrap
import { registeredComponentList } from "Component";

window.addEventListener("load", () => {
    registeredComponentList.forEach((componentSpec, index) => {
        console.log("Try registering", componentSpec, index);
        const nodes = document.querySelectorAll(`.${componentSpec.selector}`);
        for (let i = 0, element; (element = nodes[i]); i++) {
            const instance = new componentSpec.constructor(element);
            console.log("Found button at position %s:", i, instance);
        }
    });
});
