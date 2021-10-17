import { createStore } from "vuex";
import { themeModule } from "./themes";

export default createStore({
  modules: {
    theme: themeModule,
  },
});
