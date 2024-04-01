<template>
  <a-avatar :size="50" class="mt-avatar">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
</script>

<style scoped lang="scss">
.mt-avatar {
  margin-top: 15px;
}
</style>
