<template lang="pug">
NuxtLink.page(
  :to = 'path'
  )
  |{{ page.title }}
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: null,
    },
  },
  computed: {
    path() {
      return this.page === null ? '' : `/model/${this.page.id}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
