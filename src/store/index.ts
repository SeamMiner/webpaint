import { createStore } from "vuex";
import { themeModule } from "./themes";
import { paintModule } from "./paint";

const store = createStore({
  modules: {
    theme: themeModule,
    paint: paintModule,
  },
});
export default store;
