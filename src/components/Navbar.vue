<template>
  <div class="navbar">
    <Logo></Logo>
    <ul class="options">
      <li class="undo">
        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.998 9.66533C14.998 12.83 12.9191 14.9012 9.48495 14.9012H7.58309C7.01331 14.9012 6.60522 14.47 6.60522 13.9387C6.60522 13.4074 7.01331 12.984 7.58309 12.984H9.39255C11.7564 12.984 13.1039 11.5595 13.1039 9.60373C13.1039 7.65568 11.7564 6.27741 9.39255 6.27741H4.78036L3.0171 6.20041L4.28757 7.26299L6.08933 9.01085C6.26642 9.18794 6.38192 9.39584 6.38192 9.68843C6.38192 10.2197 6.00463 10.6124 5.44254 10.6124C5.20385 10.6124 4.94206 10.5046 4.74956 10.3121L0.399161 6.03102C0.214365 5.84622 0.106567 5.57673 0.106567 5.31493C0.106567 5.05314 0.214365 4.79135 0.399161 4.60655L4.74956 0.317749C4.94206 0.125254 5.20385 0.0174561 5.44254 0.0174561C6.00463 0.0174561 6.38192 0.410147 6.38192 0.941435C6.38192 1.23403 6.26642 1.44192 6.08933 1.61902L4.28757 3.37458L3.0171 4.43715L4.78036 4.36016H9.39255C12.8806 4.36016 14.998 6.52381 14.998 9.66533Z"/>
        </svg>
      </li>
      <li class="redo">
        <svg width="15" height="15" style="transform: rotateY(180deg)" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.998 9.66533C14.998 12.83 12.9191 14.9012 9.48495 14.9012H7.58309C7.01331 14.9012 6.60522 14.47 6.60522 13.9387C6.60522 13.4074 7.01331 12.984 7.58309 12.984H9.39255C11.7564 12.984 13.1039 11.5595 13.1039 9.60373C13.1039 7.65568 11.7564 6.27741 9.39255 6.27741H4.78036L3.0171 6.20041L4.28757 7.26299L6.08933 9.01085C6.26642 9.18794 6.38192 9.39584 6.38192 9.68843C6.38192 10.2197 6.00463 10.6124 5.44254 10.6124C5.20385 10.6124 4.94206 10.5046 4.74956 10.3121L0.399161 6.03102C0.214365 5.84622 0.106567 5.57673 0.106567 5.31493C0.106567 5.05314 0.214365 4.79135 0.399161 4.60655L4.74956 0.317749C4.94206 0.125254 5.20385 0.0174561 5.44254 0.0174561C6.00463 0.0174561 6.38192 0.410147 6.38192 0.941435C6.38192 1.23403 6.26642 1.44192 6.08933 1.61902L4.28757 3.37458L3.0171 4.43715L4.78036 4.36016H9.39255C12.8806 4.36016 14.998 6.52381 14.998 9.66533Z"/>
        </svg>
      </li>
      <li class="save">
        <Link>
          Safe file
        </Link>
      </li>
      <li class="share">
        <Link>
          Share
        </Link>
      </li>
      <li class="about">
        <Link>
          About
        </Link>
      </li>
      <li class="help">
        <Link>
          Help
        </Link>
      </li>
      <li class="donate">
        <Link>
          Help
        </Link>
      </li>
    </ul>

    <div class="buttons">
      <Button type="icon">
        <img :src="require('@/assets/theme.svg')" alt="theme switcher">
      </Button>
      <Button type="icon">
        <img :src="require('@/assets/lang.svg')" alt="lang switcher">
      </Button>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'
import Link from '@/components/Link.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Logo,
    Link,
    Button
  },
  setup() {
    console.log('this is logo')
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  display: grid;
  grid-template: 1fr / auto 1fr auto auto;
  gap: 2rem;
  align-items: center;

  .options {
    display: flex;
    align-items: center;
    gap: .5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    & > * {
      display: grid;
      cursor: pointer;
    }

    .undo, .redo {
      background: rgb(var(--grey-white));
      border-radius: 50%;
      padding: .875rem .8125rem .75rem;
      color: rgba(var(--black-white) / .2);

      svg {
        fill: currentColor;
      } 
    }
  }

  .buttons {
    display: flex;
    gap: .5rem;
  }
}


</style>
