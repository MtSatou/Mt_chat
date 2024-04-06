<template>
  <div class="avatar-content" :class="{ hover: update }">
    <a-avatar :="$attrs" :src="avatar" class="mt-avatar">
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <div class="update-shade" v-if="update" @click="showUpdateModal"><FormOutlined /></div>
  </div>
  <a-modal v-model:open="updateVisible" @ok="updateOK" centered>
    123
  </a-modal>
</template>

<script setup lang="ts">
import useUser from "@/store/user";
import { UserOutlined, FormOutlined } from "@ant-design/icons-vue";

const userStore = useUser();
const emit = defineEmits(["update"]);
const props = defineProps({
  // 是否是自己
  me: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: "",
  },
  /**是否可以点击更新头像 */
  update: {
    type: Boolean,
    default: false,
  },
});

const avatar = computed(() => {
  if (props.me) {
    return userStore.getUser.avatar;
  } else if (props.src) {
    return props.src;
  } else {
    return "";
  }
});

const updateVisible = ref(false);
// 裁剪头像
const showUpdateModal = () => {
  updateVisible.value = true;
};
const updateOK = () => {
  emit("update");
}
</script>

<style scoped lang="scss">
.avatar-content {
  position: relative;
  width: fit-content;
  height: fit-content;
  &.hover {
    cursor: pointer;
  }
  &:hover {
    .update-shade {
      opacity: 1;
    }
  }

  .update-shade {
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #33333340;
    border-radius: 50%;
    transition: opacity 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
}
</style>
