<template>
  <NuxtPage />
</template>

<script setup lang="ts"></script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}

h1,
h2,
h3 {
  margin: 0;
}
</style>
