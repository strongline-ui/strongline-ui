import Component, { registerComponent } from "Component";

export const TextFieldClasses = {
    LABEL: "sl-textfield__label",
    INPUT: "sl-textfield__input",
    IS_DIRTY: "is-dirty",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_INVALID: "is-invalid",
    IS_UPGRADED: "is-upgraded",
    HAS_PLACEHOLDER: "has-placeholder"
};

export const TextFieldConstants = {
    MAX_ROWS_NONE: -1,
    MAX_ROWS_ATTRIBUTE: "maxrows"
};

export default class TextField extends Component {
    constructor(element) {
        super("TextField", element);

        this.maxRows = TextFieldConstants.MAX_ROWS_NONE;
    }

    init() {
        if (this.element) {
            this.label = this.element.querySelector(`.${TextFieldClasses.LABEL}`);
            this.input = this.element.querySelector(`.${TextFieldClasses.INPUT}`);

            if (this.input.hasAttribute(TextFieldConstants.MAX_ROWS_ATTRIBUTE)) {
                const maxRows = his.input.getAttribute(TextFieldConstants.MAX_ROWS_ATTRIBUTE);
                this.maxRows = parseInt(maxRows, 10);

                if (isNaN(this.maxRows)) {
                    this.maxRows = TextFieldConstants.NO_MAX_ROWS;
                }
            }

            if (this.input.hasAttribute("placeholder")) {
                this.element.classList.add(TextFieldClasses.HAS_PLACEHOLDER);
            }

            this.input.addEventListener("input", this.updateClasses.bind(this));
            this.input.addEventListener("focus", this.onFocus.bind(this));
            this.input.addEventListener("blur", this.onBlur.bind(this));
            this.input.addEventListener("reset", this.updateClasses.bind(this));

            if (this.maxRows !== TextFieldConstants.NO_MAX_ROWS) {
                // TODO: Should handle pasting multiline text
                this.input.addEventListener("keydown", this.onKeyDown.bind(this));
            }

            console.log("ELEMENT", this.element);

            const invalid = this.element.classList.contains(TextFieldClasses.IS_INVALID);
            this.updateClasses();
            this.element.classList.add(TextFieldClasses.IS_UPGRADED);

            if (invalid) {
                this.element.classList.add(TextFieldClasses.IS_INVALID);
            }

            if (this.input.hasAttribute("autofocus")) {
                this.element.focus();
                this.checkFocus();
            }
        }
    }

    disable() {
        this.input.disabled = true;
        this.updateClasses();
    }

    enable() {
        this.input.disabled = false;
        this.updateClasses();
    }

    change() {
        this.input.value = value || "";
        this.updateClasses();
    }

    onKeyDown() {
        const currentRowCount = event.target.value.split("\n").length;

        if (event.keyCode === 13) {
            if (currentRowCount >= this.maxRows) {
                event.preventDefault();
            }
        }
    }

    onFocus() {
        this.element.classList.add(TextFieldClasses.IS_FOCUSED);
        this.updateClasses();
    }

    onBlur(event) {
        this.element.classList.remove(TextFieldClasses.IS_FOCUSED);
        this.updateClasses();
    }

    updateClasses() {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
        this.checkFocus();

        console.log("New classes", this);
    }

    checkValidity() {
        if (this.input.validity) {
            if (this.input.validity.valid) {
                this.element.classList.remove(TextFieldClasses.IS_INVALID);
            } else {
                this.element.classList.add(TextFieldClasses.IS_INVALID);
            }
        }
    }

    checkDirty() {
        const { input, element } = this;
        if ((input.value && input.value.length > 0) || input.placeholder.trim() !== "") {
            element.classList.add(TextFieldClasses.IS_DIRTY);
        } else {
            element.classList.remove(TextFieldClasses.IS_DIRTY);
        }
    }

    checkDisabled() {
        if (this.input.disabled) {
            this.element.classList.add(TextFieldClasses.IS_DISABLED);
        } else {
            this.element.classList.remove(TextFieldClasses.IS_DISABLED);
        }
    }

    checkFocus() {
        if (this.element.querySelector(":focus") !== null) {
            this.element.classList.add(TextFieldClasses.IS_FOCUSED);
        } else {
            this.element.classList.remove(TextFieldClasses.IS_FOCUSED);
        }
    }
}

registerComponent({
    constructor: TextField,
    selector: "sl-js-textfield",
    widget: true
});
