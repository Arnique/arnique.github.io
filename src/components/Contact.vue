<template lang="pug">
section#contact
  .title Get In Touch
  .sub-title Send me a message and I'll get back to you
  sk-grid(cols="1" cols-lg="2" gap="15px" gap-lg="20px")
    sk-col(xs="auto")
      sk-btn(block variant="success" size="lg" href="mailto:arnold@arnique.net") #[EmailSvg.sk-btn-left] arnold@arnique.net
    sk-col(xs="auto")
      sk-btn(block variant="info" size="lg" href="https://join.skype.com/invite/gUpMWCeglyN4") #[SkypeSvg.sk-btn-left] live:arnoldck
    sk-col(xs="auto")
      sk-btn(block variant="secondary" size="lg" href="https://discordapp.com/users/Arnique#9582") #[DiscordSvg.sk-btn-left] Arnique#9582
    sk-col(xs="auto")
      sk-btn(block variant="primary" size="lg" href="https://telegram.me/acdoom") #[TelegramSvg.sk-btn-left] @acdoom
</template>

<script setup>
  import EmailSvg from '@/assets/svg/zondicons/envelope.svg';
  import DiscordSvg from '@/assets/svg/icons8-discord.svg';
  import SkypeSvg from '@/assets/svg/icons8-skype.svg';
  import TelegramSvg from '@/assets/svg/icons8-telegram.svg';
</script>
