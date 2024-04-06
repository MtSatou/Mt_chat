<template>
  <div class="flex">
    <Avatar :size="80">
      <template #icon><UserOutlined /></template>
    </Avatar>
    <div style="margin-left: 10px">
      <h3 style="margin-bottom: 10px">User_10000</h3>
      <p style="margin-bottom: 6px">
        这个人太懒了，没有设置签名
        <span style="color: #3366ff">[14/30]</span>
      </p>
      <p class="flex">账户创建时间：<FormatTime></FormatTime></p>
    </div>
  </div>
  <div class="confirm">
    <a-button type="primary" style="margin-right: 10px">修改</a-button>
    <a-button>取消</a-button>
  </div>
</template>

<script setup lang="ts">
import FormatTime from "@/components/formatTime/index.vue";
</script>

<style scoped>
.confirm {
  margin-top: 20px;
}
</style>
