<script setup lang="ts"></script>

<template>
  <div class="sidebar"></div>
</template>

<style lang="scss">
.sidebar {
  width: 100%;
  aspect-ratio: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 9px;
}

@media only screen and (min-width: 600px) {
  .sidebar {
    height: calc(100% - 100px);
    width: unset;
    aspect-ratio: 0.5;
  }
}
</style>
