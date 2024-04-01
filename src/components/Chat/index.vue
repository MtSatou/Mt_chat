<template>
  <div class="mt-chat-container">
    <a-card class="mt-chat-content">
      <a-row>
        <a-col :span="1">col-8</a-col>
        <a-col :span="7">col-8</a-col>
        <a-col :span="16">col-8</a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "@/utils/theme";
onMounted(() => {
  useTheme();
});
</script>

<style scoped lang="scss">
.mt-chat-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .mt-chat-content {
    width: 80%;
    height: 80%;
  }
}
</style>
