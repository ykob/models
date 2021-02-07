<template lang="pug">
div
  h1
    |HOME
  .pages
    PageLink.page(
      v-for = 'page in pages'
      :page = 'page'
      :key = 'page.id'
      )
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const pages = await $axios.get('/pages.json')

    return {
      pages: pages.data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
