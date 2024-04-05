<template>
  <div class="search-container">
    <a-input placeholder="搜索">
      <template #prefix><SearchOutlined /></template>
    </a-input>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.search-container {
  padding: 0 12px;
}
</style>
