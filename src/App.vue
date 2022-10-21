<template lang="pug">
.clouds(:class="{ loaded: loaded }")
sk-grid.page(tpl="1fr" tpl-lg="4.8fr 1fr" gap="0")
  sk-col.page-aside
    Header
  sk-col.page-main
    Skills
    Experience
    Work
    Contact
    Footer
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import Contact from '@/components/Contact.vue';
  import Experience from '@/components/Experience.vue';
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Header.vue';
  import Skills from '@/components/Skills.vue';
  import Work from '@/components/Work.vue';

  const loaded = ref(false);

  onMounted(()=> {
    document.addEventListener('DOMContentLoaded', () => {
      if (!loaded.value) {
        document.onmouseover = () => {
          loaded.value = true;
          document.onmouseover = undefined;
        };
      }

      if (!loaded.value) {
        document.ontouchstart = () => {
          loaded.value = true;
          document.ontouchstart = undefined;
        }
      }
    });
  })
</script>

<style lang="scss">
  body {
    background: dark(900);
    color: rgba(#fff, 0.7);
    font-size: 15px;
    overflow-x: hidden;

    @include bp-up(lg) {
      font-size: 16px;
    }
  }

  @keyframes move-background {
    from {
      background-position: -1000px 0;
    }
  }

  .clouds {
    width:100%;
    height: 100%;
    z-index: 0;
    position: fixed;
    left: 0;
    top: 0;
    background: transparent url(clouds.png) repeat;
    animation:move-background 100s linear infinite;
    filter: invert(100%) opacity(0.3);
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;

    &.loaded {
      visibility: visible;
      opacity: 1;
    }
  }

  .page {
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @include bp-up(lg) {
      width: 100%;
      min-height: 100vh;
      max-width: 1300px;
      position: relative;
    }
  }

  .page-aside {
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: 0;
      background-color: rgba(primary(900), 0.1);
      backdrop-filter: blur(50px);
      border-bottom: 1px solid rgba(#fff, 0.1);
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    @include bp-up(lg) {
      &:before {
        width: 50vw;
        border-bottom: none;
        border-right: 1px solid rgba(#fff, 0.1);
      }
    } 
  }

  .page-aside, .page-main {
    padding: 0 25px;

    @include bp-up(lg) {
      padding: 0 50px;
    }

    @include bp-up(xl) {
      padding: 0 80px;
    }
  }

  .page-main {
    padding-top: 60px;

    @include bp-up(lg) {
      padding-top: 100px;
    }
  }

  section {
    margin-bottom: 60px;

    .title {
      font-weight: 300;
      font-size: 2.5rem;
      background-image: linear-gradient(60deg, $cyan, $sky);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sub-title {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 40px;
    }

    @include bp-up(lg) {
      margin-bottom: 80px;
    }
  }

  .glass {
    background-color: rgba(#fff, 0.1);;
    backdrop-filter: blur(50px);
    border: 1px solid rgba(#fff, 0.1);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
</style>
