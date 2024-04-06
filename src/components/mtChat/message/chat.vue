<template>
  <div class="mt-chat-message-container">
    <h4 class="message-title" v-if="type !== 3">{{ title }}</h4>
    <template v-if="type === 0">
      <div class="announcement-content" style="height: calc(100% - 25px)">
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
      <div class="message-container" style="height: calc(100% - 35px - 35px)">
        <div class="message-box">
          <div class="message-list" v-for="(item, index) in data" :key="item.id">
            <!-- 第一条和下面每一条的时间相差5分钟就展示时间 -->
            <FormatTime
              class="time"
              :time="item.createTime"
              v-if="
                index === 0 ||
                (data[index + 1] &&
                  data[index].createTime - data[index + 1].createTime > messageTime)
              "
            ></FormatTime>
            <div
              class="message-content"
              :class="item.userId === 'user123' ? 'right' : 'left'"
            >
              <Avatar :size="40" :src="item.avatar" class="message-avatar">
                <template #icon></template>
              </Avatar>
              <Message :data="item.messageContent"></Message>
            </div>
          </div>
        </div>
        <MessageEdit></MessageEdit>
      </div>
    </template>

    <template v-else-if="type === 2">
      <div class="group-message-container" style="height: calc(100% - 35px - 35px)">
        <div class="message-box">
          <div class="message-list" v-for="(item, index) in data" :key="item.id">
            <!-- 第一条和下面每一条的时间相差5分钟就展示时间 -->
            <FormatTime
              class="time"
              :time="item.createTime"
              v-if="
                index === 0 ||
                (data[index + 1] &&
                  data[index].createTime - data[index + 1].createTime > messageTime)
              "
            ></FormatTime>
            <div
              class="message-content"
              :class="item.userId === 'user123' ? 'right' : 'left'"
            >
              <Avatar :size="40" :src="item.avatar" class="message-avatar">
                <template #icon></template>
              </Avatar>
              <div class="identity">
                <div class="identification">
                  <Tag :type="item.tagType" :title="item.tag"></Tag>
                  <span>{{ item.title }}</span>
                </div>
                <Message :data="item.messageContent"></Message>
              </div>
            </div>
          </div>
        </div>
        <MessageEdit></MessageEdit>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Tag from "@/components/tag/index.vue";
import Message from "./message.vue";
import MessageEdit from "./messageEdit.vue";
import FormatTime from "@/components/formatTime/index.vue";
import type { messageListItem, chatType } from "@/types/message";
defineProps({
  type: {
    type: Number as PropType<chatType>,
    default: 3,
  },
  data: {
    type: Array as PropType<messageListItem[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: "[]",
  },
});

const messageTime = 60 * 1000 * 5; // 5分钟
</script>

<style scoped lang="scss">
.mt-chat-message-container {
  color: #333;
  height: calc(100% - 24px - 20px);
  & > div {
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
    padding: 16px 6px;
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
  @mixin message-container {
    .message-box {
      .message-list {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
        .time {
          text-align: center;
          margin: 15px 0;
        }
        .message-content {
          display: flex;
          height: fit-content;

          &.right {
            justify-content: flex-end;
            .message-avatar {
              order: 1;
              margin-right: 0;
              margin-left: 10px;
            }
          }
          .message-avatar {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .message-container {
    @include message-container;
  }

  .group-message-container {
    @include message-container;
    .message-content {
      .identity {
        width: 100%;
        display: flex;
        height: fit-content;
        flex-direction: column;
        .identification {
          margin-bottom: 5px;
        }
      }
      &.right {
        .identity {
          align-items: flex-end;
          .identification {
            display: flex;
            align-items: center;
            .tag {
              order: 1;
              margin-right: 0px;
              margin-left: 7px;
            }
          }
        }
      }
    }
  }
}
</style>
