---
title: Dropdown | V-Element
description: Dropdown 组件的文档
---

# Dropdown 下拉框

常用的下拉框。

## 基础用法

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></preview>

### Dropdown Attributes

|      Name      |           Description           |            Type             | Default |
| :------------: | :-----------------------------: | :-------------------------: | :-----: |
|    trigger     |         trigger methods         | `enum` - `'hover\| 'click'` |  hover  |
|   placement    |        dropdown position        |         `popper.js`         | bottom  |
|   transition   |            animation            |          `string`           |  fade   |
|     manual     |    dropdown can or not show     |          `boolean`          |  false  |
| popperOptions  |         popper options          |         `popper.js`         |    —    |
|   openDelay    |       dropdown show delay       |          `number`           |    0    |
|   closeDelay   |      dropdown close delay       |          `number`           |    0    |
|  menuOptions   |          dropdown list          |           `array`           |    —    |
| hideAfterClick | after click list is or not show |          `boolean`          |  true   |

### Dropdown Events

|  Name  |  Description   |   Type   | Default |
| :----: | :------------: | :------: | :-----: |
| select | dropdown event | `object` |    —    |
