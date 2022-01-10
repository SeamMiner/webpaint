<template>
  <svg
    width="103"
    height="179"
    viewBox="0 0 103 179"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.8432 23.4085L62.1195 51.2374H40.8804L50.1567 23.4085C50.587 22.1176 52.4129 22.1176 52.8432 23.4085Z"
      class="active"
    />
    <path
      d="M52.1697 23.633L61.1344 50.5274H41.8654L50.8302 23.633C51.0448 22.9894 51.9551 22.9894 52.1697 23.633Z"
      stroke="black"
      stroke-opacity="0.1"
      stroke-width="1.42"
    />
    <path
      d="M83.29 111.149L66.6633 53.7112C66.3289 52.556 63.9502 52.1025 63.2189 50.6398C62.979 50.1601 62.4887 49.8571 61.9524 49.8571H41.0475C40.5112 49.8571 40.0209 50.1601 39.7811 50.6398C39.0497 52.1025 36.6711 52.556 36.3367 53.7112L19.7099 111.149C15.4377 125.908 13.2695 141.195 13.2695 156.56H89.7304C89.7304 141.195 87.5622 125.908 83.29 111.149Z"
      class="case"
    />
    <path
      d="M65.9832 53.9081L82.61 111.346C86.7981 125.814 88.9553 140.792 89.0209 155.852H13.979C14.0446 140.792 16.2019 125.814 20.39 111.346L37.0167 53.9081C37.0413 53.8232 37.1222 53.6913 37.3585 53.4999C37.5922 53.3108 37.8934 53.1285 38.2666 52.9025L38.2767 52.8965C38.2911 52.8877 38.3057 52.8789 38.3204 52.87C39.0036 52.4567 39.9506 51.8839 40.4143 50.9564C40.5342 50.7166 40.7794 50.5651 41.0475 50.5651H61.9524C62.2206 50.5651 62.4657 50.7166 62.5856 50.9564C63.0494 51.8839 63.9963 52.4567 64.6795 52.87L64.7233 52.8965L64.7334 52.9026C65.1066 53.1285 65.4077 53.3108 65.6414 53.4999C65.8778 53.6913 65.9586 53.8232 65.9832 53.9081Z"
      stroke="black"
      stroke-opacity="0.1"
      stroke-width="1.41594"
      stroke-linejoin="round"
      class="case"
    />
    <g opacity="0.2" filter="url(#filter0_f_577_5585)">
      <path
        d="M49.4418 52.32C49.4746 51.8911 49.8323 51.5598 50.2625 51.5598V51.5598C50.6822 51.5598 51.0348 51.8756 51.0807 52.2928L61.3323 145.449C61.9554 151.111 57.5216 156.06 51.8249 156.06V156.06C46.2548 156.06 41.8629 151.319 42.2881 145.765L49.4418 52.32Z"
        class="caseShadow"
      />
    </g>
    <path
      d="M19.9822 114.885C40.8734 117.394 61.9276 117.394 82.8188 114.885"
      stroke="black"
      stroke-opacity="0.1"
      fill="none"
      class="capcut"
    />
    <defs>
      <filter
        id="filter0_f_577_5585"
        x="25.2683"
        y="34.5684"
        width="53.1137"
        height="138.483"
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
          stdDeviation="8.49566"
          result="effect1_foregroundBlur_577_5585"
        />
      </filter>
    </defs>
  </svg>
</template>

<style lang="scss" scoped>
.case {
  fill: rgb(var(--dock-draw));
}

.caseShadow {
  fill: rgb(var(--base));
}

.active {
  fill: rgb(var(--active));
}

.capcut {
  stroke: rgb(var(--base));
}
</style>
