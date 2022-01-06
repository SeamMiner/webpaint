import { MutationTree } from "vuex";
import { Paint } from "../paint/main";

type PaintModuleState = {
  paint: Paint | null
}

const paintModuleState: PaintModuleState = {
  paint: new Paint(null)
};

const paintModuleMutations = <MutationTree<PaintModuleState>>{
  change(state, newPaint) {
    state.paint = newPaint;
  },
};


const paintModule = {
  namespaced: true,

  state: paintModuleState,
  mutations: paintModuleMutations,
};

export { paintModule };
