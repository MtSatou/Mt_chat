<template>
  <div class="avatar-content" :class="{ hover: update }">
    <a-avatar :="$attrs" :src="avatar" class="mt-avatar">
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <div class="update-shade" v-if="update" @click="showUpdateModal">
      <FormOutlined />
    </div>
  </div>
  <a-modal
    class="upload-modal"
    v-model:open="updateVisible"
    :centered="true"
    :closable="false"
  >
    <VueCropper
      ref="cropper"
      :src="updateAvatar"
      :key="updateAvatar"
    ></VueCropper>
    <template #footer>
      <div class="footer-button">
        <a-button @click="selectImage">选择新头像</a-button>
        <div>
          <a-button @click="updateVisible = false">取消</a-button>
          <a-button type="primary" @click="updateOK">确认</a-button>
        </div>
      </div>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import useUser from "@/store/user";
// @ts-expect-error
import VueCropper from "vue-cropperjs";
import { message } from "ant-design-vue";
import { UserOutlined, FormOutlined } from "@ant-design/icons-vue";
import { imageToBase64 } from "@/utils/canvas";

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
  if (props.update) {
    return props.src;
  } else if (props.me) {
    return userStore.getUser.avatar;
  } else if (props.src) {
    return props.src;
  } else {
    return "";
  }
});

const cropper = ref();
const updateAvatar = ref(avatar.value);
const updateVisible = ref(false);
// 选择图片
const selectImage = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.multiple = false;
  input.addEventListener("change", (event: any) => {
    const file = event.target.files[0];
    if (!file.type.includes("image")) {
      message.error("您选择的不是图片文件");
      return;
    } else {
      imageToBase64(file).then((res) => {
        updateAvatar.value = res as string;
      });
    }
    input.remove();
  });
  input.click();
};
// 打开裁剪头像对话框
const showUpdateModal = () => {
  updateVisible.value = true;
};

// 确认裁剪
const updateOK = () => {
  const imgCanvas = cropper.value.getCroppedCanvas();
  imgCanvas.toBlob(async function (blob: Blob) {
    const file = new File([blob], "image.jpg", {
      type: blob.type,
    });
    emit("update", file);
    updateVisible.value = false;
  });
};
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

.upload-modal {
  .footer-button {
    display: flex;
    justify-content: space-between;
  }
}
</style>
