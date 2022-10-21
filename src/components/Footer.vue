<template lang="pug">
footer#footer
  div &copy;2022 - Arnique.net
  .credits icons courtesy of #[a(href="https://icons8.com/" target="self") icons8.com]
</template>

<style lang="scss">
  #footer {
    padding-bottom: 50px;
    text-align: right;
    color: #fff;
    line-height: 1.6;

    @include bp-down(md) {
      text-align: center;
    }

    .credits {
      opacity: 0.7;
      font-size: 0.9em;

      a {
        color: inherit;
      }
    }
  }
</style>
