<template lang="pug">
section#experience
  .title Additional Skills
  .sub-title My mastery of Javascript also means I have experience in the following:

  .tiles
    .tile.glass(v-for="(v,i) in items" :key="i")
      h4.fg-primary {{ v.title }}
      ul
        li(v-for="(x,i) in v.items" :key="i") {{ x.name ? x.name : x }}
          ul(v-if="x.items")
            li(v-for="(y,i) in x.items" :key="i") {{ y }}
</template>

<script setup>
  const items = [
    {
      title: 'Hummingbot',
      items: [
        { name: 'Custom Strategies' },
        { name: 'Custom Scripts' },
        { name: 'Custom Connectors',
          items: [
            'Bitrue',
            'Bitget',
            'P2b'
          ]
        }
      ]
    },
    {
      title: 'Web 3',
      items: [
        'Dapps',
        'Wallet Intergration',
        'Smart Contracts'
      ]
    },
    {
      title: 'Bots & Automation',
      items: [
        'Web scraping',
        'Discords bots',
        'Telegram bots',
        'Crypto trading bots',
      ]
    },
    {
      title: '3D Browser Graphics',
      items: [
        'Games',
        'Product visualisation'
      ]
    },
    {
      title: 'Mobile Apps',
      items: [
        'React Native',
        'NativeScript',
        'NativeScript-Vue'
      ]
    },
    {
      title: 'UI Components',
      items: [
        'Web Components',
        'Vue 3',
      ]
    },
    {
      title: 'UI Design',
      items: [
        'Adobe XD',
        'Figma',
      ]
    }
  ]
</script>

<style lang="scss">
  .tiles {
    column-count: 2;
    gap: 20px;

    @include bp-down(md) {
      column-count: 1;
    }
  }

  .tile {
    padding: 25px 30px;
    border-radius: 10px;
    height: auto;
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;

    h4 {
      font-size: 1.3rem;
    }

    ul {
      margin-left: 0;

      ul {
        margin-left: 23px
      }
    }
  }
</style>
