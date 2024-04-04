<template>
  <div class="message">
    <div v-for="(d, idx) in data" :key="idx" class="message-item">
      <Text :data="d" v-if="d.messageType === 'text'"></Text>
      <Image :data="d" v-else-if="d.messageType === 'image'"></Image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Text, Image } from "./node";
import type { messageContent } from "@/types/message";
defineProps({
  data: {
    type: Array as PropType<messageContent[]>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.message {
  max-width: 60%;
  min-height: 32px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px -2px #00000030;
  word-wrap: break-word;
  word-break: break-all;
  .message-item {
    & > * {
      padding: 5px;
    }
  }
}
</style>
