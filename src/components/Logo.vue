<template>
  <b
    ><a href="https://t.me/greeneboy" target="_blank">Greene</a> <i>&</i>
    <a href="https://t.me/SeamMiner" target="_blank">Lapp</a></b
  >
</template>

<style lang="scss" scoped>
* {
  font-family: "HelveticaNeueCyr", "Inter", system-ui, sans-serif;
}

b {
  display: flex;
  font-size: 1.5rem;
  line-height: 1.2;
  gap: 0.125rem;

  & > a {
    color: rgb(var(--on-neutral));
    text-decoration: none;
  }

  i {
    font-weight: 400;
    color: rgb(var(--on-neutral));
  }
}
</style>
