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
      name: "Web Paint — draw pictures, figures & more",
      short_name: "Web Paint",
      start_url: ".",
      display: "standalone",
      theme_color: "#9746FF",
    },

    themeColor: "#9746FF",
    msTileColor: "#9746FF",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
