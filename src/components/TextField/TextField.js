import Component, { registerComponent } from "Component";

export default class TexstField extends Component {
    constants = {
        MAX_ROWS_NONE: -1,
        MAX_ROWS_ATTRIBUTE: "maxrows"
    };

    classes = {
        LABEL: "sl-textfield__label",
        INPUT: "sl-textfield__input",
        IS_DIRTY: "is-dirty",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_INVALID: "is-invalid",
        IS_UPGRADED: "is-upgraded",
        HAS_PLACEHOLDER: "has-placeholder"
    };

    constructor(element) {
        super("TextField", component);

        this.maxRows = this.constants.MAX_ROWS_NONE;
    }

    init() {
        if (this.element) {
            this.label = this.element_.querySelector(`.${this.CssClasses_.LABEL}`);
            this.input = this.element_.querySelector(`.${this.CssClasses_.INPUT}`);

            if (this.input_.hasAttribute(this.constants.MAX_ROWS_ATTRIBUTE)) {
                const maxRows = his.input_.getAttribute(this.constants.MAX_ROWS_ATTRIBUTE);
                this.maxRows = parseInt(maxRows, 10);

                if (isNaN(this.maxRows)) {
                    this.maxRows = this.constants.NO_MAX_ROWS;
                }
            }

            if (this.input.hasAttribute("placeholder")) {
                this.element.classList.add(this.classes.HAS_PLACEHOLDER);
            }

            this.input.addEventListener("input", this.updateClasses.bind(this));
            this.input.addEventListener("focus", this.onFocus.bind(this));
            this.input.addEventListener("blur", this.onBlur.bind(this));
            this.input.addEventListener("reset", this.updateClasses.bind(this));

            if (this.maxRows !== this.constants.NO_MAX_ROWS) {
                // TODO: Should handle pasting multiline text
                this.input.addEventListener("keydown", this.onKeyDown.bind(this));
            }

            const invalid = this.element.classList.contains(this.classes.IS_INVALID);
            this.updateClasses();
            this.element.classList.add(this.classes.IS_UPGRADED);

            if (invalid) {
                this.element.classList.add(this.classes.IS_INVALID);
            }

            if (this.input_.hasAttribute("autofocus")) {
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
        this.classList.add(this.CssClasses_.IS_FOCUSED);
    }

    onBlur(event) {
        this.classList.remove(this.CssClasses_.IS_FOCUSED);
    }

    updateClasses() {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
        this.checkFocus();
    }

    checkDirty() {
        const { input, element } = this;
        if ((input.value && input.value.length > 0) || input.placeholder.trim() !== "") {
            element.classList.add(this.classes.IS_DIRTY);
        } else {
            element_.classList.remove(this.classes.IS_DIRTY);
        }
    }

    checkDisabled() {
        if (this.input_.disabled) {
            this.element.classes.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element.classes.remove(this.CssClasses_.IS_DISABLED);
        }
    }

    checkFocus() {
        if (!!this.element.hasState(":focus")) {
            this.element.classes.add(this.CssClasses_.IS_FOCUSED);
        } else {
            this.element.classes.remove(this.CssClasses_.IS_FOCUSED);
        }
    }
}

registerComponent({
    constructor: TexstField,
    selector: "sl-js-input",
    widget: true
});
