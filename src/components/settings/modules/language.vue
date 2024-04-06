<template>
  <a-row :gutter="16">
    <a-col
      :span="6"
      v-for="item in languageOptions"
      :key="item.id"
      @click="changeLanguage(item)"
    >
      <a-card :bordered="false" :class="{ 'card-active': currentLanguage === item.id }">
        <p class="tac">{{ item.name }}</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import useLanguage from "@/store/language";
import constant from "@/constant";
import { setLocalStorage } from "@/utils/localStorage";
import type { languageItem } from "@/store/types/language";

const languageStore = useLanguage();
const { language } = storeToRefs(languageStore);
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
currentLanguage.value = language.value?.id || languageOptions[0].id;

const changeLanguage = (item: languageItem) => {
  currentLanguage.value = item.id;
  languageStore.setLanguage(item);
  setLocalStorage(constant.STORE_NAME.LANGUAGE, item);
};
</script>

<style scoped></style>
