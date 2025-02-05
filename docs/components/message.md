---
title: Message | V-Element
description: Message 组件的文档
---

# Message 信息框

常用的信息提示框。

## 基础用法

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview>

### Button Attributes

|      Name      |   Description    |                         Type                         | Default |
| :------------: | :--------------: | :--------------------------------------------------: | :-----: |
|      type      |   message type   | `enum` - `'success'\| 'info'\| 'warning'\| 'danger'` |  info   |
|    duration    | message duration |                       `number`                       |    0    |
|   showClose    | can or not close |                      `boolean`                       |  false  |
|     offset     |      offset      |                       `number`                       |    0    |
|    message     | message content  |            `enum` - `'string'\| 'vnode'`             |    —    |
| transitionName |    transition    |                       `string`                       |    —    |
