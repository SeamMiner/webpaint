<template>
  <router-link :to="link" :disabled="!link" class="link">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum Types {
  Header = "header",
}

export default defineComponent({
  props: {
    type: {
      type: String as () => Types,
      default: Types.Header,
    },
    link: {
      type: String,
      default: "",
    },
  },

  setup() {
    console.log();
  },
});
</script>

<style lang="scss" scoped>
.link {
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 0.5rem;
  color: rgb(var(--black-white));
  border-radius: 0.75rem;
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover,
  &:focus {
    background: rgba(var(--black-grey) / 0.8);
  }

  &:focus {
    box-shadow: 0 0 0 0.125rem rgba(var(--black-white) / 0.2);
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
