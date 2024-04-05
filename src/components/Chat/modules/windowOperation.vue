<template>
  <div class="window-operation">
    <CloseOutlined @click="windowClose" />
  </div>
</template>

<script setup lang="ts">
import { CloseOutlined } from "@ant-design/icons-vue";
const windowClose = () => {
  globalThis.close();
};
</script>

<style scoped lang="scss">
.window-operation {
  text-align: right;
  height: 24px;
  line-height: 34px;
  background-color: #fff;
  margin: 0;
  margin-bottom: 2px;
  padding-right: 10px;
  & > * {
    cursor: pointer;
    color: #666;
  }
}
</style>
