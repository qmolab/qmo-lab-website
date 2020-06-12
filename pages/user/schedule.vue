<template>
  <div>
    <h1>Room 179 Coronavirus Schedule</h1>
    <SchedulingApp
      :event-list="events"
      @updateRange="updateRange"
      @delete="deleteEvent"
      @save="saveEvent"
    />
    <v-snackbar v-model="snackbarOpen" top :timeout="6000">
      {{ snackbarText }}
      <v-btn text @click="snackbarOpen = false">
        Close
        <v-icon right>{{ mdiClose }}</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import { mdiClose } from '@mdi/js';
  import { CalendarEvent, rndNumBetween } from '@/assets/js/helperScripts.js';
  import SchedulingApp from '@/components/SchedulingApp.vue';
  function removeValFromArr(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  const years = [];
  for (let i = 2020; i < 2030; ++i) years.push(i);
  export default {
    layout: 'user',
    components: { SchedulingApp },
    data: () => ({
      events: [],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party',
      ],
      snackbarOpen: false,
      snackbarText: '',
      mdiClose,
    }),
    methods: {
      updateRange({ start, end }) {
        const events = [];

        const min = new Date(`${start.date}T00:00:00`);
        const max = new Date(`${end.date}T23:59:59`);
        const days = (max.getTime() - min.getTime()) / 86400000;
        const eventCount = rndNumBetween(days, days + 20);

        for (
          this.eventCounter = 0;
          this.eventCounter < eventCount;
          this.eventCounter++
        ) {
          const allDay = rndNumBetween(0, 3) === 0;
          const start = rndNumBetween(min.getTime(), max.getTime());
          const startDate = new Date(start - (start % 900000));
          const end = rndNumBetween(2, allDay ? 288 : 8) * 900000;

          events.push(
            new CalendarEvent(
              this.names[rndNumBetween(0, this.names.length - 1)],
              startDate,
              new Date(startDate.getTime() + end),
              'Event details',
              this.eventCounter,
              allDay
            )
          );
        }

        this.start = start;
        this.end = end;
        this.events = events;
      },
      saveEvent(e) {
        if (e.isNew || e.hasChanged()) {
          // const payload = e.payload();
          // Upload e.payload() to server
          this.snackbarText = `Successfully saved event ${e.name}`;
          this.snackbarOpen = true;
        }
        if (e.isNew) {
          e.save(++this.eventCounter);
          setTimeout(() => this.events.push(e));
        } else if (e.hasChanged()) e.save();
      },
      deleteEvent(e) {
        removeValFromArr(this.events, e);
        // Delete e from server
        this.snackbarText = `Successfully deleted event ${e.name}`;
        this.snackbarOpen = true;
      },
    },
  };
</script>
