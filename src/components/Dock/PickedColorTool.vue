<template>
  <div class="pickedColorTool">
    <span
      class="color"
      :class="{
        active:
          activeColor == hex2rgb(colorPickerColor) &&
          !colors.includes(hex2rgb(colorPickerColor)),
      }"
    >
      <input
        ref="colorPicker"
        type="color"
        id="colorPicker"
        class="color"
        v-model="colorPickerColor"
      />
    </span>
    <template v-for="color in colors" :key="color">
      <div
        class="color"
        :style="`background-color: rgb(${color});`"
        @click="setActiveColor(color)"
        :class="{ active: activeColor == color }"
      ></div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect, ref, Ref } from "vue";
import { useStore } from "vuex";
import { useHotkey } from "vue-use-hotkey";
import useDebouncedRef from "@/useDebouncedRef";
import { Hotkey } from "vue-use-hotkey/dist/types/types";

export default defineComponent({
  setup() {
    const store = useStore();
    //TODO: refactor getting colors
    const root = getComputedStyle(document.documentElement);
    const colors: string[] = [];
    const shortcuts: Hotkey[] = [
      {
        keys: ["c", "6"],
        handler() {
          colorPicker.value?.click();
          setActiveColor(hex2rgb(colorPickerColor.value));
        },
      },
    ];
    ["red", "orange", "grey", "blue", "black"].forEach((color, index) => {
      color = root.getPropertyValue(`--${color}`);
      colors.push(color);
      shortcuts.push({
        keys: ["c", `${5 - index}`],
        handler() {
          setActiveColor(color);
        },
      });
    });

    const colorPicker: Ref<HTMLInputElement | null> = ref(null);
    const activeColor = computed(() => store.state.theme.activeColor);
    const setActiveColor = (color: string) => {
      store.dispatch("theme/updateActiveColor", color);
    };

    const hex2rgb = (hex: string) => {
      if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) {
        return (hex = hex.replace("#", ""))
          .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))!
          .map(function (l: string) {
            return parseInt(hex.length % 2 ? l + l : l, 16);
          })
          .join(" ");
      } else {
        return "0 0 0";
      }
    };

    const colorPickerColor = useDebouncedRef(
      store.state.theme.activeColor,
      500
    );

    watchEffect(() => setActiveColor(hex2rgb(colorPickerColor.value)));

    useHotkey(shortcuts);

    return {
      colors,
      activeColor,
      setActiveColor,
      colorPickerColor,
      hex2rgb,
      colorPicker,
    };
  },
});
</script>

<style lang="scss" scoped>
.pickedColorTool {
  display: grid;
  grid-template-columns: repeat(3, 2rem);
  grid-auto-flow: revert;
  gap: 0.75rem;
  transform: rotate(180deg); //TODO: delete this shit

  .color {
    height: 2rem;
    width: 2rem;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }

  input[type="color"] {
    appearance: none;
    background: url("../../assets/colorPicker.png");
    background-repeat: no-repeat;
    background-size: cover;

    &::-webkit-color-swatch-wrapper {
      opacity: 0;
    }
    
    &::-moz-color-swatch {
      opacity: 0;
    }
  }

  .color.active::before,
  input[type="color"]:focus .color.color.active::before {
    content: "";
    position: absolute;
    height: 1rem;
    width: 1rem;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 2px rgba(var(--black) 0.1);
    top: calc(50% - 0.5rem);
    left: calc(50% - 0.5rem);
    z-index: 1;
  }

  input[type="color"]:focus ~ .color.active::before {
    position: relative;
  }

  *.active:not(:first)::before {
    position: relative;
  }
}
</style>
