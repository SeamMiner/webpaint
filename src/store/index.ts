import { createStore } from "vuex";
import { themeModule } from "./themes";
import { paintModule } from "./paint";

export default createStore({
  modules: {
    theme: themeModule,
    paint: paintModule
  },
});
