<template lang="pug">
IconBase(
  iconName = 'chevron-left'
  :size = 'size'
  :fill = 'fill'
  )
  path(
    :d = 'd'
    )
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'

export default {
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
      return mdiChevronLeft
    },
  },
}
</script>
