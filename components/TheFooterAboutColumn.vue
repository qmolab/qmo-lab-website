<template>
  <v-row class="footerAbout">
    <v-col cols="12" sm="9">
      <v-row>
        <v-col>
          <v-img
            :src="require('~/assets/images/logo_transparent.svg')"
            alt="QMO Lab Logo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="body-2">
            QMO Lab<br />
            Department of Physics and Astronomy<br />
            Material Science and Engineering Building<br />
            University of California, Riverside
          </p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="3" class="socialIcons">
      <v-btn fab small color="secondary"><v-icon>mdi-twitter</v-icon></v-btn>
      <v-btn fab small color="#c4302b"><v-icon>mdi-youtube</v-icon></v-btn>
      <v-btn fab small><v-icon>mdi-github</v-icon></v-btn>
    </v-col>
  </v-row>
</template>

<script></script>

<style scoped lang="scss">
  .footerAbout {
    max-width: 432px;
    margin: auto;
  }
  .socialIcons {
    text-align: center;
    margin-top: 16px;
    .v-btn {
      margin: 8px;
    }
  }
</style>
