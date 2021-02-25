<template lang="pug">
IconBase(
  iconName = 'clock'
  :size = 'size'
  :fill = 'fill'
  )
  path(
    :d = 'd'
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiChevronRight } from '@mdi/js'

export default Vue.extend({
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    d() {
      return mdiChevronRight
    },
  },
})
</script>
