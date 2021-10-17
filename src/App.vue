<template>
  <div class="container">
    <Navbar class="navbar"></Navbar>
    <router-view class="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { Themes } from '@/store/themes'
import { useStore } from "vuex";

import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar
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
})
</script>


<style lang="scss">
#app {
  font-family: Helvetica, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--red)
}

*, :after, :before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

:root {
  --grey: #F5F4F4;
  --blue: #157EF9;
  --orange: #FFD030;
  --red: #FC3141;
  --black-theme: #1D1D1D;
  // These are temporary variables only for easier developing
}

.container {
  min-height: 100vh;
  width: 100%;
  // padding: 1.5rem 4rem 2.5rem 4rem;
  display: grid;
  grid: 'navbar' minmax(40px, min-content)
        'content' auto
        / 100%;
  background-color: rgb(var(--bg));
  color: rgb(var(--black-white));

  .navbar {
    grid-area: navbar;
    padding: 1.5rem 4rem; //TODO: throw it to component
  }
  
  .content {
    grid-area: content;
  }
}

</style>
