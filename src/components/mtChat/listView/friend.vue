<template>
  <div style="height: 100%">
    <div class="friend-view-box">
      <a-space direction="vertical" style="width: 100%" :size="16">
        <a-collapse v-model:activeKey="activeKey" ghost>
          <a-collapse-panel v-for="group in data" :key="group.id" class="friend-group">
            <template #header>
              <div class="friend-group-title">
                <span>{{ group.title }}</span>
                <span>{{ group?.children?.length || 0 }}</span>
              </div>
            </template>
            <a-skeleton active :paragraph="false" :loading="loading">
              <div class="friend-item" v-for="friend in group.children">
                <Avatar :size="26" :src="friend.avatar"></Avatar>
                <div class="friend-item-info">
                  <span class="nickname">{{ friend.nickname }}</span>
                  <!-- <p class="motto"></p> -->
                </div>
              </div>
            </a-skeleton>
          </a-collapse-panel>
        </a-collapse>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { friendListType } from "@/types/friend";
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array as PropType<friendListType[]>,
    default: () => [],
  },
});

const activeKey = ref("");
</script>

<style scoped lang="scss">
.friend-view-box {
  height: calc(100% - 40px);
  overflow-y: scroll;
  user-select: none;
  margin-top: 5px;
  .friend-group {
    .friend-group-title {
      display: flex;
      justify-content: space-between;
    }
    .friend-item {
      display: flex;
      align-items: center;
      margin-left: 10px;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0px;
      }
      .friend-item-info {
        margin-left: 8px;
      }

      .nickname {
        font-weight: bold;
        color: #6699ff;
      }
    }
  }
}
</style>
