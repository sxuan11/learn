<template>
  <div class="app">
    <div class="c-header">
      <el-menu
        :default-active="activeIndex"
        class="c-header-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/base">首页</el-menu-item>
        <el-sub-menu index="rtc">
          <template #title>WebRTC</template>
          <el-menu-item index="/rtc/base">基础示例</el-menu-item>
          <el-menu-item index="2-2">屏幕录制</el-menu-item>
          <el-menu-item index="2-3">多对多连麦</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="three">
          <template #title>Three.js</template>
          <el-menu-item index="/three/base">基础示例</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <el-switch
        :model-value="isDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        @change="toggleDark()"
      />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import router from './router'
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue';
const activeIndex = ref('base');
const handleSelect = (key: string) => {
  router.push(key)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss">
.app {
  width: 100%;
}
.c-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .c-header-menu {
    flex-grow: 1;
  }
}
</style>
