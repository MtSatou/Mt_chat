import constant from "@/constant";
import { defineStore } from "pinia";
import { getLocalStorage } from "@/utils/localStorage";
import { languageTypes, languageItem } from "./types/language.d";
export default defineStore({
  id: "language",
  state: (): languageTypes => {
    return {
      language: getLocalStorage(constant.STORE_NAME.LANGUAGE),
    };
  },
  getters: {
    getLanguage: state => state.language
  },
  actions: {
    setLanguage(value: languageItem) {
      this.language = value
    }
  },
});
