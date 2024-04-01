import { defineStore } from "pinia";
import { themeTypes } from "./types/theme.d";
export default defineStore({
  id: "theme",
  state: (): themeTypes => {
    return {
      theme: "night",
    };
  },
  actions: {},
});
