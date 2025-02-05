<script setup>
import Button from '@/components/Button/Button.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
</script>
<template>
  <Tooltip
    ref="tooltipRef"
    placement="top"
    trigger="hover"
    content="hover trigger"
  >
    <Button>hover me</Button>
  </Tooltip>
  <Tooltip
    ref="tooltipRef"
    placement="bottom"
    trigger="click"
    content="click trigger"
  >
    <Button>click me</Button>
  </Tooltip>
</template>
