<template lang="pug">
.external-links
  Button(
    tag = 'a'
    width = '40px'
    height = '40px'
    href = 'https://github.com/ykob/models'
    target = '_blank'
    )
    IconGithub(
      :size = 'iconSize'
      fill = '#222222'
      )
  Button(
    tag = 'a'
    width = '40px'
    height = '40px'
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
    iconSize() {
      const { state } = this.$store

      return state.isMobie ? 24 : 40
    },
  },
})
</script>

<style lang="scss" scoped>
.external-links {
  display: flex;
  justify-content: center;
  position: fixed;
  .pc & {
    top: 5%;
    right: 5%;
  }
  .mobile & {
    top: 12px;
    right: 12px;
  }
  a {
    display: block;
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
}
</style>
