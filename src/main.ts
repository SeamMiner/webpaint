import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore:disable-next-line */
import { VTooltip } from 'v-tooltip'

createApp(App).use(i18n).use(store).use(router).directive('tooltip', VTooltip).mount("#app");
