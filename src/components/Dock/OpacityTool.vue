<template>
  <div class="opacityTool">
    <input
      type="range"
      min="1"
      max="255"
      step="1"
      id="opacity"
      v-model="opacity_"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, computed } from "vue";
import useDebouncedRef from "@/useDebouncedRef";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore()

    const paint = computed(() => store.state.paint.paint)
    const opacity_ = useDebouncedRef(255, 500);


    watchEffect(() => {
      paint.value._opacity =  parseInt(opacity_.value)
    });

    return {
      opacity_,
    };
  },
});
</script>

<style lang="scss" scoped>
input[type="range"] {
  appearance: none;
  background: rgba(var(--checked-opacity))
    url('data:image/svg+xml,\
   <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".25" >\
            <rect x="0" width="200" height="200" />\
            <rect y="200" x="200" width="200" height="200" />\
            </svg>');
  background-size: 21px 21px;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: inset 0 0 0 1px rgba(var(--base) / 0.1);
  margin: 0;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(
    90deg,
    rgba(var(--active) / 0.1) 0%,
    rgba(var(--active)) 100%
  );
  border: none;
  border-radius: 1.5rem;
  width: 100%;
  height: 1.875rem;
  padding: 0 0.25rem;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: 0.1875rem;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: 0.1875rem solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
input[type="range"]::-moz-range-track {
  background: linear-gradient(90deg, transparent 0%, rgba(var(--active)));
  border: none;
  border-radius: 1.5rem;
  width: 100%;
  height: 1.875rem;
  padding-right: 0.5rem;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  margin: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  background: transparent;
  border: 4px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
input[type="range"]::-ms-track {
  background: linear-gradient(90deg, transparent 0%, rgba(var(--active)));
  border: none;
  border-radius: 1.5rem;
  width: 100%;
  height: 1.875rem;
  padding-right: 0.5rem;
  cursor: pointer;
}
input[type="range"]::-ms-thumb {
  margin: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  background: transparent;
  border: 4px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
</style>
