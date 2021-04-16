<template lang="pug">
.outline
  .outline__in
    h1
      |{{ title }}
    p.date
      |Update: {{ update }}
    ul.assets(
      v-if = 'assets.length > 0'
      )
      li(
        v-for = 'item, index in items'
        :key = '"assets-" + id + "-" + index'
        )
        a(
          :href = 'item.href'
          target = '_blank'
          )
          |{{ item.label }}
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    update: {
      type: String,
      default: '1.1.2021',
    },
    assets: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.outline {
  display: flex;
  align-items: center;
  position: absolute;
  .pc.portrait & {
    bottom: 5%;
    left: 5%;
  }
  .pc.landscape & {
    top: 0;
    bottom: 0;
    left: 5%;
  }
  .mobile.portrait & {
    bottom: 16px;
    left: 16px;
  }
  .mobile.landscape & {
    top: 0;
    bottom: 0;
    left: 16px;
  }
  &__in {
    pointer-events: auto;
  }
  h1 {
    margin: 0;
    .pc.portrait & {
      font-size: 10.8vw;
    }
    .pc.landscape & {
      font-size: 9vw;
    }
    .mobile.portrait & {
      font-size: 14vw;
    }
    .mobile.landscape & {
      font-size: 9vw;
    }
  }
  .date {
    .pc.portrait & {
      font-size: 3vw;
    }
    .pc.landscape & {
      font-size: 2.5vw;
    }
    .mobile.portrait & {
      font-size: 3.88vw;
    }
    .mobile.landscape & {
      font-size: 2.5vw;
    }
  }
}
</style>
