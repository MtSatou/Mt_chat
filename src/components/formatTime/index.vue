<template>
  <div>{{ dayjs(time).format(format) }}</div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
defineProps({
  time: {
    type: Number || Date,
    default: 0
  },
  format: {
    type: String,
    default: "YYYY-MM-DD HH:mm:ss"
  }
})
</script>

<style scoped></style>
