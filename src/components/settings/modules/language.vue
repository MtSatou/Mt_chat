<template>
  <a-row :gutter="16">
    <a-col :span="6" v-for="item in languageOptions" :key="item.id">
      <a-card
        :bordered="false"
        class="card-active"
        :class="{ 'card-active': currentLanguage === item.id }"
      >
        <p class="tac">{{ item.name }}</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { setLocalStorage, getLocalStorage } from "@/utils/localStorage";
interface languageItem {
  id: number;
  name: string;
  value: string;
}

const languageOptions: languageItem[] = [
  {
    id: 0,
    name: "中文",
    value: "Chinese",
  },
  {
    id: 1,
    name: "English",
    value: "English",
  },
];
const currentLanguage = ref();
currentLanguage.value = getLocalStorage("language")?.id || languageOptions[0].id;

const changeLanguage = (item: languageItem) => {
  currentLanguage.value = item.id;
  setLocalStorage("language", item);
};
changeLanguage(languageOptions[0]);
</script>

<style scoped></style>
