<template>
  <div class="rating">
    <div class="rating-scale">
      <StarRating class="rating-value" v-for="i in stars" :key="i" :title="i" />
    </div>
    <div class="rating-reviews">({{ reviews }} reviews)</div>
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
.rating,
.rating-scale {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rating-scale {
  color: var(--starColor);
}

.rating-reviews {
  margin-left: 0.3rem;
  font-size: 0.8rem;
}
</style>
