<template>
  <div class="brushes">
    <div class="brush lighter">
      <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5001 8C27.5002 14.5 31.0002 29 17 16.5C16.1667 15.8333 14.6 15.1 15 17.5C15.5 20.5 15.5 26.5 8.00002 29" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brush light">
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3953 8C28.3954 14.5 31.8954 29 17.8952 16.5C17.0619 15.8333 15.4952 15.1 15.8952 17.5C16.3952 20.5 16.3952 26.5 8.89522 29" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brush normal">
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2905 8C28.2905 14.5 31.7905 29 17.7903 16.5C16.957 15.8333 15.3904 15.1 15.7904 17.5C16.2904 20.5 16.2904 26.5 8.79036 29" stroke="currentColor" stroke-width="4.4" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brush bold">
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.1856 8C28.1857 14.5 31.6857 29 17.6855 16.5C16.8521 15.8333 15.2855 15.1 15.6855 17.5C16.1855 20.5 16.1855 26.5 8.6855 29" stroke="currentColor" stroke-width="5.4" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brush bolder">
      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0808 8C28.0808 14.5 31.5808 29 17.5806 16.5C16.7473 15.8333 15.1806 15.1 15.5806 17.5C16.0806 20.5 16.0806 26.5 8.58064 29" stroke="currentColor" stroke-width="8.4" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
  },
  setup() {
    console.log("this is dock");
  },
});
</script>

<style lang="scss" scoped>
.brushes {
  display: grid;
  gap: .375rem;
  grid: 1fr / repeat(5, min-content);

  .brush {
    display: flex;
    border-radius: .75rem;
    background-color: transparent;
    color: rgb(var(--thickness-brush));

    &:hover {
      cursor: pointer;
      background-color: rgb(var(--thickness-bg));
    }
  }
}
</style>
