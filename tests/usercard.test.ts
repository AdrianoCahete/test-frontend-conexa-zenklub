// tests/UserProfile.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import UserProfile from "../components/user-card.vue";

describe("User info", () => {
  it("renders the correct name, specialization and place", () => {
    const wrapper = mount(UserProfile, {
      props: {
        name: "John Doe",
        specialization: "Optometrist",
        place: "Rio de Janeiro",
      },
    });

    const nameElement = wrapper.find("h1");
    const specializationElement = wrapper.find("h2");
    const placeElement = wrapper.find("h3");

    expect(nameElement.text()).toBe("John Doe");
    expect(specializationElement.text()).toBe("Optometrist");
    expect(placeElement.text()).toBe("Rio de Janeiro");
  });

  it("applies the correct styles", () => {
    const wrapper = mount(UserProfile, {
      props: {
        name: "Adriano",
        specialization: "Ophthalmologists",
        place: "Fortaleza",
      },
    });

    const nameElement = wrapper.find("h1");
    const specializationElement = wrapper.find("h2");
    const placeElement = wrapper.find("h3");

    expect(nameElement.classes()).toContain("h1");
    expect(specializationElement.classes()).toContain("h2");
    expect(placeElement.classes()).toContain("h3");
  });
});
