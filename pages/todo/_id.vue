<template>
  <v-container style="max-width: 500px;">
    <v-text-field v-model="task" label="Add Task" solo @keydown.enter="create">
      <v-fade-transition v-slot:append>
        <v-icon v-if="task" @click="create">{{ mdiPlusCircle }}</v-icon>
      </v-fade-transition>
    </v-text-field>

    <h2 class="display-1 primary--text pl-4">
      <span>Tasks: </span>
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4" />

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical />

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer />

      <v-progress-circular :value="progress" class="mr-2" />
    </v-row>

    <v-divider class="mb-4" />

    <v-card v-if="tasks.length > 0">
      <v-list>
        <v-slide-y-transition class="py-0" group>
          <template v-for="(task, i) in tasks">
            <v-divider v-if="i !== 0" :key="`${i}-divider`" />

            <v-list-item :key="`${i}-${task.text}`">
              <v-list-item-action>
                <v-checkbox
                  v-slot:label
                  v-model="task.done"
                  :color="(task.done && 'grey') || 'primary'"
                >
                  <div
                    :class="(task.done && 'grey--text') || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  />
                </v-checkbox>
              </v-list-item-action>

              <v-spacer />

              <v-scroll-x-transition>
                <v-icon v-if="task.done" color="success">
                  {{ mdiCheckOutline }}
                </v-icon>
              </v-scroll-x-transition>
            </v-list-item>
          </template>
        </v-slide-y-transition>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
  import { mdiPlusCircle, mdiCheckOutline } from '@mdi/js';
  export default {
    asyncData({ route }) {
      if (route.params.id === 'design') {
        return {
          tasks: [
            {
              done: false,
              text: 'Choose Fonts',
            },
            {
              done: false,
              text: 'Light / Dark',
            },
            {
              done: false,
              text: 'Choose Colors',
            },
            {
              done: false,
              text: 'Button Icons?',
            },
            {
              done: false,
              text: 'Individual Member page layout',
            },
            {
              done: false,
              text: 'Research / Publication page layout',
            },
            {
              done: false,
              text: 'Individual Member page layout',
            },
            {
              done: false,
              text: 'Hero Carousel',
            },
          ],
        };
      } else if (route.params.id === 'develop') {
        return {
          tasks: [
            {
              done: false,
              text: 'Fix Research pages',
            },
            {
              done: false,
              text: 'Presentations?',
            },
            {
              done: false,
              text: 'Scheduling/Lab Calendar?',
            },
            {
              done: false,
              text: 'Transitions in Gallery Page',
            },
            {
              done: false,
              text: 'Transitions in Research/Publication Pages',
            },
          ],
        };
      } else if (route.params.id === 'content') {
        return {
          tasks: [
            {
              done: false,
              text: 'Edit Research pages',
            },
            {
              done: false,
              text: 'Edit Lab Software Page',
            },
            {
              done: false,
              text: 'Safety Pages',
            },
            {
              done: false,
              text: 'Fill out Lab Data Page',
            },
            {
              done: false,
              text: 'Edit/Fill-out Contact Pages',
            },
          ],
        };
      }
    },
    data: () => ({
      task: null,
      mdiPlusCircle,
      mdiCheckOutline,
    }),

    computed: {
      completedTasks() {
        return this.tasks.filter((task) => task.done).length;
      },
      progress() {
        return (this.completedTasks / this.tasks.length) * 100;
      },
      remainingTasks() {
        return this.tasks.length - this.completedTasks;
      },
    },

    methods: {
      create() {
        this.tasks.push({
          done: false,
          text: this.task,
        });

        this.task = null;
      },
    },
  };
</script>
