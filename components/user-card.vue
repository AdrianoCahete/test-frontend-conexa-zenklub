<template>
  <h1>{{ name }}</h1>
  <div class="user-secondary-info">
    <h2>{{ specialization }}</h2>
    <span class="separator">|</span>
    <h3>{{ place }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  specialization: {
    type: String,
    required: true,
    default: "",
  },
  place: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss">
.user-secondary-info {
  display: flex;
  align-items: center;
}

.separator {
  margin: 0 0.5rem;
}

h2 {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--primaryColor);
}

h3 {
  text-transform: capitalize;
  font-size: 0.8rem;
}
</style>
