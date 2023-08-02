import type { App } from "vue";

import DropdownUserComponent from "./components/DropdownUserComponent.vue";

export const registerComponents = (app: App) => {
    app.component("DropdownUser", DropdownUserComponent);
}