<template lang="pug">
div
  ModelOutline(
    :title = 'title'
    :update = 'update'
    )
</template>

<script>
export default {
  asyncData({ error, params, store }) {
    const page = store.state.pages.find((o) => {
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
      update: page.update,
    }
  },
  data: () => ({
    title: '',
    update: '',
  }),
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
  },
  created() {
    this.webgl.load(this.$route.params.id)
    this.webgl.enableControl()
  },
  destroyed() {
    this.webgl.destroy(this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped></style>
