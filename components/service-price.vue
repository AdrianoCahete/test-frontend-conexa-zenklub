<template>
  <div class="service-price">
    <div>{{ getCurrency(currency) }}</div>
    <div>
      <span class="service-value">{{ price }}</span> /
      <span class="service-minutes">{{ minutes }} minutes</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  currency: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: String,
    required: true,
    default: "0",
  },
  minutes: {
    type: String,
    required: false,
    default: "0",
  },
});

function getCurrency(code_currency: string) {
  // TODO: Move to https://www.npmjs.com/package/country-to-currency

  switch (code_currency.toLowerCase()) {
    case "brl":
      return "R$";
    default:
      return "$";
  }
}
</script>

<style lang="scss" scoped>
.service-price {
  display: flex;
}
</style>
