<template>
  <div class="flex">
    <Avatar :size="80" me update @update="updateAvatar"></Avatar>
    <div
      style="
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      "
    >
      <h3 style="font-size: 20px" @click="updateInfo" v-if="!edit">
        {{ oldUserData.nickname }}
      </h3>
      <a-input
        size="small"
        v-model:value="oldUserData.nickname"
        placeholder="请输入昵称"
        v-if="edit"
      />
      <p style="display: flex; align-items: center">
        <span @click="updateInfo" v-if="!edit">{{ oldUserData.motto }}</span>
        <a-input
          size="small"
          v-model:value="oldUserData.motto"
          placeholder="请输入签名"
          v-if="edit"
          :maxlength="30"
        />
        <span :style="{ color: computedLengthColor, marginLeft: '5px' }"
          >[{{ oldUserData.motto.length }}/30]</span
        >
      </p>
      <p class="flex">
        账户创建时间：<FormatTime :time="oldUserData.createdTime"></FormatTime>
      </p>
    </div>
  </div>
  <div class="confirm">
    <a-button type="primary" style="margin-right: 10px" @click="confirm">修改</a-button>
    <a-button>取消</a-button>
  </div>
</template>

<script setup lang="ts">
import useUser from "@/store/user";
import FormatTime from "@/components/formatTime/index.vue";
const userStore = useUser();

const oldUserData = ref(userStore.getUser);
const computedLengthColor = computed(() => {
  if (oldUserData.value.motto.length < 15) {
    return "#6699ff";
  } else if (
    oldUserData.value.motto.length >= 15 &&
    oldUserData.value.motto.length < 25
  ) {
    return "#ff9b33";
  } else if (oldUserData.value.motto.length >= 25) {
    return "#ff3333";
  }
});

const edit = ref(false);
const updateInfo = () => {
  edit.value = true;
};

const confirm = () => {
  edit.value = false;
};

const updateAvatar = (data: any) => {
  console.log("确认修改了头像")
}
</script>

<style scoped>
.confirm {
  margin-top: 20px;
}
</style>
