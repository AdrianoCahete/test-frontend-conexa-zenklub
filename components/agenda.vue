<template>
  <div class="agenda">
    <div class="agenda-header">
      <h1>Schedule your session!</h1>
      <h2>Timezone: {{ place }} (+1)</h2>
    </div>
    <div class="agenda-dates">
      <div class="agenda-switch">
        <Arrow class="is-rounded is-disabled" />
      </div>
      <div v-for="s in sessions.slice(0, 4)" class="agenda-date">
        <div class="agenda-weekday">
          {{ $dayjs(s.date).format("ddd") }}
        </div>
        <div class="agenda-month-day">
          {{ $dayjs(s.date).format("MMM DD") }}
        </div>
      </div>
      <div class="agenda-switch">
        <Arrow class="agenda-switch-right is-rounded" />
      </div>
    </div>
    <div class="agenda-hours">
      <template v-for="(session, index) in sessions.slice(0, 4)" :key="index">
        <div
          v-for="available_time in session.available_times"
          :key="available_time"
          :class="[
            'agenda-hour-item',
            available_time !== '-' ? '' : 'agenda-hour-item-empty',
          ]"
        >
          {{ available_time }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Arrow from "~/assets/chevron.svg";

defineProps({
  sessions: {
    type: Array as PropType<
      {
        id: number;
        date: string;
        available_times: Array<string>;
        time: string;
        is_available: boolean;
        scheduled_to: string;
      }[]
    >,
    required: true,
    default: [],
  },
  place: {
    type: String,
    required: true,
    default: "",
  },
});
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

.agenda-date,
.agenda-switch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 5px;
}

.agenda-switch {
  & > svg {
    height: 26px;
    width: 26px;
  }

  & .agenda-switch-right {
    transform: rotate(180deg);
  }

  .is-rounded,
  .is-disabled {
    background: var(--grayLighterColor);
    padding: 5px;
    border-radius: 50%;
  }

  .is-disabled {
    background: var(--grayLighterColor);
    cursor: not-allowed;
    color: #fff;
  }
}

.agenda-weekday {
  font-size: 0.8rem;
}

.agenda-weekday,
.agenda-month-day {
  text-transform: uppercase;
}

.agenda-hours {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
  margin: 0 5px;
  justify-content: center;
}

.agenda-hour-item {
  display: flex;
  justify-content: center;
  min-width: 25%;
  width: 75px;
  font-weight: bold;
  background-color: var(--grayColor);
  color: var(--grayDarkenColor);
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 10px 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--grayLightColor);
    transition: background-color 0.3s ease-in-out;
  }

  &.agenda-hour-item-empty {
    background-color: #fff;
    cursor: none;
  }
}
</style>
