<template>
  <div class="opacityTool">
    <input type="range" min="0.1" max="1" step="0.1" id="opacity">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    console.log('opacity');
    
  },
})
</script>

<style lang="scss" scoped>
.opacityTool {
  input {
    appearance: none;
    background: none;
    width: 100%;
    border: .0625rem solid rgba(var(--black-white) / 0.1);
    box-sizing: border-box;
    border-radius: 1.5rem;

    :focus {
      outline: none;
    }

    ::-webkit-slider-runnable-track {
      
    }
  }
}
</style>
