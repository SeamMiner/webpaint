<template>
  <section class="paint">
    <div class="goDesktop">
        <b>H<i>e</i>y!</b>
        <p>Try a&nbsp;desktop version to&nbsp;see the full functionality of&nbsp;WebPaint.</p>
        <svg width="329" height="274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-69.148 137.526a324.79 324.79 0 0 0-2.408 12.249 55.759 55.759 0 0 1-.714 3.408c-4.509 18.608-11.717 40.097-22.12 59.506-9.806 18.295-25.938 41.284-50.948 53.024-29.241 13.725-59.905 7.377-85.86-12.989-23.498-18.439-44.224-48.736-63.683-88.288-6.762-13.744-12.007-20.927-15.156-24.455-1.819 1.236-4.378 3.187-7.753 6.232-7.618 6.872-15.552 15.668-25.834 27.068l-.426.472c-9.583 10.625-21.554 23.886-34.303 34.858-12.48 10.74-30.065 23.224-51.836 27.26-24.398 4.524-48.129-2.589-68.546-19.911-18.628-15.805-33.547-39.171-46.458-66.891-9.236-19.831-16.578-30.834-21.342-36.749-5.135 7.525-11.28 19.68-17.452 36.567a351.334 351.334 0 0 0-5.494 16.32c-7.976 25.691-33.706 42.687-59.908 36.597-24.895-5.786-40.954-30.311-34.098-54.932 3.384-12.154 7.255-24.438 11.611-36.355 9.474-25.924 22.978-55.022 42.035-76.09 9.839-10.878 23.078-21.757 40.026-27.27 7.659-2.492 15.471-3.682 23.28-3.588 10.501.128 20.998 2.578 31.119 7.313 31.76 14.857 55.279 49.85 74.566 91.261 7.996 17.168 14.222 25.832 17.899 29.885 1.482-.993 3.484-2.48 6.047-4.685 35.643-30.676 61.535-77.697 108.283-89.962 86.637-22.73 101.002 80.924 149.373 128.431.939-1.422 2.013-3.2 3.197-5.41 27.232-50.804 18.336-125.61 76.273-154.051 14.893-7.311 31.801-8.563 48.21-2.43 15.078 5.634 26.534 16.266 34.956 26.688 15.468 19.14 28.316 47.126 39.876 81.449 5.323-8.431 11.851-18.593 18.688-27.411 7.218-9.31 20.525-25.003 39.79-32.23 10.926-4.098 23.751-5.472 37.16-1.613 13.01 3.744 23.26 11.455 30.971 19.686 14.297 15.26 24.139 36.893 31.94 59.565 7.707 22.398 17.572 30.02 23.049 32.6 5.91 2.784 12.192 2.407 17.662-.559 5.47-2.967 9.544-8.207 11.09-15.035 5.221-23.055 5.197-50.1 24.676-63.493l2.361-1.624c23.309-16.027 56.223-8.775 63.24 18.629 6.194 24.189 6.794 48.372 1.593 71.339-8.58 37.889-31.86 67.097-60.89 82.842-29.029 15.744-64.392 18.342-97.189 2.894-30.473-14.353-54.787-42.301-70.211-80.552-5.77 9.138-13.204 20.772-21.253 30.678-7.504 9.232-22.039 25.438-43.36 31.09-27.779 7.364-51.137-6.193-66.16-24.418-13.063-15.846-22.518-37.714-30.334-61.709a461.974 461.974 0 0 0-5.235-15.211Z" fill="#000"/>
        </g>
        <defs>
          <filter id="a" x="-685.076" y="0" width="1026.12" height="293.892" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="12.045" dy="20.878"/>
            <feGaussianBlur stdDeviation="42.558"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_365_5571"/>
          </filter>
        </defs>
      </svg>
    </div>
    <canvas class="canvas">
    </canvas>
    <div class="dock"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.paint {
  display: grid;
  grid: 'canvas' minmax(50vh, 1fr)
        'dock' min-content
        / 100%;
  width: 100%;
  height: 100%;
  padding: 0 4rem;

  & > * {
    min-height: 100px;
  }

  .canvas {
    grid-area: canvas;
    width: 100%;
    height: 100%;
    background: rgb(var(--white));
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: .5rem;

    @media (max-width: 576px) {
      display: none;
    }
  }

  .dock {
    grid-area: dock;
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
      border-radius: .5rem;
      margin-bottom: 2rem;

      b {
        font-weight: 700;
        font-size: 64px;
        line-height: 1;
        letter-spacing: -0.045em;
        color: #1D1D1D;
      }

      p {
        font-weight: normal;
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: -0.38px;
        color: #4A4A4A;
      }

      svg {
        position: absolute;
        left: 0;
        bottom: 2rem;
      }
    }
    .dock {
      display: none;
    }
  }
}
</style>