<template>
  <div v-if="error">{{ error.message }}</div>
  <div v-else-if="!data">Loading...</div>
  <main v-else>
    <section class="user-profile">
      <div class="user-avatar">
        <picture v-if="data.photo">
          <source media="(min-width:650px)" :srcset="data.photo" />
          <img :src="data.photo" />
        </picture>
        <div v-else>Sem foto</div>
      </div>
      <div>
        <h1>{{ data.name }}</h1>
        <div>
          <h2>{{ data.specialization }}</h2>
          <h3>Place</h3>
        </div>
        <div>
          <div>Stars</div>
          <div>Reviews</div>
        </div>
        <div>
          <div>Price</div>
          <div>Price minutes</div>
        </div>
        <div>Description</div>
      </div>
    </section>
    <section class="schedule">
      Agenda
      <div v-for="session in data.sessions" v-bind:key="data.sessions.id">
        {{ session }}
      </div>
    </section>
    <hr />
  </main>
  <pre>{{ route.params.id }}</pre>
  id: {{ id || "null" }}
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
const route = useRoute();

interface Professional {
  id: number;
  name: string;
  photo: string;
  specialization: string;
  sessions: Array;
}

const id = route.params.id || "1";
const { data, error } = await useFetch<Professional>(
  `http://localhost:3001/professional/${id}`
);

// const { data: count } = await useFetch("http://localhost:3001/professional/");
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}

.user-avatar {
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #eee;
    overflow: hidden;
  }
}
</style>
