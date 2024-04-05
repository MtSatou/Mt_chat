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
          color:
            currentOperate.name === item.name ? item.activeIconColor : item.iconColor,
        }"
        :is="currentOperate.name === item.name ? item.activeIcon : item.icon"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { operateItem } from "@/types/operateTabs";

const emit = defineEmits(["change"]);
const props = defineProps({
  data: {
    type: Array as PropType<operateItem[]>,
    default: () => [],
  },
});
const currentOperate = ref(props.data[0]);
const operateClickHandler = (item: operateItem) => {
  currentOperate.value = item;
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