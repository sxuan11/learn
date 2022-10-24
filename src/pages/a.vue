<script setup lang="ts">
import { useMainStore } from '../store/'
const store = useMainStore()

function addStoreData() {
  store.incrementCounter(1)
}
</script>

<template>
  <p>a page</p>
  <el-button type="primary" @click="addStoreData">add data</el-button>
  <div>store data {{ store.count }}</div>
</template>

