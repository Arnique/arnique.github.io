<template lang="pug">
section
  .title Recent Works
  .sub-title Most of my work is for private contractors but some are public

  .work-tiles
    div(xs="auto" v-for="v in work" :key="v.href")
      a.work.glass(:href="v.href" target="self")
        ._img
          img(:src="v.img")
        ._text
          ._name {{ v.title }}

</template>

<script>
  export default {
    data() {
      return {
        work: [
          { img: '/work/superview.png', title: 'Superview', href: 'https://d1.demobot.xyz/?symbol=BTCUSDT' },
          { img: '/work/slimkit.png', title: 'Slimkit UI', href: 'https://github.com/Arnique/slimkit' },
          { img: '/work/skin.png', title: 'skincashier.com', href: 'https://skincashier.com/' },
          { img: '/work/wip.png', title: 'myspotit.com', href: 'https://myspotit.com' },
          { img: '/work/tipcc.png', title: 'tip.cc', href: 'https://tip.cc/' },
          { img: '/work/lingvist.png', title: 'lingvist.com', href: 'https://lingvist.com/' },
          { img: '/work/cardpost.png', title: 'cardpost theme', href: 'https://wrapbootstrap.com/theme/cardpost-blog-magazine-template-WB0614419' },
          { img: '/work/helena.png', title: 'helena theme', href: 'https://wrapbootstrap.com/theme/helena-html-opencart-store-theme-WB049G842' },
        ]
      }
    }
  }
</script>

<style lang="scss">
  .work-tiles {
    column-count: 2;
    gap: 20px;

    > div {
      margin-bottom: 20px;
    }

    @include bp-up(lg) {
      column-count: 1;

      > div {
        margin-bottom: 30px;
      }
    }

    @include bp-down(lg) {
      column-count: 2;
    }

    @include bp-down(sm) {
      column-count: 1;
    }
  }

  .work {
    border-radius: 10px;
    overflow: hidden;
    color: #fff;
    display: block;

    ._img {
      img {
        width: 100%;
        height: auto;
      }
    }

    ._text {
      padding: 10px 20px;
    }

    &:hover {
      color: primary(400);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }
  }
</style>