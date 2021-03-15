<template lang="pug">
div
  |{{ error.statusCode }}
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
