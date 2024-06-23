<template>
  <div class="rating">
    <div v-for="i in stars" :key="i">
      <StarRating :title="i" />
    </div>
    <div>({{ reviews }} reviews)</div>
  </div>
</template>

<script lang="ts" setup>
import StarRating from "~/assets/star.svg";

defineProps({
  stars: {
    type: String,
    required: true,
    default: 0,
  },
  reviews: {
    type: String,
    required: false,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
}
</style>
