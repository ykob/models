<template lang="pug">
.error
  .error__message
    |{{ error.statusCode }} {{ message }}
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    message() {
      switch (this.error.statusCode) {
        case 404:
          return 'Not Found'
        default:
          return ''
      }
    },
  },
}
</script>
