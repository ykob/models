<template lang="pug">
.wrap
  .content
    h1
      |Models
    p
      |It is my learning records 
      br
      |of Blender.
    .d-f.jc-c
      Button(
        tag = 'NuxtLink'
        :to = 'to'
        :width = 'isMobile ? "144px" : "180px"'
        :height = 'isMobile ? "48px" : "56px"'
        :radius = 'isMobile ? "24px" : "28px"'
        )
        |Enter
</template>

<script>
export default {
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
    isMobile() {
      return this.$store.state.isMobile
    },
    to() {
      return `/model/${this.$store.state.pages[0].id}/`
    },
  },
  mounted() {
    this.$store.commit('showHeader', false)
    this.webgl.disableControl()
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .pc & {
    right: 5%;
    left: 5%;
  }
  .mobile & {
    right: 16px;
    left: 16px;
  }
}
.content {
  pointer-events: auto;
  text-align: center;
}
h1 {
  margin: 0;
  .pc.portrait & {
    font-size: 10.8vw;
  }
  .pc.landscape & {
    font-size: 9vw;
  }
  .mobile.portrait & {
    font-size: 14vw;
  }
  .mobile.landscape & {
    font-size: 9vw;
  }
}
p {
  line-height: 1.5;
  .pc.portrait & {
    font-size: 3vw;
  }
  .pc.landscape & {
    font-size: 2.5vw;
  }
  .mobile.portrait & {
    font-size: 3.88vw;
  }
  .mobile.landscape & {
    font-size: 2.5vw;
  }
  br {
    .pc &,
    .mobile.landscape & {
      display: none;
    }
  }
}
</style>
