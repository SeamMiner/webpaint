<template>
  <svg
    width="103"
    height="179"
    viewBox="0 0 103 179"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60.5058 22.4417C61.4341 22.0944 62.4228 22.7839 62.4177 23.7751L62.2782 51.0903H41.0391V30.7048C41.0391 30.1141 41.4057 29.5855 41.959 29.3786L60.5058 22.4417Z"
      class="active"
    />
    <path
      d="M61.7077 23.7715L61.5718 50.3803H41.7491V30.7048C41.7491 30.4103 41.9319 30.1467 42.2077 30.0436L60.7545 23.1067C61.2174 22.9335 61.7103 23.2773 61.7077 23.7715Z"
      stroke="black"
      stroke-opacity="0.1"
      stroke-width="1.42"
    />
    <path
      d="M83.29 111.03L66.6633 53.5917C66.3289 52.4365 63.9502 51.983 63.2189 50.5203C62.979 50.0406 62.4887 49.7376 61.9524 49.7376H41.0475C40.5112 49.7376 40.0209 50.0406 39.7811 50.5203C39.0497 51.983 36.6711 52.4365 36.3367 53.5917L19.7099 111.03C15.4377 125.788 13.2695 141.076 13.2695 156.44H89.7304C89.7304 141.076 87.5622 125.788 83.29 111.03Z"
      class="case"
    />
    <path
      d="M65.9832 53.7886L82.61 111.226C86.7981 125.694 88.9553 140.673 89.0209 155.732H13.979C14.0446 140.673 16.2019 125.694 20.39 111.226L37.0167 53.7886C37.0413 53.7037 37.1222 53.5717 37.3585 53.3804C37.5922 53.1912 37.8934 53.009 38.2666 52.783L38.2767 52.777C38.2911 52.7682 38.3057 52.7594 38.3204 52.7505C39.0036 52.3372 39.9506 51.7644 40.4143 50.8369C40.5342 50.5971 40.7794 50.4456 41.0475 50.4456H61.9524C62.2206 50.4456 62.4657 50.5971 62.5856 50.8369C63.0494 51.7644 63.9963 52.3372 64.6795 52.7505L64.7233 52.777L64.7334 52.7831C65.1066 53.009 65.4077 53.1913 65.6414 53.3804C65.8778 53.5717 65.9586 53.7037 65.9832 53.7886Z"
      stroke="black"
      stroke-opacity="0.1"
      stroke-width="1.41594"
      stroke-linejoin="round"
      class="case"
    />
    <g opacity="0.2" filter="url(#filter0_f_577_5599)">
      <path
        d="M48.9809 52.2005C49.0137 51.7715 49.3713 51.4402 49.8016 51.4402V51.4402C50.2213 51.4402 50.5738 51.756 50.6197 52.1733L60.8713 145.329C61.4945 150.992 57.0607 155.94 51.364 155.94V155.94C45.7938 155.94 41.402 151.199 41.8272 145.645L48.9809 52.2005Z"
        class="caseShadow"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.9822 114.885C40.8734 117.394 61.9276 117.394 82.8188 114.885"
      stroke="black"
      stroke-opacity="0.1"
      fill="none"
      class="capcut"
      fill-opacity="0.1"
    />
    <defs>
      <filter
        id="filter0_f_577_5599"
        x="24.8075"
        y="34.4489"
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
          result="effect1_foregroundBlur_577_5599"
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
