<template>
  <div class="agenda">
    <div class="agenda-header">
      <h1>Schedule your session!</h1>
      <h2>Timezone: {{ place }} (+1)</h2>
    </div>
    <div class="agenda-dates">
      <
      <div v-for="s in sessions.slice(0, 4)" class="agenda-date">
        <div class="agenda-weekday">
          {{ $dayjs(s.date).format("ddd") }}
        </div>
        <div class="agenda-month-day">
          {{ $dayjs(s.date).format("MMM DD") }}
        </div>
      </div>
      >
    </div>
    <div class="agenda-hours">
      <div v-for="(session, index) in sessions.slice(0, 4)" :key="index">
        <div
          v-for="available_time in session.available_times"
          :key="available_time"
        >
          <div>{{ available_time || "-" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  sessions: {
    type: Array as PropType<{ date: string; available_times: Array<string> }[]>,
    required: true,
    default: [],
  },
  place: {
    type: String,
    required: true,
    default: "",
  },
});

// TODO: Group date
</script>

<style lang="scss" scoped>
.agenda {
  width: 400px;
  max-width: 600px;
}

.agenda-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  color: #fff;
  background-color: var(--primaryColor);
}

.agenda-dates {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--textSecondaryColor);
}

.agenda-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  padding: 5px;
}

.agenda-weekday {
  font-size: 0.8rem;
}

.agenda-weekday,
.agenda-month-day {
  text-transform: uppercase;
}
</style>
