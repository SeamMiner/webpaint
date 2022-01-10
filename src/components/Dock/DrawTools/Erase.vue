<template>
  <div class="eraser__wrapper">
    <svg
      width="47"
      height="152"
      viewBox="0 0 47 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.20797 35.4306H42.792V136.015H4.20797V35.4306Z"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="1.41594"
        stroke-linejoin="round"
        class="case"
      />
      <g opacity="0.2" filter="url(#filter0_f_581_5657)">
        <path
          d="M22.0316 35.161C22.0429 34.9157 22.2451 34.7226 22.4907 34.7226V34.7226C22.7327 34.7226 22.9333 34.9103 22.9493 35.1517L29.1752 128.81C29.3958 132.128 26.7639 134.94 23.4387 134.94V134.94C20.1592 134.94 17.5441 132.201 17.6956 128.925L22.0316 35.161Z"
          fill="currentColor"
          style="filter: invert(1)"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.254 95.1382C29.9208 96.6792 17.4913 96.6792 5.1582 95.1382L5.22846 94.5296C17.5149 96.0647 29.8972 96.0647 42.1837 94.5296L42.254 95.1382Z"
        class="capcut"
        fill-opacity="0.1"
      />
      <path
        d="M3.5 20.7226C3.5 13.2457 3.5 9.50721 5.10769 6.7226C6.16091 4.89836 7.67577 3.38351 9.5 2.33029C12.2846 0.722595 16.0231 0.722595 23.5 0.722595V0.722595C30.9769 0.722595 34.7154 0.722595 37.5 2.33029C39.3242 3.38351 40.8391 4.89836 41.8923 6.7226C43.5 9.50721 43.5 13.2457 43.5 20.7226V34.7226H3.5V20.7226Z"
        fill="url(#paint0_radial_581_5657)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.6358 8.40254C42.5919 8.41533 42.5479 8.42814 42.5038 8.44096C26.1004 13.2078 13.1658 11.3385 4.52515 7.94892C4.69102 7.51664 4.88372 7.11037 5.1076 6.7226C6.16082 4.89837 7.67567 3.38351 9.4999 2.33029C12.2845 0.722595 16.023 0.722595 23.4999 0.722595C30.9768 0.722595 34.7153 0.722595 37.4999 2.33029C39.3241 3.38351 40.839 4.89837 41.8922 6.7226C42.1928 7.24318 42.4371 7.79709 42.6358 8.40254Z"
        fill="url(#paint1_radial_581_5657)"
      />
      <defs>
        <filter
          id="filter0_f_581_5657"
          x="0.698143"
          y="17.7313"
          width="45.4814"
          height="134.2"
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
            result="effect1_foregroundBlur_581_5657"
          />
        </filter>
        <radialGradient
          id="paint0_radial_581_5657"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.5 34.7226) rotate(-53.3448) scale(57.8667 62.2739)"
        >
          <stop stop-color="#BD6562" />
          <stop offset="0.71895" stop-color="#F59D99" />
          <stop offset="1" stop-color="#E38D8A" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_581_5657"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.5212 -4.64065) rotate(93.0254) scale(13.9639 57.5261)"
        >
          <stop stop-color="#BD686A" />
          <stop offset="1" stop-color="#F09F9C" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.case {
  fill: rgb(var(--dock-draw));
}

.caseShadow {
  fill: rgb(var(--base));
}
.capcut {
  fill: rgb(var(--base));
}

.eraser__wrapper {
  padding-top: 21px;
  margin-left: 16px;
  margin-right: 5px;
}
</style>
