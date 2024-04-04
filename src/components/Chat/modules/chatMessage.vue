<template>
  <div class="mt-chat-message-container">
    <h4 class="message-title">老公</h4>
    <template v-if="type === 0">
      <div class="announcement-content">
        <div v-for="item in 10" :key="item" class="announcement-item">
          <FormatTime class="time"></FormatTime>
          <a-card class="content" :title="'消息通知：'" :bordered="false">
            <p>!!!怎會如此</p>
            <p>!!!怎會如此</p>
            <p>!!!怎會如此</p>
          </a-card>
        </div>
      </div>
    </template>

    <template v-else-if="type === 1">
      <div class="message-container">
        <div class="message-box">
          <div class="message-list">
            <a-avatar :size="32">
              <template #icon></template>
            </a-avatar>
            <Message></Message>
          </div>
        </div>
        <MessageEdit></MessageEdit>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Message from "./message.vue";
import MessageEdit from "./messageEdit.vue";
import { UserOutlined } from "@ant-design/icons-vue";
import FormatTime from "@/components/formatTime/index.vue";
defineProps({
  /**0 公告, 1 私聊, 2 群聊 */
  type: {
    type: Number as PropType<0 | 1 | 2>,
    default: 1,
  },
  data: {
    type: Array as PropType<any>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.mt-chat-message-container {
  height: 100%;
  & > div {
    height: calc(100% - 35px);
    overflow: auto;
    padding: 10px;
  }
  .message-title {
    letter-spacing: 1px;
    color: #6699ff;
    font-weight: bold;
    background-color: #fff;
    font-size: 22px;
    border-bottom: 1px solid #eee;
    margin: -6px -6px 0;
    padding: 6px;
  }
  .announcement-content {
    padding-bottom: 10px;
    .announcement-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      .time {
        margin: 10px 0;
        color: #333;
      }
      .content {
        width: 85%;
      }
    }
  }
  .message-container {
    .message-box {
      .message-list {
        display: flex;
        height: fit-content;
      }
    }
  }
}
</style>
