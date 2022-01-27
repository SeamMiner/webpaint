process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  pwa: {
    manifestOptions: {
      name: "Web Paint",
      short_name: "Web Paint",
      start_url: ".",
      display: "standalone",
      theme_color: "#06B896",
    },

    themeColor: "#06B896",
    msTileColor: "#06B896",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Web Paint — draw pictures, figures & more";
      return args;
    });
  },
};
