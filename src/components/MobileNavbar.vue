<template>
  <div class="mobile__navbar">
    <div class="mobile__navbar__first__row">
      <Logo></Logo>
      <div class="buttons">
        <Button
          @click="switchTheme"
          type="icon"
          v-tooltip.top-center="{
            content: `${t('navbar.tooltip.theme')} <span>Shift + T</span>`,
            html: true,
          }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5952 23.1903C17.9384 23.1903 23.1903 17.927 23.1903 11.5952C23.1903 5.25192 17.927 0 11.5838 0C5.25192 0 0 5.25192 0 11.5952C0 17.927 5.26329 23.1903 11.5952 23.1903ZM11.5952 21.2578C6.22955 21.2578 1.94389 16.9608 1.94389 11.5952C1.94389 6.22955 6.21819 1.93253 11.5838 1.93253C16.9494 1.93253 21.2464 6.22955 21.2578 11.5952C21.2691 16.9608 16.9608 21.2578 11.5952 21.2578ZM11.8907 18.2226C14.6304 18.2226 16.9835 16.5401 17.7906 14.4712C17.8588 14.3348 17.8702 14.187 17.8702 14.1302C17.8702 13.8914 17.6769 13.7323 17.495 13.7323C17.4155 13.7323 17.3359 13.7437 17.2222 13.7891C16.7448 13.9483 15.9377 14.1188 15.1533 14.1188C11.7088 14.1188 9.50348 11.9589 9.50348 8.50311C9.50348 7.78694 9.69673 6.77521 9.90135 6.24092C9.96956 6.09314 9.96956 6.0022 9.96956 5.94536C9.96956 5.77484 9.84451 5.58159 9.60579 5.58159C9.52621 5.58159 9.37843 5.59296 9.23065 5.66116C6.87752 6.59332 5.29739 9.13971 5.29739 11.7998C5.29739 15.5398 8.16208 18.2226 11.8907 18.2226Z"
            />
          </svg>
        </Button>
        <Button
          @click="switchLang"
          type="icon"
          v-tooltip.top-center="{
            content: `${t('navbar.tooltip.lang')} <span>Shift + L</span>`,
            html: true,
          }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 23C17.7912 23 23 17.7799 23 11.5C23 5.20882 17.7799 0 11.4887 0C5.20882 0 0 5.20882 0 11.5C0 17.7799 5.2201 23 11.5 23ZM4.75784 4.19412C5.88529 3.14559 7.26078 2.35637 8.77157 1.91667C7.99363 2.70588 7.32843 3.82206 6.83235 5.19755C6.03186 4.93824 5.33284 4.6 4.75784 4.19412ZM14.2397 1.92794C15.7392 2.36765 17.1034 3.15686 18.2422 4.20539C17.6672 4.61127 16.9681 4.93824 16.1676 5.19755C15.6716 3.83333 15.0064 2.71716 14.2397 1.92794ZM8.28676 5.56961C8.91814 3.84461 9.79755 2.60441 10.7672 2.17598V5.82892C9.87647 5.7951 9.05343 5.7049 8.28676 5.56961ZM12.2441 2.17598C13.2025 2.60441 14.0819 3.84461 14.7132 5.56961C13.9466 5.7049 13.1235 5.7951 12.2441 5.82892V2.17598ZM1.55588 10.7559C1.71373 8.70392 2.51422 6.79853 3.75441 5.2652C4.45343 5.7951 5.35539 6.2348 6.40392 6.57304C6.07696 7.83578 5.87402 9.2451 5.81765 10.7559H1.55588ZM17.1824 10.7559C17.126 9.2451 16.923 7.83578 16.5961 6.57304C17.6446 6.2348 18.5466 5.7951 19.2343 5.27647C20.4858 6.79853 21.2863 8.70392 21.4441 10.7559H17.1824ZM12.2441 10.7559V7.30588C13.2588 7.27206 14.2284 7.14804 15.1417 6.95637C15.4348 8.11765 15.6152 9.40294 15.6716 10.7559H12.2441ZM7.32843 10.7559C7.3848 9.40294 7.57647 8.11765 7.85833 6.95637C8.77157 7.14804 9.74118 7.27206 10.7672 7.30588V10.7559H7.32843ZM1.55588 12.2328H5.81765C5.87402 13.7775 6.07696 15.198 6.40392 16.4721C5.36667 16.8103 4.47598 17.25 3.78824 17.7686C2.52549 16.224 1.71373 14.3074 1.55588 12.2328ZM7.32843 12.2328H10.7672V15.7505C9.75245 15.7843 8.78284 15.9083 7.88088 16.0887C7.57647 14.9162 7.37353 13.6083 7.32843 12.2328ZM12.2441 15.7505V12.2328H15.6716C15.6265 13.6083 15.4235 14.9162 15.1191 16.0887C14.2284 15.9083 13.2475 15.7843 12.2441 15.7505ZM16.5961 16.4721C16.923 15.198 17.126 13.7775 17.1824 12.2328H21.4441C21.2863 14.3074 20.4745 16.224 19.2118 17.7686C18.524 17.25 17.6333 16.8103 16.5961 16.4721ZM12.2441 17.2275C13.1123 17.2613 13.9353 17.3402 14.6907 17.4868C14.0593 19.1667 13.1912 20.4069 12.2441 20.8353V17.2275ZM8.30931 17.4868C9.06471 17.3402 9.88774 17.2613 10.7672 17.2275V20.8353C9.80882 20.4069 8.94069 19.1667 8.30931 17.4868ZM16.1564 17.8475C16.9456 18.1069 17.6333 18.4338 18.2083 18.8284C17.0809 19.8544 15.7392 20.6324 14.251 21.0721C15.0064 20.2941 15.6603 19.1892 16.1564 17.8475ZM4.79167 18.8284C5.36667 18.4338 6.05441 18.1069 6.84363 17.8475C7.33971 19.1892 7.99363 20.2941 8.76029 21.0721C7.27206 20.6324 5.91912 19.8544 4.79167 18.8284Z"
            />
          </svg>
        </Button>
      </div>
    </div>
    <ul class="options">
      <div class="option__controls">
        <li
          v-tooltip.top-center="{
            content: `${t('navbar.tooltip.undo')} <span>Ctrl + Z</span>`,
            html: true,
          }"
          @click="paint.undo()"
          class="undo"
        >
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
        <li
          v-tooltip.top-center="{
            content: `${t('navbar.tooltip.redo')} <span>Ctrl + Y</span>`,
            html: true,
          }"
          @click="paint.redo()"
          class="redo"
        >
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
      <!-- <li class="share">
        <Link> {{ t("navbar.share") }} </Link>
      </li> -->
      <li class="about">
        <Link> {{ t("navbar.about") }} </Link>
      </li>
      <li class="help">
        <Link link="https://t.me/greeneboy"> {{ t("navbar.help") }} </Link>
      </li>
      <li class="donate">
        <Link link="https://www.patreon.com/greenelapp">
          {{ t("navbar.donate") }}
        </Link>
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
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useHotkey } from "vue-use-hotkey";

import Logo from "@/components/Logo.vue";
import Link from "@/components/Link.vue";
import Button from "@/components/Button.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Logo,
    Link,
    Button,
  },
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });

    const store = useStore();
    const paint = computed(() => store.state.paint.paint);

    const switchLang = () =>
      (locale.value = locale.value === "en-US" ? "ru-RU" : "en-US");
    const switchTheme = () => store.dispatch("theme/toggle");

    return {
      paint,
      t,
      switchLang,
      switchTheme,
    };
  },
});
</script>

<style lang="scss" scoped>
.mobile__navbar {
  padding: 0.75rem 1rem;
  display: none;
  gap: 2rem;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media (max-width: 992px) {
    display: block;
  }

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
    overflow-x: auto;
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
      transition: background-color 0.2s ease-out;
      background: rgb(var(--neutral));
      border-radius: 50%;
      padding: 0.875rem 0.8125rem 0.75rem;
      color: rgba(var(--on-neutral) / 0.2);

      svg {
        fill: currentColor;
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    .undo:hover,
    :focus,
    .redo:hover,
    :focus {
      background-color: rgba(var(--neutral-hover) / 0.8);
    }

    .undo:active,
    .redo:active {
      background-color: rgba(var(--base) / 0.1);
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

    Button {
      background: rgb(var(--neutral));
      color: rgba(var(--on-neutral));

      svg {
        fill: currentColor;
      }
    }
  }
}
</style>
