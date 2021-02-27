<template lang="pug">
.wrap
  .content
    h1
      |Models
    p
      |It is my learning records of Blender.
    .links
      a(
        href = 'https://github.com/ykob/models'
        target = '_blank'
        )
        IconGithub(
          :size = '40'
          )
      a(
        href = 'https://twitter.com/ykob0123'
        target = '_blank'
        )
        IconTwitter(
          :size = '40'
          )
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  pointer-events: auto;
  text-align: center;
}
h1 {
  margin: 0;
  font-size: 9vw;
}
p {
  font-size: 2vw;
}
.links {
  display: flex;
  justify-content: center;
  a {
    display: block;
    margin-right: 0.5vw;
    margin-left: 0.5vw;
  }
}
</style>
