<template>
  <v-app dark>
    <!-- NAV DRAWER -->
    <v-navigation-drawer dark class="primary" v-model="drawer" right app>
      <v-img
        class="my-3 ml-8"
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
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-row class="ml-3 mt-1">
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
    </v-navigation-drawer>
    <!-- NAV BAR -->
    <v-app-bar app class="primary app-bar" dark fixed prominent fluid>
      <v-toolbar-title>
        <NuxtLink to="/">
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
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <h3 class="titleHeader heading-4 hidden-sm-and-down">
          Faciliter les projets collectifs en copropriété
        </h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-divider class="mr-1" vertical></v-divider>
        <v-switch
          class="mt-5"
          @click="$vuetify.theme.dark = $vuetify.theme.light"
          prepend-icon="mdi-weather-sunny"
          append-icon="mdi-weather-night"
        ></v-switch>
        <v-divider class="ml-1" vertical></v-divider>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </v-toolbar-items>
    </v-app-bar>
    <!-- MAIN -->
    <v-main>
      <Nuxt />
    </v-main>
    <!-- SNACKBAR ADD ITEM -->
    <v-snackbar v-model="snackbar">
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- FOOTER -->
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
                    <NuxtLink :to="item.link">
                      <li class="white--text">{{ item.title }}</li>
                    </NuxtLink>
                  </ul>
                </v-col>

                <v-col class="mx-1" cols="3">
                  <ul
                    class="caption d-flex justify-start text-no-wrap"
                    v-for="item in menuItems2"
                    :key="item.title"
                  >
                    <NuxtLink :to="item.link">
                      <li class="white--text">{{ item.title }}</li>
                    </NuxtLink>
                  </ul>
                </v-col>

                <v-col class="ml-4" cols="3">
                  <ul
                    class="caption d-flex justify-start text-no-wrap"
                    v-for="item in menuItems3"
                    :key="item.title"
                  >
                    <NuxtLink :to="item.link">
                      <li class="white--text">{{ item.title }}</li>
                    </NuxtLink>
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
            <div class="hidden-sm-and-down"></div>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems1: [
        { title: 'Accueil', link: '/' },
        { title: 'Blog', link: '/blog' },
        { title: 'Vidéothèque', link: '/videotheque' },
      ],
      menuItems2: [
        { title: 'Nos activités', link: '/activites' },
        { title: 'Notre vision', link: '/vision' },
        { title: 'Qui sommes-nous ?', link: '/qui_sommes_nous' },
      ],
      menuItems3: [
        { title: 'Contact', link: '/contact' },
        { title: 'Mentions légales', link: '/mentions_legales' },
        { title: 'Plan du site', link: '/plan_du_site' },
      ],
      message: '',
      snackbar: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Accueil',
          to: '/',
        },
        {
          icon: 'mdi-presentation',
          title: 'Nos Activités',
          to: '/activites',
        },
        {
          icon: 'mdi-magnify',
          title: 'Notre Vision',
          to: '/vision',
        },
        {
          icon: 'mdi-bike',
          title: 'Qui sommes nous ?',
          to: '/qui_sommes_nous',
        },
        {
          icon: 'mdi-border-color',
          title: 'Le Blog',
          to: '/blog',
        },
        {
          icon: 'mdi-video',
          title: 'La Vidéothèque',
          to: '/videotheque',
        },
        {
          icon: 'mdi-email-outline',
          title: 'Nous Contactez',
          to: '/contact',
        },
      ],
    }
  },
}
</script>
