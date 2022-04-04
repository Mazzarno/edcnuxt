<template>
  <v-app dark>
    <!-- NAV DRAWER -->
    <v-navigation-drawer
      dark
      class="primary"
      v-model="drawer"
      right
      app
      temporary
    >
      <NuxtLink to="/">
        <v-img
          class="my-6 ml-8"
          :src="require('@/assets/img/logo-nav.png')"
          :lazy-src="require('@/assets/img/logo-nav.png')"
          height="80"
          width="200"
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
          <v-list-item-content align="start" justify="center">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-row class="ml-3 mt-1 d-flex align-start justify-start">
        <v-col cols="10">
          <div class="d-flex justify-center align-content-center">
            <a
              href="https://www.facebook.com/manon.leroy.7355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn class="mx-4" dark icon>
                <v-icon size="24px">{{ mdiFacebook }}</v-icon>
              </v-btn>
            </a>
            <a
              href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn class="mx-4" dark icon>
                <v-icon size="24px">{{ mdiLinkedin }}</v-icon>
              </v-btn>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn class="mx-4" dark icon>
                <v-icon size="24px">{{ mdiYoutube }}</v-icon>
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
        <h3 class="titleHeader headline hidden-sm-and-down pb-2">
          Faciliter les projets collectifs en copropriété.
        </h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-app-bar-nav-icon @click="drawer = !drawer"
          ><v-icon>{{ mdiMenu }}</v-icon></v-app-bar-nav-icon
        >
      </v-toolbar-items>
    </v-app-bar>
    <!-- MAIN -->
    <transition name="fade" mode="out-in">
      <v-main>
        <Nuxt />
      </v-main>
    </transition>
    <!-- SNACKBAR ADD ITEM -->
    <v-snackbar v-model="snackbar">
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          <v-icon>{{ mdiClose }}</v-icon>
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
                href="https://facebook.com/Lechappeedescoproprietes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">{{ mdiFacebook }}</v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">{{ mdiLinkedin }}</v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn class="mx-4" dark icon>
                  <v-icon size="24px">{{ mdiYoutube }}</v-icon>
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
import {
  mdiFacebook,
  mdiLinkedin,
  mdiYoutube,
  mdiHome,
  mdiPresentation,
  mdiMagnify,
  mdiBike,
  mdiBorderColor,
  mdiVideo,
  mdiEmailOutline,
  mdiClose,
  mdiMenu,
} from '@mdi/js'
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  transition: 'fade',
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
      loading: false,
      message: '',
      snackbar: false,
      drawer: false,
      mdiFacebook,
      mdiLinkedin,
      mdiYoutube,
      mdiMenu,
      mdiClose,
      mdiHome,
      mdiPresentation,
      mdiMagnify,
      mdiBike,
      mdiBorderColor,
      mdiVideo,
      mdiEmailOutline,
      items: [
        {
          icon: `${mdiHome}`,
          title: 'Accueil',
          to: '/',
        },
        {
          icon: `${mdiPresentation}`,
          title: 'Nos Activités',
          to: '/activites',
        },
        {
          icon: `${mdiMagnify}`,
          title: 'Notre Vision',
          to: '/vision',
        },
        {
          icon: `${mdiBike}`,
          title: 'Qui sommes nous ?',
          to: '/qui_sommes_nous',
        },
        {
          icon: `${mdiBorderColor}`,
          title: 'Le Blog',
          to: '/blog',
        },
        {
          icon: `${mdiVideo}`,
          title: 'La Vidéothèque',
          to: '/videotheque',
        },
        {
          icon: `${mdiEmailOutline}`,
          title: 'Nous Contactez',
          to: '/contact',
        },
      ],
    }
  },
}
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>