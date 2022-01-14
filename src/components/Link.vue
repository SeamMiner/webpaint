<template>
  <template v-if="isExternal">
    <router-link :to="link" :disabled="!link" class="link">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="link" :disabled="!link" target="_blank" class="link">
      <slot></slot>
    </a>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

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

  setup(props) {
    const isExternal = computed(() => {
      const domain = (url: string) =>
        url.replace("http://", "").replace("https://", "").split("/")[0];
      return !domain(props.link);
    });

    return {
      isExternal,
    };
  },
});
</script>

<style lang="scss" scoped>
.link {
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 0.5rem;
  color: rgb(var(--on-neutral));
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: normal;
  transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover,
  &:focus {
    background: rgba(var(--neutral-hover) / 0.8);
  }

  &:focus {
    box-shadow: 0 0 0 0.125rem rgba(var(--on-neutral) / 0.2);
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
