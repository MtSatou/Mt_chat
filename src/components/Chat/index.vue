<template>
  <div class="mt-chat-container">
    <div class="mt-chat-content">
      <a-row class="mt-row-box">
        <a-col :span="2" class="operate-content">
          <Avatar></Avatar>
          <div class="operate-list">
            <div
              v-for="(item, index) in operateList"
              :key="index"
              class="operate-list-item"
              @click="operateClickHandler(item)"
            >
              <component
                style="font-size: 25px"
                :style="{
                  color:
                    currentOperate.name === item.name
                      ? item.activeIconColor
                      : item.iconColor,
                }"
                :is="currentOperate.name === item.name ? item.activeIcon : item.icon"
              ></component>
              <!-- <MessageFilled ></MessageFilled> -->
            </div>
          </div>
          <SettingFilled style="color: #333333; font-size: 25px; cursor: pointer" />
        </a-col>
        <a-col :span="6" class="list-view-content">
          <a-input placeholder="搜索">
            <template #prefix><SearchOutlined /></template>
          </a-input>
          <a-list
            :loading="listInitLoading"
            item-layout="horizontal"
            :data-source="list"
            class="list-view-box"
          >
            <template #renderItem="{ item }">
              <a-list-item class="list-item">
                <a-skeleton avatar :title="false" :loading="false" active>
                  <a-list-item-meta>
                    <template #title>
                      <div class="flex flex-jsb">
                        <a href="https://www.antdv.com/">{{ item.nickname }}</a>
                        <div class="create-time">{{ item.createTime }}</div>
                      </div>
                    </template>
                    <template #avatar>
                      <a-avatar :src="item.avatar" />
                    </template>
                    <template #description>
                      <div class="flex">
                        <div class="text-ellipsis-1 message-content">
                          {{ item.messageContent }}
                        </div>
                        <a-badge count="5" color="#6699ff" />
                      </div>
                    </template>
                  </a-list-item-meta>
                </a-skeleton>
              </a-list-item>
            </template>
          </a-list>
        </a-col>
        <a-col :span="16" class="chat-message-content">
          <WindowOperation></WindowOperation>
          <ChatMessage></ChatMessage>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatMessage from "./modules/chatMessage.vue";
import WindowOperation from "./modules/windowOperation.vue";
import Avatar from "@/components/avatar/index.vue";
import type { messageListItem } from "@/types/message";
import {
  MessageOutlined,
  UserOutlined,
  NumberOutlined,
  MessageFilled,
  SettingFilled,
  SearchOutlined,
  CloseOutlined,
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
    createTime: "12:00:00",
    attainability: true,
    messageContent: [
      {
        messageType: "text",
        text: "Hello, how are you?",
      },
    ],
  },
  {
    id: "2",
    avatar: "avatar_url_2",
    userId: "user_id_2",
    nickname: "User 2",
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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
    createTime: "2024-2-31",
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

interface operateItem {
  name: string;
  icon: any;
  activeIcon: any;
  iconColor: string;
  activeIconColor: string;
  component: number[];
}
const operateList = ref<operateItem[]>([
  {
    name: "会话",
    icon: MessageOutlined,
    activeIcon: MessageFilled,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 6, 16],
  },
  {
    name: "好友",
    icon: UserOutlined,
    activeIcon: UserOutlined,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 6, 16],
  },
  {
    name: "MT空间",
    icon: NumberOutlined,
    activeIcon: NumberOutlined,
    iconColor: "#333333",
    activeIconColor: "#6699ff",
    component: [2, 0, 22],
  },
]);
const currentOperate = ref(operateList.value[0]);
const operateClickHandler = (item: operateItem) => {
  currentOperate.value = item;
};
</script>

<style scoped lang="scss">
.mt-chat-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: $bgColor;
  background-color: #eec0c6;
  background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

  .mt-chat-content {
    position: relative;
    z-index: 10;
    min-width: 55vw;
    min-height: 70vh;
    // overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    filter: drop-shadow(5px 5px 2px #00000030);
    .mt-row-box {
      height: 70vh;
      .operate-content,
      .list-view-content,
      .chat-message-content {
        padding: 5px;
        border-right: 1px solid #f6f6f6;
      }
      .operate-content {
        height: 100%;
        text-align: center;
        background-image: linear-gradient(
          315deg,
          rgb(250, 255, 255),
          rgb(243, 251, 255) 74%
        );
        .operate-list {
          margin-top: 20px;
          height: calc(100% - 125px);
          .operate-list-item {
            margin-top: 5px;
            padding: 12px;
            cursor: pointer;
          }
        }
      }
      .list-view-content {
        padding: 20px 10px;
        height: 100%;
        background-color: #fff;
        .list-view-box {
          height: calc(100% - 32px - 20px);
          overflow-y: scroll;
          user-select: none;
          margin-top: 5px;
          :deep(.ant-list-item) {
            padding-left: 5px;
            padding-right: 5px;
            align-items: flex-start;
          }
          .list-item {
            $bg: #f6f6f6;
            &.active {
              background-color: $bg;
            }
            &:hover {
              background-color: $bg;
            }
            .create-time {
              color: #555;
              font-weight: 400;
              font-size: 12px;
            }
            .message-content {
              padding-right: 10px;
            }
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
