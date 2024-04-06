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
                  <Language></Language>
                </div>
              </div>
              <div class="children-item">
                <h3 id="theme">主题</h3>
                <div class="content">
                  <Theme></Theme>
                </div>
              </div>
            </div>
          </div>
          <div class="children">
            <h2 id="account">账户</h2>
            <div class="children">
              <div class="children-item">
                <h3 id="basic-information">基础信息</h3>
                <div class="content">
                  <BasicInformation></BasicInformation>
                </div>
              </div>
              <div class="children-item">
                <h3 id="update-password">修改密码</h3>
                <div class="content">
                  <UpdatePassword></UpdatePassword>
                </div>
              </div>
              <div class="children-item">
                <h3 id="write-off">注销</h3>
                <div class="content">
                  <WriteOff></WriteOff>
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
import WriteOff from "./modules/write-off.vue";
import BasicInformation from "./modules/basic-information.vue";
import UpdatePassword from "./modules/update-password.vue";
import Language from "./modules/language.vue";
import Theme from "./modules/theme.vue";
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
        padding-top: 10px;
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
  :deep(.card-active) {
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
