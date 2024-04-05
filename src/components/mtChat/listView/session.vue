<template>
  <div style="height: 100%">
    <a-list :data-source="data" item-layout="horizontal" class="list-view-box">
      <template #renderItem="{ item }">
        <a-list-item class="list-item" @click="clickSession(item)">
          <a-skeleton avatar :title="false" :loading="loading" active>
            <a-list-item-meta>
              <template #title>
                <div class="flex flex-jsb">
                  <a>{{ item.nickname || item.title }}</a>
                  <div class="create-time">
                    <FormatTime
                      :time="item.createTime"
                      :format="
                        Date.now() - item.createTime > 86400000
                          ? 'YYYY-MM-DD HH:mm'
                          : 'HH:mm'
                      "
                    ></FormatTime>
                  </div>
                </div>
              </template>
              <template #avatar>
                <a-avatar :src="item.avatar" :size="40"/>
              </template>
              <template #description>
                <div class="flex">
                  <div class="text-ellipsis-1 message-content">
                    {{ getRoughInfo(item.messageList) }}
                  </div>
                  <a-badge count="5" color="#6699ff" />
                </div>
              </template>
            </a-list-item-meta>
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import FormatTime from "@/components/formatTime/index.vue";
import type { messageListItem } from "@/types/message";
import type { sessionMessageItem } from "@/types/session";

const emit = defineEmits(["click"]);
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<sessionMessageItem[]>,
    default: () => [],
  },
});

const getRoughInfo = (item: messageListItem[]) => {
  return item[item.length - 1].messageContent.reduce((str: string, item: messageListItem) => {
    switch (item.messageType) {
      case "text":
        str += item.text;
        break;
      case "image":
        str += "[图片]";
        break;
      case "file":
        str += "[文件]";
        break;
      case "audio":
        str += "[语音]";
        break;
      case "video":
        str += "[视频]";
        break;
      case "at":
        str += "[有人at我]";
        break;
    }
    return str;
  }, "");
};

const clickSession = (item: sessionMessageItem) => {
  emit("click", item);
};
</script>

<style scoped lang="scss">
.list-view-box {
  height: calc(100% - 40px);
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
      flex: 1;
    }
  }
}
</style>
