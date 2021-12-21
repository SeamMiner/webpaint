<template>
  <div class="dock dock__section">
    <BrushThickness></BrushThickness>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//import BrushThickness from '@/Dock/BrushThickness.vue'

export default defineComponent({
  components: {
    //BrushThickness
  },
  setup() {
      console.log('this is dock')
  },
})
</script>

<style lang="scss" scoped>
  .dock__section {
  }
</style>