<template>
  <a-image class="image" :width="200" :src="data.url" />
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

<style scoped>
.image {
  border-radius: 10px;
  overflow: hidden;
}
</style>
