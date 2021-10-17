import { ActionTree, MutationTree } from 'vuex';

enum Themes {
  black,
  white,
  blue,
  orange,
  red
}

enum themeVariables {
  blackWhite = 'black-white',
  blackGrey = 'black-grey',
  brushBlackGrey = 'brush-black-grey',
  tooltipBorder = 'tooltip-border',
  violet = 'violet',
  grey = 'grey',
  blue = 'blue',
  orange = 'orange',
  red = 'red',
  black = 'black',
  bg = 'bg'
}

type ThemeColorInfo = {
  name: themeVariables;
  value: Map<Themes, string> | string;
};

type ThemeModuleState = {
  activeTheme: Themes;
  colors: ThemeColorInfo[];
};

const themeModuleState: ThemeModuleState = {
  activeTheme: Themes.white,

  colors: [
    {
      name: themeVariables.black,
      value: '0 0 0'
    },
    {
      name: themeVariables.blackGrey,
      value: new Map([
        [Themes.black, '245 245 245'],
        [Themes.white, '0 0 0']
      ])
    },
    {
      name: themeVariables.blackWhite,
      value: new Map([
        [Themes.black, '255 255 255'],
        [Themes.white, '0 0 0']
      ])
    },
    {
      name: themeVariables.bg,
      value: new Map([
        [Themes.black, '29 29 29'],
        [Themes.white, '245 245 245']
      ])
    },
    //TODO: add other colors
  ]
}

const themeModuleMutations = <MutationTree<ThemeModuleState>>{
  change(state, props: { newTheme: Themes }) {
    state.activeTheme = props.newTheme;
  },
}

const themeModuleActions = <ActionTree<ThemeModuleState, null>>{
  init(context) {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        context.dispatch("setDark");
      }
    } else {
      context.dispatch("setLight");
    }
  },

  setLight(context) {
    context.commit("change", { newTheme: Themes.white });
    context.dispatch("updateProperties");
  },

  setDark(context) {
    context.commit("change", { newTheme: Themes.black });
    context.dispatch("updateProperties");
  },

  toggle(context, newTheme: Themes) {
    context.commit("change", { newTheme });
    context.dispatch("updateProperties");
  },

  updateProperties(context) {
    const theme = context.state.activeTheme;
    const colors = context.state.colors;
    const root = document.documentElement.style;

    for (let token = 0; token < colors.length; token += 1) {
      root.setProperty(
        `--${colors[token].name}`,
        `${
          colors[token].value instanceof Map ? (colors[token].value as Map<Themes, string>).get(theme) : colors[token].value
        }`
      );
    }
  },
};

const themeModule = {
  namespaced: true,

  state: themeModuleState,
  mutations: themeModuleMutations,
  actions: themeModuleActions,
};

export { themeVariables, themeModule, Themes };