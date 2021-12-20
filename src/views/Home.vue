<template>
  <section class="paint">
    <canvas class="canvas"></canvas>
    <div class="dock"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.paint {
  display: grid;
  grid: 'canvas' minmax(50vh, 1fr)
        'dock' min-content
        / 100%;
  width: 100%;
  height: 100%;
  padding: 0 4rem;

  & > * {
    min-height: 100px;
  }

  .canvas {
    grid-area: canvas;
    width: 100%;
    height: 100%;
    background: rgb(var(--white));
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: .5rem;
  }

  .dock {
    grid-area: dock;
  }
}
</style>