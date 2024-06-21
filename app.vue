<template>
  <main>
    <section class="user-profile">
      <div class="user-avatar">
        <picture v-if="profile.photo" :src="profile.photo">
          <source media="(min-width:650px)" :srcset="profile.photo" />
          <img :src="profile.photo" style="width: auto" />
        </picture>
        <div v-else>Sem foto</div>
      </div>
      <div>
        <h1>{{ profile.name }}</h1>
        <div>
          <h2>Specialization</h2>
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
    <section class="schedule">Agenda</section>
    <hr />
    <pre>{{ profile }}</pre>
  </main>
</template>

<script setup lang="ts">
// interface Profile {
//   name: string;
// }

const { id } = useRoute().params || 1;
const { data: profile } = await useFetch(
  `http://localhost:3001/professional/${id}`
);
</script>

<style>
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
</style>
