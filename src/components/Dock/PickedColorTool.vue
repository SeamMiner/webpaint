<template>
  <div class="pickedColorTool">
    <input
      type="color"
      class="color"
      id="colorPicker"
      v-model="colorPickerColor"
      :class="{
        active:
          activeColor == hex2rgb(colorPickerColor) &&
          !colors.includes(hex2rgb(colorPickerColor)),
      }"
    />
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
import { computed, defineComponent, watchEffect } from "vue";
import { useStore } from "vuex";
import useDebouncedRef from "@/useDebouncedRef";

/^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

export default defineComponent({
  setup() {
    const store = useStore();
    //TODO: refactor getting colors
    const root = getComputedStyle(document.documentElement);
    const colors: string[] = [];
    ["red", "orange", "grey", "blue", "black"].forEach((color) => {
      colors.push(root.getPropertyValue(`--${color}`));
    });

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

    const colorPickerColor = useDebouncedRef(store.state.theme.activeColor);
    watchEffect(() => setActiveColor(hex2rgb(colorPickerColor.value)));

    return {
      colors,
      activeColor,
      setActiveColor,
      colorPickerColor,
      hex2rgb,
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
    border: 0.0625rem solid rgba(0, 0, 0, 0.05);
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
  }

  .color.active::before,
  input[type="color"]:focus::before {
    content: "";
    position: absolute;
    height: 1rem;
    width: 1rem;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 2px rgba(var(--black-white) 0.1);
    top: calc(50% - 0.5rem);
    left: calc(50% - 0.5rem);
  }

  input[type="color"].color:focus ~ .color.active::before {
    position: relative;
  }

  *.active:not(:first)::before {
    position: relative;
  }
}
</style>
