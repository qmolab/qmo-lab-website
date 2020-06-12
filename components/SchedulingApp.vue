<template>
  <v-row>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="light-blue darken-3">
          <v-btn fab text small @click="prev">
            <v-icon small>{{ mdiChevronLeft }}</v-icon>
          </v-btn>
          <v-btn outlined @click="focus = today">Today</v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>{{ mdiChevronRight }}</v-icon>
          </v-btn>
          <v-toolbar-title
            v-if="view === 'week' || view === '4day'"
            class="ml-4"
          >
            {{ title }}
          </v-toolbar-title>
          <v-toolbar-title v-else class="ml-4">
            <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn class="px-0 minW-0" text x-large v-on="on">
                  <span>{{ startMonth }}</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(e, i) in months"
                  :key="i"
                  :disabled="e === startMonth"
                  @click="setMonth(i + 1)"
                >
                  <v-list-item-title>{{ e }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn
              v-if="view === 'day'"
              class="px-0 minW-0"
              text
              x-large
              @click="view = 'month'"
            >
              <span>{{ startDay }}</span>
            </v-btn>
            <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn dense text x-large class="px-0 minW-0" v-on="on">
                  <span>{{ startYear }}</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(e, i) in years"
                  :key="i"
                  :disabled="e === startYear"
                  @click="setYear(e)"
                >
                  <v-list-item-title>{{ e }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-title>
          <v-spacer />
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ views[view] }}</span>
                <v-icon right>{{ mdiMenuDown }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(e, i) in views" :key="i" @click="view = i">
                <v-list-item-title>{{ e }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet style="height: 75vh;">
        <v-calendar
          ref="calendar"
          v-model="focus"
          style="padding-right: 1px;"
          :events="events"
          :event-color="getEventColor"
          :now="today"
          :type="view"
          event-ripple
          color="light-blue"
          @click:event="showEventDetails"
          @click:more="viewDay"
          @click:date="viewDay"
          @click:day="calendarClickDay"
          @mousedown:time="dragBegin"
          @mouseup:time="dragEnd"
          @change="updateRange($event)"
        />
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
        >
          <v-card v-if="selectedEvent" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color">
              <v-btn icon @click="showEditDialog(selectedEvent)">
                <v-icon>{{ mdiPencil }}</v-icon>
              </v-btn>
              <v-toolbar-title v-text="selectedEvent.name" />
            </v-toolbar>
            <v-card-text>
              <span>Start: </span><span v-text="selectedEvent.start" /><br />
              <span>End: </span><span v-text="selectedEvent.end" /><br />
              <span>Details: </span><span v-text="selectedEvent.details" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="selectedOpen = false">
                <span>Cancel</span><v-icon right>{{ mdiCancel }}</v-icon>
              </v-btn>
              <v-btn color="error" text @click="showDeleteDialog">
                <span>Delete</span><v-icon right>{{ mdiTrashCan }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    <v-dialog v-model="deleteDialog" persistent max-width="600">
      <v-card>
        <v-toolbar color="error">
          <v-icon class="mr-1">{{ mdiTrashCan }}</v-icon>
          <v-toolbar-title>
            Are you sure you want to delete this event?
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text v-if="selectedEvent" class="pt-4">
          <span>Name: </span><span v-text="selectedEvent.name" /><br />
          <span>Start: </span><span v-text="selectedEvent.start" /><br />
          <span>End: </span><span v-text="selectedEvent.end" /><br />
          <span>Details: </span><span v-text="selectedEvent.details" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="deleteDialog = false">
            <span>Cancel</span><v-icon right>{{ mdiCancel }}</v-icon>
          </v-btn>
          <v-btn color="error" text @click="deleteEvent">
            <span>Delete</span><v-icon right>{{ mdiTrashCan }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600">
      <v-card>
        <v-toolbar color="secondary" class="mb-8">
          <v-icon>{{ mdiPencil }}</v-icon>
          <v-toolbar-title class="pl-2">
            {{ selectedEvent ? 'Edit' : 'New' }} Event
          </v-toolbar-title>
        </v-toolbar>
        <v-form ref="adminForm" v-model="editDialogValid" class="pl-8 pr-12">
          <DatePicker v-model="selectedEvent.startDate" label="Start Date" />
          <TimePicker v-model="selectedEvent.startTime" label="Start Time" />
          <DatePicker v-model="selectedEvent.endDate" label="End Date" />
          <TimePicker v-model="selectedEvent.endTime" label="End Time" />
          <TextField
            v-model="selectedEvent.name"
            :prepend-icon="mdiFormTextbox"
            label="Title"
          />
          <TextArea
            v-model="selectedEvent.details"
            :prepend-icon="mdiFormTextbox"
            label="Details"
          />
        </v-form>
        <v-card-text v-if="editEventDialogError">
          {{ editEventDialogError }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="closeEditDialog">
            <span>Cancel</span><v-icon right>{{ mdiCancel }}</v-icon>
          </v-btn>
          <v-btn
            v-if="tempEvents.length === 0"
            color="error"
            text
            @click="showDeleteDialog"
          >
            <span>Delete</span><v-icon right>{{ mdiTrashCan }}</v-icon>
          </v-btn>
          <v-btn color="success" text @click="editDialogSave">
            <span>Save</span><v-icon right>{{ mdiCheckOutline }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  // deal with start and end
  import {
    mdiCancel,
    mdiClock,
    mdiCheckOutline,
    mdiChevronLeft,
    mdiChevronRight,
    mdiFormTextarea,
    mdiFormTextbox,
    mdiMenuDown,
    mdiPencil,
    mdiTrashCan,
  } from '@mdi/js';
  import { CalendarEvent, formatDate, nth } from '@/assets/js/helperScripts.js';
  import TextField from '@/components/lib/TextField.vue';
  import TextArea from '@/components/lib/TextArea.vue';
  import DatePicker from '@/components/lib/DatePicker.vue';
  import TimePicker from '@/components/lib/TimePicker.vue';
  const years = [];
  for (let i = 2020; i < 2030; ++i) years.push(i);
  export default {
    components: {
      TextField,
      TextArea,
      DatePicker,
      TimePicker,
    },
    props: {
      eventList: { type: Array, default: () => [] },
      today: { type: String, default: formatDate(new Date(), true) },
      maxOverlaps: { type: Number, default: 2 },
    },
    data: () => ({
      mdiCancel,
      mdiClock,
      mdiCheckOutline,
      mdiChevronLeft,
      mdiChevronRight,
      mdiFormTextarea,
      mdiFormTextbox,
      mdiMenuDown,
      mdiPencil,
      mdiTrashCan,
      start: null,
      end: null,
      focus: '',
      selectedEvent: new CalendarEvent(),
      selectedElement: null,
      view: 'month',
      selectedOpen: false,
      deleteDialog: false,
      editDialog: false,
      editDialogValid: false,
      editEventDialogError: '',
      tempEvents: [],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      years,
      views: {
        day: 'Day',
        week: 'Week',
        month: 'Month',
      },
    }),
    computed: {
      events() {
        return this.eventList.concat(this.tempEvents);
      },
      startMonth() {
        return this.start ? this.monthFormatter(this.start) : 'Month';
      },
      startDay() {
        return this.start ? this.start.day + nth(this.start.day) : 'Year';
      },
      startYear() {
        return this.start ? this.start.year : '';
      },
      title() {
        const { start, end, startMonth, startDay, startYear } = this;
        if (!start || !end) return '';
        const firstYear = startYear === end.year ? '' : startYear;
        const endDay = end.day + nth(end.day);
        return `${startMonth} ${startDay} ${firstYear} - ${endDay} ${end.year}`;
      },
      monthFormatter() {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC',
          month: 'long',
        });
      },
    },
    watch: {
      selectedOpen() {
        if (!this.selectedOpen) this.eventDetailsShown = false;
      },
      eventList() {
        this.$refs.calendar.checkChange();
      },
    },
    mounted() {
      this.$refs.calendar.checkChange();
    },
    methods: {
      viewDay({ date }) {
        this.focus = date;
        this.view = 'day';
      },
      getEventColor(event) {
        return event.color;
      },
      setYear(year) {
        this.focus =
          year.toString() + (this.focus ? this.focus : this.today).slice(4);
      },
      setMonth(monthIndex) {
        const prevDate = this.focus ? this.focus : this.today;
        this.focus =
          prevDate.slice(0, 5) +
          monthIndex.toString().padStart(2, '0') +
          prevDate.slice(7);
      },
      prev() {
        this.$refs.calendar.prev();
      },
      next() {
        this.$refs.calendar.next();
      },
      dateFromDt({ date, time }) {
        return new Date(date + ' ' + time);
      },
      dragBegin(e) {
        this.dragBeginDate = this.dateFromDt(e);
      },
      dragEnd(e) {
        if (!this.dragBeginDate || !e) return;
        setTimeout(() => {
          if (this.selectedOpen) return;
          const final = this.dateFromDt(e);
          final.setHours(final.getHours() - 7);
          this.dragBeginDate.setHours(this.dragBeginDate.getHours() - 7);
          if (final > this.dragBeginDate)
            this.showNewDialog(this.dragBeginDate, final);
          else this.showNewDialog(final, this.dragBeginDate);
          this.dragBeginDate = undefined;
        }, 50);
      },
      updateRange(e) {
        this.start = e.start;
        this.end = e.end;
        this.$emit('updateRange', e);
      },
      calendarClickDay(e) {
        const dt = this.dateFromDt(e);
        this.showNewDialog(dt, dt);
      },
      showEventDetails({ nativeEvent, event }) {
        this.eventDetailsShown = true;
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          setTimeout(() => (this.selectedOpen = true), 10);
        };
        if (this.selectedOpen) {
          this.selectedOpen = false;
          setTimeout(open, 10);
        } else open();
        nativeEvent.stopPropagation();
      },
      showNewDialog(start, end) {
        if (this.eventDetailsShown || this.editDialog || this.deleteDialog)
          return;
        const event = new CalendarEvent('', start, end);
        this.tempEvents.push(event);
        this.showEditDialog(event);
      },
      showEditDialog(event) {
        this.selectedOpen = false;
        this.selectedEvent = event;
        this.editDialog = true;
      },
      showDeleteDialog() {
        this.selectedOpen = false;
        this.editDialog = false;
        this.deleteDialog = true;
      },
      closeEditDialog(reset = true) {
        this.editDialog = false;
        this.editEventDialogError = '';
        if (this.tempEvents.length > 0) {
          setTimeout(() => (this.tempEvents = []), 200);
        } else if (reset) this.selectedEvent.reset();
      },
      followsTheRules(e) {
        let overlaps = -1;
        for (let i = 0; i < this.events.length; i++) {
          if (this.events[i].overlaps(e)) overlaps++;
        }
        if (overlaps > 0) {
          this.editEventDialogError = `Overlaps with more than ${
            this.maxOverlaps
          } event${this.maxOverlaps > 1 ? 's' : ''}`;
          return false;
        }
        if (this.selectedEvent.startMinsAM > this.selectedEvent.endMinsAM) {
          this.editEventDialogError = `End time must be greater than start time`;
          return false;
        }
        return true;
      },
      editDialogSave() {
        if (!this.followsTheRules(this.selectedEvent)) return;
        this.$emit('save', this.selectedEvent);
        this.editDialog = false;
        this.closeEditDialog(false);
        // Show snackbar for event saved
      },
      deleteEvent() {
        this.$emit('delete', this.selectedEvent);
        this.deleteDialog = false;
        // Show snackbar for event deleted
      },
    },
  };
</script>
