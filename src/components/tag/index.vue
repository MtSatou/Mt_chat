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

const tagMap: Record<tagTypes, string> = {
  leader: "#f50f50",
  manager: "#87d068",
  member: "#2db7f5",
  special: "#844ee0",
};

const tagColor = computed(() => {
  return tagMap[props.type] || tagMap.member;
});
</script>

<style scoped></style>
