<script setup lang="ts">
import Chessboard from './components/Chessboard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <Chessboard />
    <Sidebar />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
  gap: 50px;
}

@media only screen and (min-width: 600px) {
  .layout {
    flex-direction: row;
    justify-content: space-around;
    gap: unset;
    margin: 50px;
  }
}
</style>
