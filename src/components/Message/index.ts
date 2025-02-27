import type { App } from 'vue'
import Message from '@/components/Message/Message.vue'
import { createMessage, closeAll } from '@/components/Message/method'
Message.install = (app: App) => {
  app.component(Message.name as string, Message)
}

export default Message
export { createMessage, closeAll }
export * from './types'
