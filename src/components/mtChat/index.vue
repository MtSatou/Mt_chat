<template>
  <div class="mt-chat-container">
    <div class="mt-chat-content">
      <a-row class="mt-row-box">
        <a-col :span="operateActive.component[0]" class="operate-content">
          <Avatar></Avatar>
          <OperateTabs :data="operateList" @change="operateChange"></OperateTabs>
          <SettingFilled style="color: #333333; font-size: 25px; cursor: pointer" />
        </a-col>
        <a-col :span="operateActive.component[1]" class="list-view-content">
          <Search></Search>
          <div
            class="transition-box"
            :style="{
              left: operateActive.id === 0 ? '0%' : '-100%',
            }"
          >
            <Session
              :data="list"
              :loading="listInitLoading"
              key="Session"
              :style="{
                opacity:
                  operateActive.id === 1 ? '0%' : operateActive.id === 2 ? '0' : '100%',
              }"
            ></Session>
            <Friend
              :data="friendList"
              :loading="listInitLoading"
              key="Friend"
              :style="{
                opacity:
                  operateActive.id === 0 ? '0%' : operateActive.id === 2 ? '0' : '100%',
              }"
            ></Friend>
          </div>
        </a-col>
        <a-col :span="operateActive.component[2]" class="chat-message-content">
          <WindowOperation></WindowOperation>
          <Chat :data="message"></Chat>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chat from "./message/chat.vue";
import WindowOperation from "./message/windowOperation.vue";
import Avatar from "@/components/avatar/index.vue";
import OperateTabs from "./operateTabs.vue";
import Search from "./listView/search.vue";
import Session from "./listView/session.vue";
import Friend from "./listView/friend.vue";
import type { messageListItem } from "@/types/message";
import type { friendListType } from "@/types/friend";
import type { operateItem } from "@/types/operateTabs";
import {
  MessageOutlined,
  UserOutlined,
  NumberOutlined,
  MessageFilled,
  SettingFilled,
} from "@ant-design/icons-vue";
// import { useTheme } from "@/utils/theme";
onMounted(() => {
  // useTheme();
});

const list = ref<messageListItem[]>([
  {
    id: "1",
    avatar: "avatar_url_1",
    userId: "user_id_1",
    nickname: "User 1",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "v50?",
      },
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 2",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 3",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 4",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 5",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 6",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 7",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 7",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 7",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 7",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        text: "Image caption",
        imageWidth: 800,
        imageHeight: 600,
      },
    ],
  },
]);
const listInitLoading = ref(false);

// 好有列表
const friendList = ref<friendListType[]>([
  {
    id: "0",
    title: "朋友",
    createdTime: Date.now(),
    updatedTime: -1,
    children: [
      { userId: "1001", nickname: "张三", avatar: "", motto: "", onLine: false },
      { userId: "1002", nickname: "李四", avatar: "", motto: "", onLine: false },
      { userId: "1003", nickname: "王五", avatar: "", motto: "", onLine: false },
    ],
  },
  {
    id: "1",
    title: "家人",
    createdTime: Date.now(),
    updatedTime: -1,
  },
]);

const message = ref<messageListItem[]>([
  {
    id: "1",
    avatar: "http://localhost:1000/b_d77a31434d40a1653006d01ea38f07f6.jpg",
    userId: "user123",
    nickname: "小宝",
    tag: "",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "早安，亲爱的，今天你醒得怎么样？",
      },
    ],
  },
  {
    id: "2",
    avatar: "http://localhost:1000/b_86744ff7da2be70cbff32adc31754094.jpg",
    userId: "user456",
    nickname: "大宝",
    tag: "",
    createTime: Date.now() + 60 * 1000 * 5.1,
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "早安呀，宝贝儿，我今天醒来第一时间就在想你呢。",
      },
    ],
  },
  {
    id: "3",
    avatar: "http://localhost:1000/b_d77a31434d40a1653006d01ea38f07f6.jpg",
    userId: "user123",
    nickname: "小宝",
    tag: "",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "嘻嘻，我也是。今天想好怎么宠爱我了吗？",
      },
    ],
  },
  {
    id: "4",
    avatar: "http://localhost:1000/b_86744ff7da2be70cbff32adc31754094.jpg",
    userId: "user456",
    nickname: "大宝",
    tag: "",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "当然了，今晚带你去吃你最爱的日式料理，然后一起去看星星，怎么样？",
      },
    ],
  },
  {
    id: "5",
    avatar: "http://localhost:1000/b_d77a31434d40a1653006d01ea38f07f6.jpg",
    userId: "user123",
    nickname: "小宝",
    tag: "",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        url: "http://localhost:1000/[bb]c2d13ec457bdf0cd4f25121fdc9f7f30.gif",
        imageWidth: 100,
        imageHeight: 100,
      },
      {
        messageType: "text",
        text: "太好啦！期待晚上的约会~",
      },
    ],
  },
  {
    id: "6",
    avatar: "http://localhost:1000/b_86744ff7da2be70cbff32adc31754094.jpg",
    userId: "user456",
    tag: "",
    nickname: "大宝",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "我也是，宝贝，爱你~",
      },
    ],
  },
  {
    id: "7",
    avatar: "http://localhost:1000/9150e4e5gy1g64m9acxsbj206o06o74q.jpg",
    userId: "user456",
    nickname: "二哈",
    tag: "孤寡",
    createTime: Date.now(),
    attainability: true,
    messageContent: [
      {
        messageType: "image",
        url: "http://localhost:1000/F2DC3938AB01805A68F58486944C4D23.gif",
        imageWidth: 100,
        imageHeight: 100,
      },
    ],
  },
]);

const operateList = ref<operateItem[]>([
  {
    id: 0,
    name: "会话",
    icon: MessageOutlined,
    activeIcon: MessageFilled,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 6, 16],
  },
  {
    id: 1,
    name: "好友",
    icon: UserOutlined,
    activeIcon: UserOutlined,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 6, 16],
  },
  {
    id: 2,
    name: "MT空间",
    icon: NumberOutlined,
    activeIcon: NumberOutlined,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 0, 22],
  },
]);
const operateActive = ref<operateItem>(operateList.value[0]);
const operateChange = (item: operateItem) => {
  operateActive.value = item;
};
</script>

<style scoped lang="scss">
.mt-chat-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

  .mt-chat-content {
    position: relative;
    z-index: 10;
    width: 55vw;
    min-height: 70vh;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    filter: drop-shadow(5px 5px 2px #00000030);
    .mt-row-box {
      height: 70vh;
      .operate-content {
        height: 100%;
        text-align: center;
        background-image: linear-gradient(
          315deg,
          rgb(250, 255, 255),
          rgb(243, 251, 255) 74%
        );
      }
      .list-view-content {
        position: relative;
        height: 100%;
        background-color: #fff;
        padding-top: 20px;
        overflow: hidden;
        .transition-box {
          position: absolute;
          display: flex;
          height: 100%;
          width: 200%;
          > div {
            width: 100%;
            padding: 20px 10px;
            padding-top: 0;
          }
        }
      }
      .chat-message-content {
        height: 100%;
        background-color: rgb(245, 245, 245);
      }
    }
  }
}
</style>
