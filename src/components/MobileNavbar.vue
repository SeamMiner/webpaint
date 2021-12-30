<template>
  <div class="mobile__navbar">
    <div class="mobile__navbar__first__row">
      <Logo></Logo>
      <div class="buttons">
        <Button type="icon">
          <img
            :src="require('@/assets/theme_mobile.svg')"
            alt="theme switcher"
          />
        </Button>
        <Button type="icon">
          <img :src="require('@/assets/lang_mobile.svg')" alt="lang switcher" />
        </Button>
      </div>
    </div>
    <ul class="options">
      <div class="option__controls">
        <li class="undo">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.998 9.66533C14.998 12.83 12.9191 14.9012 9.48495 14.9012H7.58309C7.01331 14.9012 6.60522 14.47 6.60522 13.9387C6.60522 13.4074 7.01331 12.984 7.58309 12.984H9.39255C11.7564 12.984 13.1039 11.5595 13.1039 9.60373C13.1039 7.65568 11.7564 6.27741 9.39255 6.27741H4.78036L3.0171 6.20041L4.28757 7.26299L6.08933 9.01085C6.26642 9.18794 6.38192 9.39584 6.38192 9.68843C6.38192 10.2197 6.00463 10.6124 5.44254 10.6124C5.20385 10.6124 4.94206 10.5046 4.74956 10.3121L0.399161 6.03102C0.214365 5.84622 0.106567 5.57673 0.106567 5.31493C0.106567 5.05314 0.214365 4.79135 0.399161 4.60655L4.74956 0.317749C4.94206 0.125254 5.20385 0.0174561 5.44254 0.0174561C6.00463 0.0174561 6.38192 0.410147 6.38192 0.941435C6.38192 1.23403 6.26642 1.44192 6.08933 1.61902L4.28757 3.37458L3.0171 4.43715L4.78036 4.36016H9.39255C12.8806 4.36016 14.998 6.52381 14.998 9.66533Z"
            />
          </svg>
        </li>
        <li class="redo">
          <svg
            width="15"
            height="15"
            style="transform: rotateY(180deg)"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.998 9.66533C14.998 12.83 12.9191 14.9012 9.48495 14.9012H7.58309C7.01331 14.9012 6.60522 14.47 6.60522 13.9387C6.60522 13.4074 7.01331 12.984 7.58309 12.984H9.39255C11.7564 12.984 13.1039 11.5595 13.1039 9.60373C13.1039 7.65568 11.7564 6.27741 9.39255 6.27741H4.78036L3.0171 6.20041L4.28757 7.26299L6.08933 9.01085C6.26642 9.18794 6.38192 9.39584 6.38192 9.68843C6.38192 10.2197 6.00463 10.6124 5.44254 10.6124C5.20385 10.6124 4.94206 10.5046 4.74956 10.3121L0.399161 6.03102C0.214365 5.84622 0.106567 5.57673 0.106567 5.31493C0.106567 5.05314 0.214365 4.79135 0.399161 4.60655L4.74956 0.317749C4.94206 0.125254 5.20385 0.0174561 5.44254 0.0174561C6.00463 0.0174561 6.38192 0.410147 6.38192 0.941435C6.38192 1.23403 6.26642 1.44192 6.08933 1.61902L4.28757 3.37458L3.0171 4.43715L4.78036 4.36016H9.39255C12.8806 4.36016 14.998 6.52381 14.998 9.66533Z"
            />
          </svg>
        </li>
      </div>
      <li class="share">
        <Link> Share </Link>
      </li>
      <li class="about">
        <Link> About </Link>
      </li>
      <!-- TODO: add link https://t.me/greeneboy -->
      <li class="help">
        <Link> Help </Link>
      </li>
      <li class="donate">
        <Link> Donate </Link>
        <svg
          width="16"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.98.562 1.762 4.727 5.163.758-4.264 3.68.25 5.195-4.396-2.453-5.008 2.453 1.546-5.195-3.345-3.68 5.352-.758L8.98.562Z"
            fill="#FFD030"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Link from "@/components/Link.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  components: {
    Logo,
    Link,
    Button,
  },
  setup() {
    console.log("this is logo");
  },
});
</script>

<style lang="scss" scoped>
.mobile__navbar {
  padding: 0.75rem 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.2s ease-in-out;

  .mobile__navbar__first__row {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    @media (max-width: 576px) {
      padding-left: 0.5rem;
    }
  }

  .options {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 576px) {
      gap: 0;

      @media (max-width: 374px) {
        overflow-x: auto;
      }

      li {
        margin-right: 1rem;
      }
    }

    & li {
      display: flex;
      cursor: pointer;
    }

    .option__controls {
      display: flex;
      gap: 0.5rem;
    }

    .undo,
    .redo {
      background: rgb(var(--grey-white));
      border-radius: 50%;
      padding: 0.875rem 0.8125rem 0.75rem;
      color: rgba(var(--black-white) / 0.2);

      svg {
        fill: currentColor;
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    .donate {
      display: flex;
      flex-flow: nowrap row;
      justify-content: flex-start;
      align-content: center;
    }
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
