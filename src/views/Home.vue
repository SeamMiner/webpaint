<template>
  <section class="paint">
    <div class="goDesktop">
      <b v-html="t('pages.home.cap.title')"></b>
      <p v-html="t('pages.home.cap.description')"></p>
      <svg
        width="320"
        height="457"
        viewBox="0 0 320 457"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M216.412 367.408L212.239 158.499C212.155 154.297 204.536 150.616 203.391 145.017C203.015 143.181 201.634 141.715 199.824 141.23L129.263 122.323C127.453 121.838 125.524 122.417 124.281 123.82C120.489 128.095 112.05 127.475 109.877 131.071L1.80847 309.905C-25.9595 355.856 -47.1041 405.496 -61 457.356L197.08 526.509C210.976 474.648 217.484 421.087 216.412 367.408Z"
          fill="#FEFFFF"
        />
        <path
          d="M209.765 158.549L213.938 367.458C214.99 420.079 208.724 472.587 195.326 523.477L-57.9649 455.608C-44.1236 404.837 -23.2953 356.231 3.92582 311.185L111.994 132.351C112.154 132.087 112.546 131.714 113.517 131.282C114.477 130.855 115.658 130.512 117.122 130.087L117.162 130.076C117.218 130.059 117.276 130.043 117.333 130.026C120.013 129.249 123.727 128.172 126.132 125.461C126.753 124.76 127.718 124.47 128.623 124.713L199.184 143.619C200.089 143.862 200.779 144.595 200.967 145.513C201.693 149.063 204.372 151.853 206.304 153.866L206.428 153.995L206.456 154.024C207.512 155.124 208.363 156.012 208.981 156.862C209.606 157.721 209.759 158.24 209.765 158.549Z"
          stroke="black"
          stroke-opacity="0.1"
          stroke-width="4.94786"
          stroke-linejoin="round"
        />
        <path
          d="M194.247 39.0589L200.388 141.38L128.699 122.171L185.179 36.6291C187.799 32.661 193.962 34.3125 194.247 39.0589Z"
          fill="#4A4A4A"
        />
        <g opacity="0.1" filter="url(#filter0_f_369_4255)">
          <path
            d="M103.75 183.147C108.994 163.573 129.113 151.957 148.687 157.202C168.26 162.447 179.876 182.566 174.631 202.139L125.793 384.407C120.548 403.98 100.429 415.596 80.8556 410.351C61.2822 405.107 49.6664 384.988 54.9111 365.414L103.75 183.147Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_369_4255"
            x="-5.72252"
            y="96.5685"
            width="240.987"
            height="374.416"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="29.6871"
              result="effect1_foregroundBlur_369_4255"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="canvas">
      <canvas
        ref="canvas"
        id="canvas"
        :style="{
          cursor: `url(${require(`@/assets/cursors/${
            paint._cursor || 'pen'
          }.svg`)}) 0 24, crosshair`,
        }"
      ></canvas>
    </div>
    <div class="dock">
      <div data-made-by="@SeamMiner and @greeneboy"></div>
      <Dock />
      <!-- <Button data-type="accent" data-size="big" data-slot="text">
        {{ t("pages.home.workButton") }}
      </Button> -->
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  onUnmounted,
  computed,
} from "vue";

import { Paint } from "../paint/main";

import Dock from "@/components/Dock.vue";
// import Button from "@/components/Button.vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Dock,
  },
  name: "Home",

  setup() {
    const { t } = useI18n();

    const store = useStore();

    const canvas: Ref<HTMLCanvasElement | null> = ref(null);
    const paint = computed(() => store.state.paint.paint);

    onMounted(() => {
      store.commit("paint/change", new Paint(canvas.value!));
      paint.value.init();
    });

    const shortCut = (e: KeyboardEvent) => {
      if (
        (e.code == "KeyY" && (e.ctrlKey || e.metaKey)) ||
        (e.code == "KeyZ" && (e.ctrlKey || e.metaKey) && e.shiftKey)
      ) {
        paint.value.redo();
      } else if (e.code == "KeyZ" && (e.ctrlKey || e.metaKey)) {
        paint.value.undo();
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", shortCut);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", shortCut);
    });

    return {
      canvas,
      t,
      paint,
    };
  },
});
</script>

<style lang="scss" scoped>
.paint {
  display: grid;
  grid:
    "canvas" auto
    "dock" min-content
    / 100%;
  gap: 1.5rem;
  width: 100%;
  padding: 0 4rem 1.5rem;

  & > * {
    min-height: 100px;
  }

  @media (max-width: 992px) {
    padding: 0 1rem;
  }

  .canvas {
    grid-area: canvas;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    overflow-x: auto;
    background: rgb(var(--white));
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    touch-action: none;

    & > canvas {
      image-rendering: pixelated;
    }

    &::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }

    &::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(var(--black) / 0);
      background-clip: padding-box;
      background-color: rgba(var(--black) / 0.2);
      border-radius: 7px;
      box-shadow: inset -1px -1px 0px rgba(var(--black) / 0.05),
        inset 1px 1px 0px rgba(var(--blackVM) / 0.05);
    }

    &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  & > .dock {
    grid-area: dock;
    display: grid;
    grid: min-content / 1fr max-content 1fr;
    justify-content: space-between;
    justify-items: flex-end;
    gap: 1.5rem;
    padding: 1.25rem 1.625rem;
    background: radial-gradient(
      circle at 2px 2px,
      rgba(var(--base) / 0.1) 2px,
      rgb(var(--systematic)) 2px
    );
    background-size: 1.75rem 1.75rem;

    button {
      animation: dockAppears 0.6s cubic-bezier(0.18, 0, 0.51, 1.26);
    }
  }

  .goDesktop {
    display: none;
  }

  @media (max-width: 576px) {
    .goDesktop {
      padding: 4rem 1rem;
      position: relative;
      overflow: hidden;
      display: block;
      grid-area: canvas;
      width: 100%;
      height: 100%;
      background: rgb(var(--white));
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
      margin-bottom: 2rem;
      text-align: center;

      b {
        font-weight: 700;
        font-size: 64px;
        line-height: 1;
        letter-spacing: -0.045em;
        color: #1d1d1d;
      }

      p {
        font-weight: normal;
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: -0.38px;
        color: #4a4a4a;
      }

      svg {
        position: absolute;
        left: 0;
        bottom: -2rem;
      }
    }
    .dock {
      display: none;
    }
  }

  @media (max-height: 768px) {
    .goDesktop {
      svg {
        display: none;
      }
    }
  }
}
</style>
