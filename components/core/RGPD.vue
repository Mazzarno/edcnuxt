<template>
  <v-bottom-sheet
    class="primary justify-center align-center d-flex"
    v-model="$store.state.agreedToPrivacy"
    persistent
    dark
  >
    <v-sheet
      class="justify-center align-center d-flex"
      height="180px"
      color="primary"
      dark
    >
      <v-row class="justify-center align-center d-flex">
        <v-col cols="12" sm="12" md="12">
          <p class="text-body-1 text-xs-caption">
            En poursuivant votre navigation sur ce site, vous acceptez
            l'utilisation de cookies 🍪
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-btn
            class="mb-4 ml-5"
            dark
            color="success"
            @click="agreePrivacyPolicy"
            >J'accepte</v-btn
          >
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  methods: {
    agreePrivacyPolicy() {
      this.$store.commit("agreePrivacyPolicy");
    },
  },
};
</script>

<style>
</style>

