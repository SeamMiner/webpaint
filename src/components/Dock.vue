<template>
  <div class="dock dock__section">
    <BrushThickness></BrushThickness>
    <OpacityTool></OpacityTool>
    <PickedColorTool></PickedColorTool>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrushThickness from "@/components//Dock/BrushThickness.vue";
import OpacityTool from "@/components//Dock/OpacityTool.vue";
import PickedColorTool from "@/components//Dock/PickedColorTool.vue";

export default defineComponent({
  components: {
    BrushThickness,
    OpacityTool,
    PickedColorTool,
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
