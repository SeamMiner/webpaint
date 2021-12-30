<template>
  <div class="dock dock__section">
    <BrushThickness></BrushThickness>
    <OpacityTool></OpacityTool>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrushThickness from '@/components//Dock/BrushThickness.vue'
import OpacityTool from '@/components//Dock/OpacityTool.vue'

export default defineComponent({
  components: {
    BrushThickness,
    OpacityTool
  },
  setup() {
    console.log("this is dock");
  },
});
</script>

<style lang="scss" scoped>
.dock__section {
}
</style>
