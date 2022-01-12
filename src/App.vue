<template>
  <div class="container">
    <Navbar class="navbar"></Navbar>
    <MobileNavbar class="mobile__navbar"></MobileNavbar>
    <router-view class="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Navbar: defineAsyncComponent(() => import("./components/Navbar.vue")),
    MobileNavbar: defineAsyncComponent(
      () => import("./components/MobileNavbar.vue")
    ),
  },
  setup() {
    const store = useStore();
    store.dispatch("theme/init");
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "HelveticaNeueCyr";
  src: url("./assets/fonts/HelveticaNeueCyr-Bold.eot");
  src: local("./assets/fonts/HelveticaNeueCyr-Bold"),
    url("./assets/fonts/HelveticaNeueCyr-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/HelveticaNeueCyr-Bold.woff2") format("woff2"),
    url("./assets/fonts/HelveticaNeueCyr-Bold.woff") format("woff"),
    url("./assets/fonts/HelveticaNeueCyr-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "HelveticaNeueCyr";
  src: url("./assets/fonts/HelveticaNeueCyr-Italic.eot");
  src: local("./assets/fonts/HelveticaNeueCyr-Italic"),
    url("./assets/fonts/HelveticaNeueCyr-Italic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/HelveticaNeueCyr-Italic.woff2") format("woff2"),
    url("./assets/fonts/HelveticaNeueCyr-Italic.woff") format("woff"),
    url("./assets/fonts/HelveticaNeueCyr-Italic.ttf") format("truetype");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "Graphik LCG";
  src: url("./assets/fonts/GraphikLCG-Medium.eot");
  src: local("Graphik LCG Medium"), local("./assets/fonts/GraphikLCG-Medium"),
    url("./assets/fonts/GraphikLCG-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/GraphikLCG-Medium.woff2") format("woff2"),
    url("./assets/fonts/GraphikLCG-Medium.woff") format("woff"),
    url("./assets/fonts/GraphikLCG-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

#app {
  font-family: "Inter", "HelveticaNeueCyr", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
:after,
:before {
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html {
  background-color: rgb(var(--systematic));
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  margin: 0;
}

.container {
  min-height: 100vh;
  width: 100%;
  // padding: 1.5rem 4rem 2.5rem 4rem;
  display: grid;
  grid:
    "navbar" minmax(90px, min-content)
    "content" 1fr
    / 100%;
  background-color: rgb(var(--systematic));
  color: rgb(var(--on-neutral));

  .content {
    grid-area: content;
  }

  @media (max-width: 576px) {
    .paint {
      padding: 0 1rem !important;
    }
  }

  @keyframes dockAppears {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes dissolve {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.v-popper__popper {
  z-index: 10000;

  &.v-popper__popper--hidden {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &.v-popper__popper--shown {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }

  &.v-popper__popper--skip-transition {
    transition: none !important;

    & > .v-popper__wrapper {
      transition: none !important;
    }
  }

  .v-popper__wrapper {
    .v-popper__inner {
      display: flex;
      gap: 0.75rem;
      background: rgb(var(--systematic));
      color: rgb(var(--base));
      box-sizing: border-box;
      box-shadow: inset 0px 0px 0px 1px rgba(var(--base) / 0.1);
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-family: "Inter", "HelveticaNeueCyr", system-ui, sans-serif;

      & span {
        color: rgba(var(--base) / 0.6);
      }
    }

    .v-popper__arrow-outer,
    .v-popper__arrow-inner {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: 5px;
      border-color: rgb(var(--systematic));
      z-index: 1;
    }
  }

  &[data-popper-placement^="top"] {
    margin-bottom: 5px;

    .v-popper__arrow-inner,
    .v-popper__arrow-outer {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[data-popper-placement^="bottom"] {
    margin-top: 5px;

    .v-popper__arrow-outer,
    .v-popper__arrow-inner {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>
