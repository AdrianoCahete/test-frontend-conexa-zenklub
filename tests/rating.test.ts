// tests/Rating.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Rating from "../components/rating.vue";

describe("Render Rating Component", () => {
  it("renders the correct number of stars", () => {
    const wrapper = mount(Rating, {
      props: {
        stars: "1",
        reviews: "10",
      },
    });

    const starElements = wrapper.findAll(".rating-value");
    expect(starElements.length).toBe(1);
  });

  it("renders the correct number of reviews", () => {
    const wrapper = mount(Rating, {
      props: {
        stars: "1",
        reviews: "10",
      },
    });

    const reviewElement = wrapper.find(".rating-reviews");
    expect(reviewElement.text()).toContain("(10 reviews)");
  });
});
