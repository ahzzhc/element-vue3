---
title: Collapse | V-Element
description: Collapse 组件的文档
---

# Collapse 折叠面板

常用的折叠面板。

## 基础用法

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

### Collapse Attributes

|   Name    |  Description   |              Type               | Default |
| :-------: | :------------: | :-----------------------------: | :-----: |
|  v-mode   | collapse value | `Array` - `'string'\| 'number'` |    —    |
| accordion | Accordion mode |            `boolean`            |  false  |

### Collapse Events

|  Name  |  Description   |              Type               | Default |
| :----: | :------------: | :-----------------------------: | :-----: |
| change | collapse event | `Array` - `'string'\| 'number'` |    —    |

### CollapseItem Attributes

|   Name   |     Description     |         Type          | Default |
| :------: | :-----------------: | :-------------------: | :-----: |
|   name   | collapse item value | `'string'\| 'number'` |    —    |
|  title   |     item title      |       `string`        |    —    |
| disabled |     item click      |       `boolean`       |  false  |
