<template>
  <div class="container">
    <Navbar class="navbar"></Navbar>
    <MobileNavbar class="mobile__navbar"></MobileNavbar>
    <router-view class="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { Themes } from "@/store/themes";
import { useStore } from "vuex";

import Navbar from "@/components/Navbar.vue";
import MobileNavbar from "@/components/MobileNavbar.vue";

export default defineComponent({
  components: {
    Navbar,
    MobileNavbar,
  },
  setup() {
    const store = useStore();
    store.dispatch("theme/init");

    //Temporary functions
    const shortCut = (e: KeyboardEvent) => {
      if ("1".includes(e.key)) {
        store.dispatch("theme/toggle", Themes.white);
      }
      if ("2".includes(e.key)) {
        store.dispatch("theme/toggle", Themes.black);
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", shortCut);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", shortCut);
    });
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
  text-align: center;
}

*,
:after,
:before {
  box-sizing: border-box;
}

html {
  background-color: rgb(var(--systematic));
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
    "navbar" minmax(40px, min-content)
    "content" auto
    / 100%;
  background-color: rgb(var(--systematic));
  color: rgb(var(--on-neutral));

  .navbar {
    grid-area: navbar;
    padding: 1.5rem 4rem; //TODO: throw it to component

    @media (max-width: 992px) {
      display: none;
    }
  }

  .mobile__navbar {
    display: none;

    @media (max-width: 992px) {
      display: block;
    }
  }

  .content {
    grid-area: content;
  }

  @media (max-width: 576px) {
    .paint {
      padding: 0 1rem !important;
    }
  }
}
</style>
