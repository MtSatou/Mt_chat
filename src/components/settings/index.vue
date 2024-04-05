<template>
  <Transition>
    <div class="setting-container" v-if="visible">
      <a-row :gutter="22" style="height: 100%">
        <a-col :span="4" class="navigation"> <a-anchor :items="anchor"></a-anchor></a-col>
        <a-col :span="20" class="setting-content">
          <div class="children">
            <h2 id="general">通用</h2>
            <div class="children">
              <div class="children-item">
                <h3 id="language">语言</h3>
                <div class="content">
                  <a-row :gutter="16">
                    <a-col :span="6">
                      <a-card :bordered="false" class="card-active">
                        <p class="tac">中文</p>
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <p class="tac">English</p>
                      </a-card>
                    </a-col>
                  </a-row>
                </div>
              </div>
              <div class="children-item">
                <h3 id="theme">主题</h3>
                <div class="content">
                  <a-row :gutter="16">
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <p class="tac">亮色</p>
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false">
                        <p class="tac">黑夜</p>
                      </a-card>
                    </a-col>
                    <a-col :span="6">
                      <a-card :bordered="false" class="card-active">
                        <p class="tac">跟随主题</p>
                      </a-card>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </div>
          <div class="children">
            <h2 id="account">账户</h2>
            <div class="children">
              <div class="children-item">
                <h3 id="basic-information">基础信息</h3>
                <div class="content flex">
                  <a-avatar :size="80">
                    <template #icon><UserOutlined /></template>
                  </a-avatar>
                  <div style="margin-left: 10px">
                    <h3 style="margin-bottom: 10px">User_10000</h3>
                    <p style="margin-bottom: 6px">这个人太懒了，没有设置签名 <span style="color: #3366ff">[14/30]</span></p>
                    <p class="flex">账户创建时间：<FormatTime></FormatTime></p>
                  </div>
                </div>
                <!-- <div>
                  <a-button type="primary" style="margin-right: 10px">修改</a-button>
                  <a-button>取消</a-button>
                </div> -->
              </div>
              <div class="children-item">
                <h3 id="update-password">修改密码</h3>
                <div class="content">
                  <a-form
                    :model="formState"
                    name="basic"
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    autocomplete="off"
                  >
                    <a-form-item
                      name="password"
                      :rules="[
                        { required: true, message: '请输入密码' },
                      ]"
                    >
                      <a-input-password
                        placeholder="请输入新密码"
                        v-model:value="formState.password"
                      />
                    </a-form-item>

                    <a-form-item
                      name="rePassword"
                      :rules="[
                        { required: true, message: '两次密码不一致' },
                      ]"
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
                </div>
              </div>
              <div class="children-item">
                <h3 id="write-off">注销</h3>
                <div class="content">
                  <p style="margin-bottom: 10px;">注销后将清空账户所有聊天记录，无法恢复！</p>
                  <a-button type="primary" danger>注销</a-button>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import FormatTime from "@/components/formatTime/index.vue";
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const anchor = [
  {
    key: "1",
    href: "#general",
    title: "通用",
    children: [
      {
        key: "1-1",
        href: "#language",
        title: "语言",
      },
      {
        key: "1-2",
        href: "#theme",
        title: "主题",
      },
    ],
  },
  {
    key: "2",
    href: "#account",
    title: "账户",
    children: [
      {
        key: "2-1",
        href: "#basic-information",
        title: "基础信息",
      },
      {
        key: "2-2",
        href: "#update-password",
        title: "修改密码",
      },
      {
        key: "2-3",
        href: "#write-off",
        title: "注销",
      },
    ],
  },
];

const formState = ref({
  password: "",
  rePassword: "",
});
</script>

<style scoped lang="scss">
.setting-container {
  color: #444;
  background: linear-gradient(315deg, rgb(250, 255, 255), rgb(243, 251, 255) 74%);
  padding: 20px;
  width: calc(100% - 8.3333333%);
  height: 100%;
  position: absolute;
  top: 0;
  left: 8.3333333%;
  z-index: 999;
  overflow: hidden;
  .navigation {
    user-select: none;
    border-right: 1px solid #ccc;
    height: 100%;
  }
  .setting-content {
    height: 100%;
    overflow-y: auto;
    .children {
      padding: 8px 20px;
      .children-item {
        padding: 16px 0;
        .content {
          padding: 18px 0;
        }
      }
    }

    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 22px;
    }
  }
  :deep(.ant-card) {
    cursor: pointer;
  }
  .card-active {
    color: #fff;
    background-color: #6699ff;
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      right: 6px;
      color: #fff;
      font-size: 20px;
      content: "●";
    }
  }
}

.v-enter-active,
.v-leave-active {
  transform-origin: left bottom;
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  // width: 0;
  // height: 0;
  transform: scale(0, 0);
}
</style>
