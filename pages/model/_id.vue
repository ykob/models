<template lang="pug">
div
  h1
    |{{ title }}
  NuxtLink(
    to = '/'
    )
    |Home
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const pages = await $axios.get('/pages.json')
    const page = pages.data.find((o) => {
      return o.id === params.id
    })

    return {
      title: page.title,
    }
  },
  data: () => ({
    title: '',
    date: '',
  }),
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
  },
  created() {
    this.webgl.load(this.$route.params.id)
  },
  destroyed() {
    this.webgl.destroy(this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped></style>
