<template>
  <div style="height: 100%">
    <a-input placeholder="搜索">
      <template #prefix><SearchOutlined /></template>
    </a-input>
    <a-list
      :data-source="data"
      item-layout="horizontal"
      class="list-view-box"
    >
      <template #renderItem="{ item }">
        <a-list-item class="list-item">
          <a-skeleton avatar :title="false" :loading="loading" active>
            <a-list-item-meta>
              <template #title>
                <div class="flex flex-jsb">
                  <a>{{ item.nickname }}</a>
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
  </div>
</template>

<script setup lang="ts">
import type { messageListItem } from "@/types/message";
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as propType<messageListItem>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.list-view-box {
  height: calc(100% - 25px);
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
</style>
