<template lang="pug">
.error
  .error__content
    .error__statuscode
      |{{ error.statusCode }}
    .error__message
      |{{ message }}
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

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &__statuscode {
    .pc & {
      margin-bottom: 12px;
      font-size: 81px;
    }
    .mobile & {
      margin-bottom: 8px;
      font-size: 48px;
    }
  }
  &__message {
    .pc & {
      font-size: 42px;
    }
    .mobile & {
      font-size: 28px;
    }
  }
}
</style>
