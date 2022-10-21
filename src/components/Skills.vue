<template lang="pug">
section.skills
  .title My Skills
  .sub-title I have 7 years total experience as a developer
  sk-grid(cols="1" cols-sm="2" cols-lg="3" gap="15px" gap-lg="30px")
    sk-col(xs="auto" v-for="v in skills" :key="v.title")
      .skill.glass
        component(:is="v.icon")
        div.font-mono
          ._title {{ v.title }}
          ._sub {{ v.sub }}
</template>

<script>
  import ReactSvg from '@/assets/svg/react.svg';
  import NodeSvg from '@/assets/svg/nodejs.svg';
  import Vue from '@/assets/svg/vue.svg';
  import Tailwind from '@/assets/svg/tailwind.svg';
  import Next from '@/assets/svg/next.svg';
  import Typescript from '@/assets/svg/typescript.svg';
  import Eth from '@/assets/svg/eth.svg';
  import Three from '@/assets/svg/three.svg';
  import Nuxt from '@/assets/svg/nuxt.svg';


  export default {
    components: {
      ReactSvg,
      NodeSvg,
      Vue,
      Tailwind,
      Next,
      Typescript,
      Eth,
      Nuxt,
      Three
    },

    data() {
      return {
        skills: [
          { title: 'NodeJS', icon: 'NodeSvg', sub: '7 years' },
          { title: 'Typescript', icon: 'Typescript', sub: '5 years' },
          { title: 'React', icon: 'ReactSvg', sub: '4 years' },
          { title: 'Vue', icon: 'Vue', sub: '4 years' },
          { title: 'Next', icon: 'Next', sub: '3 years' },
          { title: 'Nuxt', icon: 'Nuxt', sub: '3 years' },
          { title: 'Web3', icon: 'Eth', sub: '2 years' },
          { title: 'ThreeJs', icon: 'Three', sub: '2 years' },
          { title: 'Tailwind', icon: 'Tailwind', sub: '2 years' },
        ]
      }
    }
  }
</script>

<style lang="scss">
  .skill {
    padding: 1rem;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    color: #fff;

    ._title {
      font-size: 1.1rem
    }

    ._sub {
      font-size: 0.7rem;
      opacity: 0.7;
      text-transform: uppercase;
    }

    svg {
      margin-right: 1rem;
      height: auto;
      width: 50px;

      path {
        fill: primary(400)
      }
    }

    @include bp-down(lg) {
      svg {
        width: 30px;
        margin-right: 0.7rem;
      }

      ._title {
        font-size: 1rem;
      }
    }
  }
</style>