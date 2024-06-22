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
          <div v-else>Sem foto</div>
        </div>
        <div class="user-info">
          <h1>{{ data.name }}</h1>
          <div class="user-secondary-info">
            <h2>{{ data.specialization }}</h2>
            <span class="separator">|</span>
            <h3>{{ data.place }}</h3>
          </div>
          <div class="service-reviews">
            <Rating :stars="data.stars" />
            <div>({{ data.reviews }})</div>
          </div>
          <div class="service-price">
            <div>{{ getCurrency(data.currency) }}</div>
            <div>{{ data.price }}</div>
            <div>{{ data.price_minutes }}</div>
          </div>
        </div>
      </div>

      <div>{{ data.description }}</div>
    </section>

    <section class="schedule">
      Agenda
      <div v-for="session in data.sessions" v-bind:key="data.sessions.id">
        {{ session }}
      </div>
    </section>
  </main>

  <details>
    <pre>{{ data }}</pre>
  </details>
</template>

<script setup lang="ts">
const route = useRoute();

interface Professional {
  id: number;
  name: string;
  photo: string;
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

function getCurrency(code_currency: string) {
  switch (
    code_currency // TODO: Move to https://www.npmjs.com/package/country-to-currency
  ) {
    case "BRL":
      return "R$";
    default:
      return "$";
  }
}

// const { data: count } = await useFetch("http://localhost:3001/professional/");
</script>

<style lang="scss">
main,
.user-primary-info,
.user-secondary-info,
.service-price,
.service-reviews {
  display: flex;
}

.user-secondary-info,
.service-price,
.service-reviews {
  align-items: center;
}

.user-info {
  margin-left: 1rem;
  margin-bottom: 1rem;
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
}

.separator {
  margin: 0 0.5rem;
}
</style>
