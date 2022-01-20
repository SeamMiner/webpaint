<template>
  <div class="dock">
    <div class="controlPanel">
      <Button
        class="move"
        data-size="small"
        data-type="accent"
        data-slot="icon"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.move')} <span>V</span>`,
          html: true,
        }"
      >
        <img :src="require('@/assets/Arrow.svg')" alt="Arrow" />
      </Button>
      <Button
        class="scale"
        data-size="small"
        data-type="white"
        data-slot="icon"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.zoom')} <span>M</span>`,
          html: true,
        }"
        @click="paint.magnifier()"
      >
        <img :src="require('@/assets/Magnifier.svg')" alt="Scale" />
      </Button>
    </div>
    <div class="drawTools">
      <Pen
        @click="
          lineCap_ = 'round';
          activeDrawTool_ = 'pen';
        "
        :class="{ active: activeDrawTool_ == 'pen' }"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.pen')} <span>P</span>`,
          html: true,
        }"
      />
      <Marker
        @click="
          lineCap_ = 'square';
          activeDrawTool_ = 'marker';
        "
        :class="{ active: activeDrawTool_ == 'marker' }"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.marker')} <span>Shift + P</span>`,
          html: true,
        }"
      />
      <Erase
        @click="
          lineCap_ = 'eraser';
          activeDrawTool_ = 'erase';
        "
        :class="{ active: activeDrawTool_ == 'erase' }"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.eraser')} <span>E</span>`,
          html: true,
        }"
      />
      <Magic
        @click="paint.eraseAll()"
        v-tooltip.top-center="{
          content: `${t('pages.home.tooltip.magic')} <span>Shift + E</span>`,
          html: true,
        }"
      />
    </div>
    <BrushThickness
      v-tooltip.top-center="{
        content: `${t('pages.home.tooltip.thickness')} <span>T + [1-5]</span>`,
        html: true,
      }"
    />
    <OpacityTool v-tooltip.top-center="t('pages.home.tooltip.opacity')" />
    <PickedColorTool
      v-tooltip.top-center="{
        content: `${t('pages.home.tooltip.color')} <span>C + [1-6]</span>`,
        html: true,
      }"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import { useHotkey } from "vue-use-hotkey";
import { useStore } from "vuex";

import Button from "@/components/Button.vue";

import BrushThickness from "@/components/Dock/BrushThickness.vue";
import OpacityTool from "@/components/Dock/OpacityTool.vue";
import PickedColorTool from "@/components/Dock/PickedColorTool.vue";

import Erase from "@/components/Dock/DrawTools/Erase.vue";
import Magic from "@/components/Dock/DrawTools/Magic.vue";
import Marker from "@/components/Dock/DrawTools/Marker.vue";
import Pen from "@/components/Dock/DrawTools/Pen.vue";
import { useI18n } from "vue-i18n";

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
    const { t } = useI18n();
    const store = useStore();

    const paint = computed(() => store.state.paint.paint);
    const lineCap_ = ref(paint.value._lineCap);
    const activeDrawTool_ = ref("pen");

    watchEffect(() => {
      paint.value._lineCap = lineCap_.value;
    });

    useHotkey([
      {
        keys: ["v"],
        handler() {
          paint.value.move();
          activeDrawTool_.value = "move";
        },
      },
      {
        keys: ["m"],
        handler() {
          paint.value.magnifier();
          activeDrawTool_.value = "magnifier";
        },
      },
      {
        keys: ["p"],
        handler() {
          lineCap_.value = "round";
          activeDrawTool_.value = "pen";
        },
      },
      {
        keys: ["P"],
        handler() {
          lineCap_.value = "square";
          activeDrawTool_.value = "marker";
        },
      },
      {
        keys: ["e"],
        handler() {
          lineCap_.value = "eraser";
          activeDrawTool_.value = "eraser";
        },
      },
      {
        keys: ["E"],
        handler() {
          paint.value.eraseAll();
        },
      },
    ]);

    return {
      lineCap_,
      activeDrawTool_,
      paint,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.dock {
  animation: dissolve 0.6s ease-in-out,
    dockAppears 0.45s cubic-bezier(0.18, 0, 0.51, 1.26);
  background: rgb(var(--neutral));
  box-sizing: border-box;
  box-shadow: inset 0px 0px 0px 1px rgba(var(--base) / 0.1),
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
      transition: background-color 0.2s ease-out;
    }

    .scale:hover,
    :focus {
      background-color: rgba(var(--systematic) / 0.7);
    }
    .scale:active {
      background-color: rgba(var(--accent));
    }
  }

  .drawTools {
    grid-area: draw;
    color: rgb(var(--dock-draw));
    height: 8.125rem;
    display: flex;
    align-items: flex-start;

    svg,
    div {
      margin-top: 0.3125rem;
    }

    & > * {
      cursor: pointer;
      transition: margin-top 0.15s ease-in-out;
      margin-top: 0;

      &:hover,
      &.active {
        outline: none;
        margin-top: -0.75rem;
      }
    }
  }

  .drawTools > svg:first-child {
    animation: dockAppears 0.4s ease-in-out;
  }
  .drawTools > svg:nth-child(2) {
    animation: dockAppears 0.6s ease-in-out;
  }
  .drawTools > .eraser__wrapper {
    animation: dockAppears 0.76s ease-in-out;
  }
  .drawTools > svg:nth-child(4) {
    animation: dockAppears 0.84s ease-in-out;
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
