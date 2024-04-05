<template>
  <Transition>
    <div class="setting-container" v-if="visible">设置</div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.setting-container {
  position: absolute;
  top: 0;
  width: calc(100% - 8.3333333%);
  height: 100%;
  left: 8.3333333%;
  background-color: #f5f5f5;
  z-index: 999;
}
</style>
