<script setup lang="ts">
const props = defineProps<{
  selectedCells: string[]
}>()
</script>

<template>
  <div class="sidebar">
    <ul class="list">
      <li v-for="(cell, index) in selectedCells" :key="index">{{ index + 1 }}. {{ cell }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 100%;
  aspect-ratio: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  overflow-y: scroll;
  max-height: 30%;
}

.list {
  list-style-type: none;
  color: hsla(0, 0%, 100%, 0.5);
  padding: 0;

  li {
    padding: 10px 20px;
  }

  li:nth-child(even) {
    background: hsla(0, 0%, 100%, 0.02);
  }
}

@media only screen and (min-width: 600px) {
  .sidebar {
    height: calc(100% - 100px);
    width: unset;
    aspect-ratio: 0.5;
    max-height: unset;
  }
}
</style>
