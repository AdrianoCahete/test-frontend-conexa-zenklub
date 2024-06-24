<template>
  <div class="service-price">
    <div>{{ getCurrency(currency) }}</div>
    <div class="service-price-value">
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
  font-weight: bold;
  margin-top: 0.6rem;
  color: var(--textColor);
}

.service-minutes {
  text-transform: uppercase;
  font-size: 0.8rem;
}
</style>
