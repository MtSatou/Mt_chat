<template>
  <div class="operate-list">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="operate-list-item"
      @click="operateClickHandler(item)"
    >
      <component
        style="font-size: 25px"
        :style="{
          color: model === item.name ? item.activeIconColor : item.iconColor,
        }"
        :is="model === item.name ? item.activeIcon : item.icon"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { operateItem } from "@/types/operateTabs";

const emit = defineEmits(["change"]);
const model = defineModel();
defineProps({
  data: {
    type: Array as PropType<operateItem[]>,
    default: () => [],
  },
});

const operateClickHandler = (item: operateItem) => {
  model.value = item.name;
  emit("change", item);
};
</script>

<style scoped lang="scss">
.operate-list {
  margin-top: 20px;
  height: calc(100% - 125px);

  .operate-list-item {
    margin-top: 5px;
    padding: 12px;
    cursor: pointer;
  }
}
</style>

<style>
.operate-list-item * {
  transition: none;
}
</style>
