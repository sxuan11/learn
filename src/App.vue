<template>
  <div class="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="base">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>WebRTC</template>
        <el-menu-item index="/rtc/base">基础示例</el-menu-item>
        <el-menu-item index="2-2">屏幕录制</el-menu-item>
        <el-menu-item index="2-3">多对多连麦</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">Three.js</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import router from './router'
import { ref } from 'vue';
const activeIndex = ref('base');
const handleSelect = (key: string) => {
  router.push(key)
}
</script>

<style lang="scss">
.app {
  width: 100%;
}
</style>
