<template lang="pug">
div
  Outline(
    :title = 'title'
    )
  NuxtLink(
    to = '/'
    )
    |Home
</template>

<script>
export default {
  async asyncData({ error, params, $axios }) {
    const pages = await $axios.get('/pages.json')
    const page = pages.data.find((o) => {
      return o.id === params.id
    })

    if (page === undefined) {
      error({
        statusCode: 404,
        message: 'Page is not found.',
      })
      return
    }

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
