<template>
  <div class="popup">
    <button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.017 4.98305C15.4021 5.36817 15.4021 5.99259 15.017 6.37772L11.3947 10L15.017 13.6223C15.4021 14.0074 15.4021 14.6318 15.017 15.017C14.6318 15.4021 14.0074 15.4021 13.6223 15.017L10 11.3947L6.37772 15.0169C5.9926 15.4021 5.36818 15.4021 4.98306 15.0169C4.59793 14.6318 4.59793 14.0074 4.98305 13.6223L8.60533 10L4.98305 6.37772C4.59793 5.9926 4.59793 5.36818 4.98305 4.98306C5.36818 4.59793 5.9926 4.59793 6.37772 4.98305L10 8.60533L13.6223 4.98305C14.0074 4.59792 14.6318 4.59792 15.017 4.98305Z"
          class="close__btn"
        />
      </svg>
    </button>
    <img src="../assets/wp__logo.png" alt="" />
    <h2>Web Paint</h2>
    <p>Minimalistic graphic editor on&nbsp;the web.</p>
    <p>
      Idea by&nbsp;Greene<i>&amp;</i>Lapp studio. Designed by&nbsp;<a
        href="https://t.me/greeneboy"
        target="_blank"
        >Alexander Greene</a
      >, developed by&nbsp;<a href="https://t.me/SeamMiner" target="_blank"
        >Platon Lapp</a
      >
      in&nbsp;2021.
    </p>
    <p>Web Paint 1.0.1</p>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  z-index: 3;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 128px;
  max-width: 21rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgb(var(--neutral));
  box-shadow: 0rem 0.8125rem 4rem 0rem rgba(0, 0, 0, 0.1);
  line-height: 1.3;
  font-style: normal;

  img {
    width: 72px;
    height: 72px;
  }

  h2 {
    margin-bottom: 8px;
    font-size: 1.5rem;
    letter-spacing: -0.045em;
    color: rgb(var(--on-neutral));
  }

  p {
    max-width: 21.25rem;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: -0.16px;
    color: rgb(var(--on-neutral) / 0.75);
  }

  a {
    text-decoration: none;
    color: rgb(var(--accent));
  }

  a:hover {
    color: rgb(var(--accent-hover));
  }

  a:focus {
    color: rgb(var(--accent-hover));
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 20px;
    border: none;
    padding: 0;
    background: none;
  }

  .close__btn {
    fill: rgb(var(--on-neutral) / 0.3);
    transition: fill 0.2s ease-in-out;
  }

  .close__btn:hover {
    fill: rgb(var(--base) / 0.2);
  }

  @media (max-width: 576px) {
    max-width: none;
    margin: 0;
    bottom: 0;
    transform: translateY(40%);
  }
}
</style>
