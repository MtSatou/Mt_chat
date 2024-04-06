import { defineStore } from "pinia";
import { store } from "./types/user";
export default defineStore({
  id: "user",
  state: (): store => {
    return {
      user: {
        userId: "",
        nickname: "",
        avatar: "https://img1.baidu.com/it/u=1333417867,4012964063&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        motto: "",
        createdTime: 0,
      }
    };
  },
  getters: {
    getUser: store => store.user
  },
  actions: {},
});
