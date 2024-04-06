<template>
  <a-row :gutter="16">
    <a-col
      :span="6"
      v-for="item in themeOptions"
      :key="item.id"
      @click="changeTheme(item)"
    >
      <a-card :bordered="false" :class="{ 'card-active': currentTheme === item.id }">
        <p class="tac">{{ item.name }}</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { setLocalStorage, getLocalStorage } from "@/utils/localStorage";
interface themeItem {
  id: number;
  name: string;
  value: string;
}

const themeOptions: themeItem[] = [
  {
    id: 0,
    name: "亮色",
    value: "light",
  },
  {
    id: 1,
    name: "黑夜",
    value: "night",
  },
  {
    id: 2,
    name: "跟随主题",
    value: "auto",
  },
];
const currentTheme = ref();
currentTheme.value = getLocalStorage("theme")?.id || themeOptions[0].id;

const changeTheme = (item: themeItem) => {
  currentTheme.value = item.id;
  setLocalStorage("theme", item);
};
changeTheme(themeOptions[0]);
</script>

<style scoped></style>
