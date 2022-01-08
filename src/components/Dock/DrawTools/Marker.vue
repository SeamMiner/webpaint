<template>
  <svg
    width="109"
    height="178"
    viewBox="0 0 109 178"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_59_123)">
      <path
        d="M92.0205 115.589L75.3937 58.1514C75.0593 56.9962 72.6807 56.5427 71.9493 55.08C71.7095 54.6003 71.2192 54.2973 70.6829 54.2973H49.778C49.2417 54.2973 48.7514 54.6003 48.5115 55.08C47.7802 56.5427 45.4016 56.9962 45.0671 58.1514L28.4404 115.589C24.1682 130.348 22 145.635 22 161H98.4609C98.4609 145.635 96.2927 130.348 92.0205 115.589Z"
        class="case"
      />
      <path
        d="M74.7137 58.3483L91.3404 115.786C95.5285 130.254 97.6858 145.233 97.7514 160.292H22.7095C22.7751 145.233 24.9324 130.254 29.1204 115.786L45.7472 58.3483C45.7718 58.2634 45.8526 58.1315 46.089 57.9401C46.3227 57.751 46.6238 57.5687 46.9971 57.3428L47.0071 57.3367C47.0216 57.3279 47.0362 57.3191 47.0509 57.3102C47.7341 56.8969 48.681 56.3242 49.1448 55.3967C49.2647 55.1568 49.5098 55.0053 49.778 55.0053H70.6829C70.951 55.0053 71.1962 55.1568 71.3161 55.3967C71.7799 56.3242 72.7268 56.8969 73.41 57.3102L73.4538 57.3367L73.4639 57.3428C73.8371 57.5687 74.1382 57.751 74.3719 57.9401C74.6083 58.1315 74.6891 58.2634 74.7137 58.3483Z"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="1.41594"
        stroke-linejoin="round"
        class="case"
      />
      <g opacity="0.1" filter="url(#filter1_f_59_123)">
        <path
          class="caseShadow"
          d="M46.7695 73.9999C46.7695 68.2009 51.4705 63.4999 57.2695 63.4999V63.4999C63.0685 63.4999 67.7695 68.2009 67.7695 73.9999V150C67.7695 155.799 63.0685 160.5 57.2695 160.5V160.5C51.4705 160.5 46.7695 155.799 46.7695 150V73.9999Z"
        />
      </g>
      <path
        d="M68.9243 26.5673C69.8695 26.0813 70.9934 26.7711 70.9878 27.8339L70.85 54.297H49.6108V37.3639C49.6108 36.8334 49.9074 36.3474 50.3792 36.1047L68.9243 26.5673Z"
        class="active"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_59_123"
        x="0"
        y="-0.500122"
        width="108.461"
        height="167.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-6" dy="-10" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_59_123"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_59_123"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_f_59_123"
        x="29.7782"
        y="46.5086"
        width="54.9826"
        height="130.983"
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
          result="effect1_foregroundBlur_59_123"
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
</style>
