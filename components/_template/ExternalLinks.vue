<template lang="pug">
.external-links
  Button(
    tag = 'a'
    :width = 'buttonSize'
    :height = 'buttonSize'
    href = 'https://github.com/ykob/models'
    target = '_blank'
    )
    IconGithub(
      :size = 'iconSize'
      fill = '#222222'
      )
  Button(
    tag = 'a'
    :width = 'buttonSize'
    :height = 'buttonSize'
    href = 'https://twitter.com/ykob0123'
    target = '_blank'
    )
    IconTwitter(
      :size = 'iconSize'
      fill = '#222222'
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    buttonSize() {
      const { state } = this.$store

      return state.isMobile ? '32px' : '40px'
    },
    iconSize() {
      const { state } = this.$store

      return state.isMobile ? 32 : 40
    },
  },
})
</script>

<style lang="scss" scoped>
.external-links {
  display: flex;
  position: fixed;
  z-index: z(externalLinks);
  .pc & {
    top: 5%;
    right: 5%;
  }
  .mobile & {
    top: 16px;
    right: 16px;
  }
  a {
    display: block;
    .pc & {
      margin-left: 16px;
    }
    .mobile & {
      margin-left: 8px;
    }
  }
}
</style>
