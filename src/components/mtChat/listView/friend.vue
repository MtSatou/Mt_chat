<template>
  <div style="height: 100%">
    <Search></Search>
    <div class="friend-view-box">
      <a-space direction="vertical" style="width: 100%" :size="16">
        <a-skeleton active :paragraph="false" :loading="loading">
          <a-collapse v-model:activeKey="activeKey" ghost>
            <a-collapse-panel v-for="group in data" :key="group.id" class="friend-group">
              <template #header>
                <div class="friend-group-title">
                  <span>{{ group.title }}</span>
                  <span>{{ group?.children?.length || 0 }}</span>
                </div>
              </template>
              <div class="friend-item" v-for="friend in group.children">
                <a-avatar :size="26" :url="friend.avatar"></a-avatar>
                <div class="friend-item-info">
                  <span class="nickname">{{ friend.nickname }}</span>
                  <!-- <p class="motto"></p> -->
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </a-skeleton>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { friendListType } from "@/types/friend";
import Search from "./search.vue";
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
  height: calc(100% - 25px);
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
