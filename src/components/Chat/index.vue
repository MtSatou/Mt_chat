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
          <SettingFilled style="color: #333333; font-size: 25px" />
        </a-col>
        <a-col :span="6" class="list-view-content"></a-col>
        <a-col :span="16" class="chat-message-content"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from "@/components/avatar/index.vue";
import {
  MessageOutlined,
  UserOutlined,
  NumberOutlined,
  MessageFilled,
  SettingFilled,
} from "@ant-design/icons-vue";
import { useTheme } from "@/utils/theme";
onMounted(() => {
  // useTheme();
});

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
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
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
        height: 100%;
        background-color: #fff;
      }
      .chat-message-content {
        height: 100%;
        background-color: rgb(245, 245, 245);
      }
    }
  }
}
</style>
