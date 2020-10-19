<template>
<div class="ly-tab">
  <ly-tabbar
    v-model="selectedId"
    v-bind="options"
  >
    <ly-tab-item
      v-for="(item, index) in items"
      :key="index"
      >
      <span
        v-if="options.fixBottom && item.icon"
        slot="item">
        <i :class="item.icon"></i>
      </span>
      <span>{{item.name}}</span>
    </ly-tab-item>
  </ly-tabbar>
</div>
</template>

<script>
import LyTabbar from './tabbar'
import LyTabItem from './tab-item'

export default {
  name: 'LyTab',
  components: {
    LyTabbar,
    LyTabItem
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      selectedId: this.value
    }
  },
  mounted() {
  },
  computed: {
    labelKey () {
      return this.options.labelKey || 'name' 
    }
  },
  watch: {
    value (value) {
      this.selectedId = value
    },
    selectedId (value) {
      this.$emit('input', value)
      this.$emit('change', this.items[value], value)
    }
  }
}
</script>

<style>

</style>
