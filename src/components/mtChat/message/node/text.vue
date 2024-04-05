<template>
  <div v-if="data.messageType === 'text'">{{ data.text }}</div>
</template>

<script setup lang="ts">
import type { messageContent } from "@/types/message";
defineProps({
  data: {
    type: Object as PropType<messageContent>,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
