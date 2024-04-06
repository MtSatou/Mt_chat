import { defineStore } from "pinia";
import { store } from "./types/user";
export default defineStore({
  id: "user",
  state: (): store => {
    return {
      user: {
        userId: "",
        nickname: "",
        avatar: "",
        motto: "",
        createdTime: 0,
      }
    };
  },
  actions: {},
});
