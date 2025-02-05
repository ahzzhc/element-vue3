<script setup>
import Button from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method.ts'
const openMessage = type => {
  createMessage({ message: 'hello world', type })
}
</script>
<template>
  <Button @click="() => openMessage('info')">info</Button>
  <Button @click="() => openMessage('success')">success</Button>
  <Button @click="() => openMessage('danger')">danger</Button>
  <Button @click="() => openMessage('warning')">warning</Button>
</template>
