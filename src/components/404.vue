<template>
  <div class="error__msg">
    <div class="error__msg__contents">
      <h1 v-html="t('pages.404.title')"></h1>
      <router-link to="/">{{ t("pages.404.link") }}</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style lang="scss" scoped>
.error__msg {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 4rem 1.5rem;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 5%);

  @media (max-width: 992px) {
    padding: 0 1rem 2rem 1rem;
  }
}

.error__msg__contents {
  background-color: rgb(var(--white));
  background-image: url(../assets/404.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  height: 100%;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  padding: 12rem 1rem;

  h1 {
    max-width: 27.2rem;
    font-weight: bold;
    font-size: 4rem;
    line-height: 1;
    text-align: center;
    letter-spacing: -0.045em;
    color: rgb(var(--black));

    @media (max-width: 576px) {
      max-width: 20rem;
      font-size: 40px;
    }
  }

  a {
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.0238rem;
    text-decoration: none;
    color: rgb(var(--accent));
    transition: all 0.2s ease-out;

    &:hover,
    &.active {
      color: rgb(var(--accent-hover));
    }
    &:focus {
      box-shadow: 0 0 0 0.125rem rgba(var(--accent-hover) / 0.2);
    }
  }

  @media (max-width: 576px) {
    padding: 6rem 1rem;
  }
}
</style>
