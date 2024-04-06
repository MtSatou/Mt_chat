<template>
  <a-avatar :="$attrs" class="mt-avatar" :src="avatar">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script setup lang="ts">
import useUser from "@/store/user";
import { UserOutlined } from "@ant-design/icons-vue";

const userStore = useUser();
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
</script>

<style scoped lang="scss"></style>
