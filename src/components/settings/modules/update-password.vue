<template>
  <a-form
    ref="formRef"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    :rules="rules"
    autocomplete="off"
  >
    <a-form-item name="password">
      <a-input-password placeholder="请输入新密码" v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="rePassword">
      <a-input-password
        placeholder="请再次输入新密码"
        v-model:value="formState.rePassword"
      />
    </a-form-item>

    <a-form-item v-if="formState.password || formState.rePassword">
      <a-button type="primary" html-type="submit" @click="updatePasswordHandler"
        >修改密码</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
const formRef = ref();
const formState = ref({
  password: "",
  rePassword: "",
});

const rules = ref({
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
      validator: (rule: any, value: string) => {
        if (value.length >= 6) {
          return Promise.resolve();
        } else {
          rule.message = "密码长度不小于六位";
          return Promise.reject();
        }
      },
    },
  ],
  rePassword: [
    {
      required: true,
      message: "两次密码不一致",
      trigger: "change",
      validator: (rule: any, value: string) => {
        if (value === formState.value.password) {
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      },
    },
  ],
});

const updatePasswordHandler = () => {
  message.success("修改成功");
  formRef.value.resetFields();
};
</script>

<style scoped></style>
