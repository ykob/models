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
      :size = '40'
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
      :size = '40'
      fill = '#222222'
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss" scoped>
.external-links {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  a {
    display: block;
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
}
</style>
