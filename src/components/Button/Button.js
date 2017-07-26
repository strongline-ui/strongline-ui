import Component, { registerComponent } from "Component";
import "components/Button/Button.scss";

export default class Button extends Component {
    constructor(element) {
        super("Button", element);
    }

    disable() {
        this.element.disable = true;
    }

    enable() {
        this.element.disable = false;
    }

    init() {}
}

registerComponent({
    constructor: Button,
    selector: "sl-js-button",
    widget: false
});
