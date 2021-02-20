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
  computed: {
    pages() {
      return this.$store.state.pages
    },
  },
}
</script>

<style lang="scss" scoped></style>
