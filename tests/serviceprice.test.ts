// tests/ServicePrice.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ServicePrice from "../components/service-price.vue";

describe("ServicePrice.vue", () => {
  it("renders the correct currency symbol for BRL", () => {
    const wrapper = mount(ServicePrice, {
      props: {
        currency: "BRL",
        price: "100",
        minutes: "60",
      },
    });

    const currencyElement = wrapper.find(".service-price > div:first-child");
    expect(currencyElement.text()).toBe("R$");
  });

  it("renders the correct price and minutes", () => {
    const wrapper = mount(ServicePrice, {
      props: {
        currency: "USD",
        price: "50",
        minutes: "30",
      },
    });

    const priceElement = wrapper.find(".service-value");
    const minutesElement = wrapper.find(".service-minutes");

    expect(priceElement.text()).toBe("50");
    expect(minutesElement.text()).toBe("30 minutes");
  });

  it("renders default currency symbol for unsupported currency", () => {
    const wrapper = mount(ServicePrice, {
      props: {
        currency: "EUR",
        price: "70",
        minutes: "45",
      },
    });

    const currencyElement = wrapper.find(".service-price > div:first-child");
    expect(currencyElement.text()).toBe("$");
  });
});
