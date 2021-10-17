<template>
  <Logo></Logo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  components: {
    Logo
  },
  setup() {
    console.log('this is logo')
  },
})
</script>

<style lang="scss" scoped>

</style>
