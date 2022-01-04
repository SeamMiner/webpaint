<template>
  <div class="dock">
    <div class="controlPanel">
      <Button
        class="move"
        data-size="small"
        data-type="accent"
        data-slot="icon"
      >
        <img :src="require('@/assets/Arrow.svg')" alt="Arrow" />
      </Button>
      <Button
        class="scale"
        data-size="small"
        data-type="white"
        data-slot="icon"
      >
        <img :src="require('@/assets/Magnifier.svg')" alt="Scale" />
      </Button>
    </div>
    <div class="drawTools">
      <Pen></Pen>
      <Marker></Marker>
      <Erase></Erase>
      <Magic></Magic>
    </div>
    <BrushThickness></BrushThickness>
    <OpacityTool></OpacityTool>
    <PickedColorTool></PickedColorTool>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

import BrushThickness from "@/components/Dock/BrushThickness.vue";
import OpacityTool from "@/components/Dock/OpacityTool.vue";
import PickedColorTool from "@/components/Dock/PickedColorTool.vue";

import Erase from "@/components/Dock/DrawTools/Erase.vue";
import Magic from "@/components/Dock/DrawTools/Magic.vue";
import Marker from "@/components/Dock/DrawTools/Marker.vue";
import Pen from "@/components/Dock/DrawTools/Pen.vue";

export default defineComponent({
  components: {
    Button,

    BrushThickness,
    OpacityTool,
    PickedColorTool,

    Erase,
    Magic,
    Marker,
    Pen,
  },
  setup() {
    console.log("this is dock");
  },
});
</script>

<style lang="scss" scoped>
.dock {
  background: rgb(var(--dock-bg));
  box-sizing: border-box;
  box-shadow: inset 0px 0px 0px 1px rgba(var(--black) / 0.1),
    0px 19px 48px rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  display: grid;
  grid:
    "control draw thickness colors" min-content
    "control draw opacity colors" min-content / min-content 1fr min-content min-content;
  align-items: center;
  gap: 0.5rem 1.5rem;
  padding-right: 2.5rem;
  overflow: hidden;

  .controlPanel {
    grid-area: control;

    .move,
    .scale {
      padding: 0.875rem 1.5rem;
      border-radius: 0;
      border: none;
      box-shadow: inset -1px 0px 0px rgba(var(--black) / 0.1);
    }
  }

  .drawTools {
    grid-area: draw;
    color: rgb(var(--dock-draw));
    height: 8.125rem;
    display: flex;
    align-items: flex-start;

    & > * {
      cursor: pointer;
      transition: margin-top 0.15s ease-in-out;
      margin-top: 0;

      &:hover {
        margin-top: -0.75rem;
      }
    }
  }

  .brushes {
    grid-area: thickness;
    align-self: flex-end;
  }

  .opacityTool {
    grid-area: opacity;
    align-self: flex-start;
  }

  .pickedColorTool {
    grid-area: colors;
  }
}
</style>
