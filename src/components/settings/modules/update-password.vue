<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
  >
    <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <a-input-password placeholder="请输入新密码" v-model:value="formState.password" />
    </a-form-item>

    <a-form-item
      name="rePassword"
      :rules="[{ required: true, message: '两次密码不一致' }]"
    >
      <a-input-password
        placeholder="请重复输入新密码"
        v-model:value="formState.rePassword"
      />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">修改密码</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
const formState = ref({
  password: "",
  rePassword: "",
});
</script>

<style scoped></style>
