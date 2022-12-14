import { ActionTree, MutationTree } from "vuex";

enum Themes {
  black = "black",
  white = "white",
  blue = "blue",
  orange = "orange",
  red = "red",
}

enum themeVariables {
  accent = "accent",
  onAccent = "on-accent",
  accentHover = "accent-hover",
  neutral = "neutral",
  onNeutral = "on-neutral",
  neutralHover = "neutral-hover",
  systematic = "systematic",
  base = "base",
  grey = "grey",
  blue = "blue",
  orange = "orange",
  red = "red",
  semiBlack = "semiBlack",
  black = "black",
  white = "white",
  checkedOpacity = "checked-opacity",
  dockDraw = "dock-draw",
  active = "active",
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
  activeColor: "0 0 0",

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
      name: themeVariables.accent,
      value: new Map([
        [Themes.black, "134 41 253"],
        [Themes.white, "151 70 255"],
      ]),
    },
    {
      name: themeVariables.onAccent,
      value: "255 255 255",
    },
    {
      name: themeVariables.accentHover,
      value: new Map([
        [Themes.black, "159 85 255"],
        [Themes.white, "138 53 246"],
      ]),
    },
    {
      name: themeVariables.neutral,
      value: new Map([
        [Themes.black, "46 46 46"],
        [Themes.white, "255 255 255"],
      ]),
    },
    {
      name: themeVariables.onNeutral,
      value: new Map([
        [Themes.black, "255 255 255"],
        [Themes.white, "0 0 0"],
      ]),
    },
    {
      name: themeVariables.neutralHover,
      value: new Map([
        [Themes.black, "0 0 0"],
        [Themes.white, "227 227 227"],
      ]),
    },
    {
      name: themeVariables.systematic,
      value: new Map([
        [Themes.black, "29 29 29"],
        [Themes.white, "245 244 244"],
      ]),
    },
    {
      name: themeVariables.base,
      value: new Map([
        [Themes.black, "255 255 255"],
        [Themes.white, "0 0 0"],
      ]),
    },
    {
      name: themeVariables.checkedOpacity,
      value: new Map([
        [Themes.black, "64 64 64"],
        [Themes.white, "225 225 225"],
      ]),
    },
    {
      name: themeVariables.dockDraw,
      value: new Map([
        [Themes.black, "29 29 29"],
        [Themes.white, "254 255 255"],
      ]),
    },
    {
      name: themeVariables.grey,
      value: "245 244 244",
    },
    {
      name: themeVariables.blue,
      value: "21 126 249",
    },
    {
      name: themeVariables.orange,
      value: "255 208 48",
    },
    {
      name: themeVariables.red,
      value: "252 49 65",
    },
    {
      name: themeVariables.semiBlack,
      value: "29 29 29",
    },
  ],
};

const themeModuleMutations = <MutationTree<ThemeModuleState>>{
  change(state, props: { newTheme: Themes }) {
    state.activeTheme = props.newTheme;
    localStorage.setItem("webpaint:selectedTheme", props.newTheme);
  },
  setActiveColor(state, props: { newColor: string }) {
    state.activeColor = props.newColor;
  },
};

const themeModuleActions = <ActionTree<ThemeModuleState, null>>{
  init(context) {
    const theme = localStorage.getItem("webpaint:selectedTheme") || "";
    if (Object.values<string>(Themes).includes(theme)) {
      context.dispatch("setTheme", theme);
    } else if (
      window.matchMedia("(prefers-color-scheme)").media !== "not all"
    ) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        context.dispatch("setTheme", Themes.black);
      } else {
        context.dispatch("setTheme", Themes.white);
      }
    } else {
      context.dispatch("setTheme", Themes.white);
    }

    context.dispatch("updateActiveColor", context.state.activeColor);
  },

  setTheme(context, newTheme) {
    context.commit("change", { newTheme: newTheme });
    context.dispatch("updateProperties");
  },

  toggle(context) {
    context.commit("change", {
      newTheme:
        context.state.activeTheme === Themes.white
          ? Themes.black
          : Themes.white,
    });
    context.dispatch("updateProperties");
  },

  updateActiveColor(context, newColor: string) {
    const root = document.documentElement.style;

    context.commit("setActiveColor", { newColor: newColor });
    root.setProperty("--active", newColor);
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
