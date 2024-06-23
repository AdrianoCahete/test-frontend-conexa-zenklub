<template>
  <div v-if="error">
    {{ error.message }}
    <!-- TODO: Improve error message -->
  </div>
  <div v-else-if="!data">Loading...</div>
  <main v-else>
    <section class="user-profile">
      <div class="user-primary-info">
        <div class="user-avatar">
          <picture v-if="data.photo">
            <source media="(min-width:650px)" :srcset="data.photo" />
            <img :src="data.photo" />
          </picture>
          <div v-else>
            <FemaleNoAvatar class="user-no-avatar" filled />
          </div>
        </div>
        <div class="user-info">
          <UserCard
            :name="data.name"
            :specialization="data.specialization"
            :place="data.place"
          />
          <div class="service-reviews">
            <Rating :stars="data.stars" :reviews="data.reviews" />
          </div>
          <div class="service-info">
            <ServicePrice
              :currency="data.currency"
              :price="data.price"
              :minutes="data.price_minutes"
            />
          </div>
        </div>
      </div>

      <div class="user-description">{{ data.description }}</div>
    </section>

    <section class="schedule">
      Agenda
      <div v-for="session in data.sessions" v-bind:key="data.sessions?.id">
        {{ session }}
      </div>
    </section>
  </main>

  <details v-if="data">
    <pre>{{ data }}</pre>
  </details>
</template>

<script setup lang="ts">
import FemaleNoAvatar from "~/assets/female_avatar.svg";

const route = useRoute();

interface Professional {
  id: number;
  name: string;
  photo: string | null;
  specialization: string;
  place: string;
  stars: string;
  reviews: string;
  description: string;
  price: string;
  price_minutes: string;
  currency: string;
  sessions: Array<{
    id: number;
    date: string;
    time: string;
    is_available: boolean;
    scheduled_to: string | null;
  }>;
}

const id = route.params.id || "1";
const { data, error } = await useFetch<Professional>(
  `http://localhost:3001/professional/${id}`
);

// const { data: count } = await useFetch("http://localhost:3001/professional/");
</script>

<style lang="scss">
.user-profile {
  margin-right: 1rem;
}

.user-primary-info,
.user-secondary-info,
.service-info,
.service-reviews {
  display: flex;
}

.service-info,
.service-reviews {
  align-items: center;
}

.user-primary-info {
  margin-bottom: 1rem;
}

.user-info {
  margin-left: 1rem;
  margin-bottom: 2rem;
}

.user-description {
  font-size: 0.9rem;
}

.user-avatar {
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #eee;
    overflow: hidden;
  }

  .user-no-avatar {
    width: 150px;
    height: 150px;
    background-color: #eee;
    border-radius: 50%;
    filter: grayscale(1);
  }
}
</style>
