<template lang="pug">
header#header
  img.brand(src="/logo.png" alt="Arnique")
  h1 Fullstack<br>Software Engineer
  p I am proficient in most Frontend and Backend frameworks and write squeaky clean code.
  sk-btn(variant="primary" size="lg" @click="contact" fat) #[EmailSvg.sk-btn-left] Get In Touch
</template>

<script setup>
  import EmailSvg from '@/assets/svg/zondicons/envelope.svg';

  function contact() {
    const el = document.querySelector('#contact');
    el.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
</script>

<style lang="scss">
  #header {
    font-size: 300;
    color: rgba(#fff, 0.6);
    z-index: 1;
    padding: 100px 0 60px 0;
    position: relative;

    .brand {
      height: 60px;
      width: auto;
      display: block;
      margin-bottom: 20px;
    }

    h1 {
      color: #fff;
      font-weight: 300;
      font-size: 2.8rem;
      margin: 10px 0;
    }

    p {
      font-size: 1.2rem;
    }

    .sub {
      color: #fff;
      text-transform: uppercase;
      opacity: 0.5;
      position: relative;
      top: 10px;
      font-size: 0.8rem;
    }

    .sk-btn {
      white-space: nowrap;
      flex-wrap: nowrap;
    }

    @include bp-up(lg) {
      max-width: none;
      position: sticky;
      top: 0;
      padding-top: 150px;

      h1 {
        font-size: 1.8rem;
      }
    }

    @include bp-up(xl) {
      h1 {
        font-size: 2.5rem;
      }
    }

    @include bp-down(lg) {
      text-align: center;
      padding: 80px 0;

      p {
        max-width: 500px;
        margin: 0 auto 30px auto;
      }

      .brand {
        margin: 0 auto 30px auto;
      }

      .sk-btn {
        margin: 0 auto;
      }
    }
  }
</style>