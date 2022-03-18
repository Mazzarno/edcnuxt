<template>
  <v-footer v-ripple class="footer primary" dark>
    <v-card class="flex primary" flat>
      <v-row>
        <v-col
          cols="4"
          md="4"
          class="d-flex justify-center align-center justify-content-center"
        >
          <div class="hidden-sm-and-down">
            <v-row>
              <v-col class="mr-1" cols="3">
                <ul
                  class="caption d-flex justify-start text-no-wrap"
                  v-for="item in menuItems1"
                  :key="item.title"
                >
                  <router-link :to="item.link">
                    <li class="white--text">{{ item.title }}</li>
                  </router-link>
                </ul>
              </v-col>

              <v-col class="mx-1" cols="3">
                <ul
                  class="caption d-flex justify-start text-no-wrap"
                  v-for="item in menuItems2"
                  :key="item.title"
                >
                  <router-link :to="item.link">
                    <li class="white--text">{{ item.title }}</li>
                  </router-link>
                </ul>
              </v-col>

              <v-col class="ml-4" cols="3">
                <ul
                  class="caption d-flex justify-start text-no-wrap"
                  v-for="item in menuItems3"
                  :key="item.title"
                >
                  <router-link :to="item.link">
                    <li class="white--text">{{ item.title }}</li>
                  </router-link>
                </ul>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card-title class="primary d-flex justify-center">
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
          </v-card-title>

          <v-card-text
            class="font-weight-light primary white--text text-center"
          >
            <h1 class="font-weight-light caption white--text">
              EUROPE - FRANCE - ASSOCIATION
            </h1>
            {{ new Date().getFullYear() }} ~
            <strong>L'ÉCHAPPÉE DES COPROPRIÉTÉS</strong>
            <p>
              fait avec
              <v-icon size="15">mdi-heart</v-icon>&nbsp;par
              <a
                class="font-weight-light caption white--text"
                href="https://mazzar.fr/"
                target="_blank"
                rel="noopener noreferrer"
                >Mazzar</a
              >
            </p>
          </v-card-text>
        </v-col>

        <v-col
          cols="4"
          md="4"
          class="d-flex justify-center align-center justify-content-center"
        >
          <div class="hidden-sm-and-down">
            <router-link to="/">
              <v-img
                :src="require('@/assets/img/logo-nav.png')"
                height="100"
                width="200"
                class="logoNav"
                size="300px"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      menuItems1: [
        { title: "Accueil", link: "/" },
        { title: "Blog", link: "/blog" },
        { title: "Vidéothèque", link: "/videotheque" },
      ],
      menuItems2: [
        { title: "Nos activités", link: "/activites" },
        { title: "Notre vision", link: "/vision" },
        { title: "Qui sommes-nous ?", link: "/qui-sommes-nous" },
      ],
      menuItems3: [
        { title: "Contact", link: "/contact" },
        { title: "Mentions légales", link: "/mentions-legales" },
        { title: "Plan du site", link: "/plan-du-site" },
      ],
    };
  },
  computed: {},
};
</script>

<style></style>
