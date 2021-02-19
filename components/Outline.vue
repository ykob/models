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
    line-height: 0.65;
    margin: 0;
    font-size: 10vw;
    text-transform: uppercase;
  }
  .date {
    line-height: 1;
    font-size: 2vw;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
}
</style>
