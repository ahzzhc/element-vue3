<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import { h, ref } from 'vue'
const tooltipRef = ref(null)
const trigger = ref('click')
const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const inlineConsole = (...args) => {
  console.log(...args)
}
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
<template>
  <Dropdown
    placement="bottom"
    :trigger="trigger"
    :menu-options="options"
    @visible-change="e => inlineConsole('visible change', e)"
    @select="e => inlineConsole('select', e)"
    manual
    ref="tooltipRef"
  >
    <Button type="primary" @click="open">open</Button>
  </Dropdown>
  <Button @click="close">close</Button>
</template>
