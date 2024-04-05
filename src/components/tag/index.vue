<template>
  <a-tag :color="tagColor" class="tag" v-if="title">{{ title }}</a-tag>
</template>

<script setup lang="ts">
import type { tagTypes } from "@/types/tag";
const props = defineProps({
  type: {
    type: String as PropType<tagTypes>,
    default: "member",
  },
  title: {
    type: String,
    default: "",
  },
});

const tagColor = computed(() => {
  switch (props.type) {
    case "leader":
      return "#f50f50";
    case "manager":
      return "#87d068";
    case "member":
      return "#2db7f5";
    case "special":
      return "#844ee0";
    default:
      return "#87d068";
  }
});
</script>

<style scoped></style>
