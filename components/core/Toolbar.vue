<template>
  <nav>
    <v-app-bar app class="primary app-bar" dark fixed prominent fluid>
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            :src="require('@/assets/img/logo-nav.png')"
            :lazy-src="require('@/assets/img/logo-nav.png')"
            height="120"
            width="200"
            class="ml-4"
            size="300px"
            contain
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-title>
        <h3 class="titleHeader heading-4 hidden-sm-and-down">
          Faciliter les projets collectifs en copropriété
        </h3>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn class="white--text mr-2" icon @click="drawer = !drawer">
          <v-icon size="30">mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer right class="primary" app v-model="drawer" temporary>
      <v-container fluid fill-height class="ml-1 justify-center">
        <v-img
          :src="require('@/assets/img/logo-nav.png')"
          :lazy-src="require('@/assets/img/logo-nav.png')"
          height="80"
          width="200"
          size="300px"
          contain
          to="/"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/">
              <v-icon left size="20">mdi-home</v-icon>ACCUEIL
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/activites">
              <v-icon left size="20">mdi-presentation</v-icon>NOS ACTIVITÉS
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/vision">
              <v-icon left size="20">mdi-magnify</v-icon>NOTRE VISION
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/qui-sommes-nous">
              <v-icon left size="20">mdi-bike</v-icon>QUI SOMMES NOUS ?
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/blog">
              <v-icon left size="20">mdi-border-color</v-icon>LE BLOG
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/videotheque">
              <v-icon left size="20">mdi-video</v-icon>LA VIDEOTHÈQUE
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="d-flex justify-start align-content-center">
            <v-btn dark text to="/contact">
              <v-icon left size="20">mdi-email-outline</v-icon>NOUS CONTACTER
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="ml-3">
          <v-col cols="10">
            <div class="d-flex justify-center align-content-center">
              <a
                href="https://www.facebook.com/manon.leroy.7355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">mdi-linkedin</v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">mdi-youtube</v-icon>
                </v-btn>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {},
};
</script>
<style></style>
