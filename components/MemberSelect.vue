<template>
  <v-select
    :value="value"
    :items="items"
    :name="name"
    :label="label"
    :required="required"
    outlined
    :clearable="clearable"
    :multiple="multiple"
    :rules="rules"
    prepend-icon="$mdiTag"
    :menu-props="{ auto: true, maxHeight: 2000 }"
    @input="$emit('update', $event)"
  >
    <template v-slot:item="{ item, on, attrs }">
      <v-list-item v-on="on">
        <v-checkbox :input-value="attrs.inputValue" />
        <!--<v-avatar size="45" class="align-self-center mr-1">
          <QImg
            width="45"
            height="45"
            cat="members"
            :name="item.toLowerCase()"
          />
        </v-avatar>-->
        <v-list-item-title class="text-capitalize">{{
          item
        }}</v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:selection="{ item }">
      <v-chip>
        <!--v-avatar size="25" class="align-self-center mr-1">
          <QImg
            width="25"
            height="25"
            cat="members"
            :name="item.toLowerCase()"
          />
        </v-avatar>-->
        <span class="text-capitalize">{{ item }}</span>
      </v-chip>
    </template>
  </v-select>
</template>
<script>
  // import QImg from '@/components/lib/QImg.vue';
  export default {
    // components: { QImg },
    model: {
      prop: 'value',
      event: 'update',
    },
    props: {
      value: { type: [String, Array, Object], required: true },
      items: { type: Array, required: true },
      name: { type: String, default: undefined },
      label: { type: String, default: 'Tag a lab member' },
      required: { type: Boolean, default: false },
      clearable: { type: Boolean, default: true },
      multiple: { type: Boolean, default: true },
      prependIcon: { type: String, default: undefined },
    },
    computed: {
      rules() {
        return this.required
          ? [(v) => !!v || 'This item is required']
          : undefined;
      },
    },
  };
</script>
