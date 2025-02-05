---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip 提示

常用的提示框。

## 基础用法

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

### Tooltip Attributes

|     Name      |       Description       |            Type             | Default |
| :-----------: | :---------------------: | :-------------------------: | :-----: |
|    content    |     tooltip content     |          `string`           |    —    |
|    trigger    |     trigger methods     | `enum` - `'hover\| 'click'` |  hover  |
|   placement   |    tooltip position     |         `popper.js`         | bottom  |
|    manual     | tooltip can or not show |          `boolean`          |  false  |
| popperOptions |     popper options      |         `popper.js`         |    —    |
|  transition   |        animation        |          `string`           |  fade   |
|   openDelay   |   tooltop show delay    |          `number`           |    0    |
|  closeDelay   |   tooltop close delay   |          `number`           |    0    |
