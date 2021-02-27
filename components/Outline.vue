<template lang="pug">
.outline
  .outline__in
    h1
      |{{ title }}
    p.date
      |Update: {{ update }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    update: {
      type: String,
      default: '1.1.2021',
    },
  },
}
</script>

<style lang="scss" scoped>
.outline {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5%;
  &__in {
    pointer-events: auto;
  }
  h1 {
    margin: 0;
    font-size: 9vw;
  }
  .date {
    font-size: 2vw;
    text-transform: uppercase;
  }
}
</style>
