// Globals
import "assets/barrel.scss";

// Components
import "components/Button";
import "components/Grid";

// Bootstrap
import { registeredComponentList } from "Component";

window.addEventListener("load", () => {
    registeredComponentList.forEach((componentSpec, index) => {
        console.log("Try registering", componentSpec, index);
    });
});
