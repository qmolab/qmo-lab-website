<template>
  <v-list>
    <ShareNetwork
      network="facebook"
      :url="url"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags"
    >
      <v-list-item link>
        <v-list-item-title>Facebook</v-list-item-title>
        <v-list-item-icon>
          <v-icon right color="#3b5998">$facebook</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="url"
      :title="title"
      :hashtags="hashtags"
      twitter-user="qmo_lab"
    >
      <v-list-item link>
        <v-list-item-title>Twitter</v-list-item-title>
        <v-list-item-icon>
          <v-icon right color="#00acee">$twitter</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </ShareNetwork>
    <ShareNetwork
      network="email"
      :url="url"
      :title="title"
      :description="description"
    >
      <v-list-item link>
        <v-list-item-title>Email</v-list-item-title>
        <v-list-item-icon>
          <v-icon right color="secondary">$mdiEmailSend</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </ShareNetwork>
  </v-list>
</template>

<script>
  export default {
    props: {
      url: { type: String, required: true },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      quote: { type: String, default: '' },
      hashtags: { type: String, default: 'qmolabucr' },
    },
    computed: {
      classes() {
        return 'v-list-item v-list-item--flat v-list-item--text theme--dark v-size--default';
      },
    },
  };
</script>
