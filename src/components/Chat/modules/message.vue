<template>
  <div class="message">
    <div v-for="(m, idx) in data1" :key="idx" class="message-item">
      <div v-if="m.messageType === 'text'">{{ m.text }}</div>
      <a-image
        class="image"
        v-else-if="m.messageType === 'image'"
        :width="200"
        :src="m.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { messageContent } from "@/types/message";
defineProps({
  data: {
    type: Array as PropType<messageContent[]>,
    default: () => [],
  },
});

const data1: messageContent[] = [
  {
    messageType: "text",
    text: "好餓！！",
  },
  {
    messageType: "image",
    url:
      "https://img2.baidu.com/it/u=1644005163,3621173769&fm=253&fmt=auto&app=138&f=JPEG?w=274&h=308",
  },
  {
    messageType: "text",
    text: "上当了！"
  }
];
</script>

<style scoped lang="scss">
.message {
  max-width: 60%;
  min-height: 32px;
  background-color: #ffffff;
  margin-left: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px -2px #00000030;
  word-wrap: break-word;
  word-break: break-all;
  .message-item {
    & > * {
      padding: 5px;
    }
    .image {
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
</style>
