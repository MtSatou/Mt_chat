<template>
  <Transition>
    <div class="setting-container" v-if="visible">SETTINGS</div>
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
  overflow: hidden;

  text-align: center;
  line-height: 400px;
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  color: #e5e5e5;

}

.v-enter-active,
.v-leave-active {
  // transform-origin: left bottom;
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0;
  // height: 0;
  // transform: scale(0, 0);
}
</style>
