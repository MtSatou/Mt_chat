import constant from "@/constant";
import { defineStore } from "pinia";
import { getLocalStorage } from "@/utils/localStorage";
import { themeTypes, themeItem } from "./types/theme.d";
export default defineStore({
  id: "theme",
  state: (): themeTypes => {
    return {
      theme: getLocalStorage(constant.STORE_NAME.THEME),
    };
  },
  getters: {
    getTheme: state => state.theme
  },
  actions: {
    setTheme(value: themeItem) {
      this.theme = value
    }
  },
});
