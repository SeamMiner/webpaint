import { ActionTree, MutationTree } from "vuex";

enum Themes {
  black,
  white,
  blue,
  orange,
  red,
}
// TODO: add color keys, newer are higher
enum themeVariables {
  redBlue = "red-blue",
  blackWhite = "black-white",
  blackGrey = "black-grey",
  greyBlack = "grey-black",
  brushBlackGrey = "brush-black-grey",
  tooltipBorder = "tooltip-border",
  greyWhite = "grey-white",
  violet = "violet",
  grey = "grey",
  blue = "blue",
  orange = "orange",
  red = "red",
  black = "black",
  white = "white",
  bg = "bg",

  //New Colors
  thicknessBrush = 'thickness-brush',
  thicknessBg = 'thickness-bg',
  checkedOpacity = 'checked-opacity',
  active = 'active'
}

type ThemeColorInfo = {
  name: themeVariables;
  value: Map<Themes, string> | string;
};

type ThemeModuleState = {
  activeTheme: Themes;
  activeColor: string;
  colors: ThemeColorInfo[];
};

const themeModuleState: ThemeModuleState = {
  activeTheme: Themes.white,
  activeColor: '0 0 0',

  colors: [
    {
      name: themeVariables.black,
      value: "0 0 0",
    },
    {
      name: themeVariables.white,
      value: "255 255 255",
    },
    {
      name: themeVariables.blackGrey,
      value: new Map([
        [Themes.black, "0 0 0"],
        [Themes.white, "227 227 227"],
      ]),
    },
    {
      name: themeVariables.greyBlack,
      value: new Map([
        [Themes.black, "245 245 245"],
        [Themes.white, "0 0 0"],
      ]),
    },
    {
      name: themeVariables.blackWhite,
      value: new Map([
        [Themes.black, "255 255 255"],
        [Themes.white, "0 0 0"],
      ]),
    },
    {
      name: themeVariables.bg,
      value: new Map([
        [Themes.black, "29 29 29"],
        [Themes.white, "245 245 245"],
      ]),
    },
    {
      name: themeVariables.greyWhite,
      value: new Map([
        [Themes.black, "46 46 46"],
        [Themes.white, "255 255 255"],
      ]),
    },
    //TODO: add other colors
    {
      name: themeVariables.thicknessBrush,
      value: new Map([
        [Themes.black, "244 244 244"],
        [Themes.white, "29 29 29"],
      ]),
    },
    {
      name: themeVariables.thicknessBg,
      value: new Map([
        [Themes.black, "31 31 31"],
        [Themes.white, "245 245 245"],
      ]),
    },
    {
      name: themeVariables.checkedOpacity,
      value: new Map([
        [Themes.black, "64 64 64"],
        [Themes.white, "225 225 225"],
      ]),
    },
  ],
};

const themeModuleMutations = <MutationTree<ThemeModuleState>>{
  change(state, props: { newTheme: Themes }) {
    state.activeTheme = props.newTheme;
  },
  setActiveColor(state, props: { newColor: string }) {
    state.activeColor = props.newColor;
  }
};

const themeModuleActions = <ActionTree<ThemeModuleState, null>>{
  init(context) {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        context.dispatch("setDark");
      } else {
        context.dispatch("setLight");
      }
    } else {
      context.dispatch("setLight");
    }

    context.dispatch("updateActiveColor", context.state.activeColor)
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

  updateActiveColor(context, newColor: string) {
    const root = document.documentElement.style;

    context.commit("setActiveColor", { newColor: newColor });
    root.setProperty('--active', newColor)
  },

  updateProperties(context) {
    const theme = context.state.activeTheme;
    const colors = context.state.colors;
    const root = document.documentElement.style;

    for (let token = 0; token < colors.length; token += 1) {
      root.setProperty(
        `--${colors[token].name}`,
        `${
          colors[token].value instanceof Map
            ? (colors[token].value as Map<Themes, string>).get(theme)
            : colors[token].value
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
