<template>
  <button :data-type="type" :data-size="size" :data-slot="slotType">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum Sizes {
  Small = "small",
  Big = "big",
}

enum Types {
  Accent = "accent",
  White = "white",
}

enum SlotTypes {
  Text = "text",
  Icon = "icon",
}

export default defineComponent({
  props: {
    size: {
      type: String as () => Sizes,
      default: Sizes.Small,
    },
    type: {
      type: String as () => Types,
      default: Types.White,
    },
    slotType: {
      type: String as () => SlotTypes,
      default: SlotTypes.Text,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s ease-in-out;
  background: rgb(var(--neutral));
  color: rgb(var(--on-neutral));

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

button[data-type="accent"] {
  color: rgb(var(--on-accent));
  background: rgb(var(--accent));
  border: 1px solid rgba(var(--base) / 0.1);
  font-family: "Graphik LCG";
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.2;

  &:hover {
    background: rgb(var(--accent-hover));
  }
}

button[data-size="small"] {
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 0.5rem 0.75rem calc(0.5rem + 1px);
  border-radius: 0.75rem;
}

button[data-size="big"] {
  font-size: 1.5rem;
  line-height: calc(1.5rem - 1px);
  padding: 3.25rem 1.875rem calc(3.25rem + 1px);
  box-shadow: 0px 19px 48px rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
}
</style>
