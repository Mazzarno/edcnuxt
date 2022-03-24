<template>
  <div fluid fill-height v-cloak>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline mt-5 primary--text">NOTRE VIDÉOTHÈQUE</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">Présentation</h1>
      </v-col>
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <v-row class="justify-center align-center">
            <v-col cols="12" sm="6" md="6" xl="4">
              <v-card class="ma-5">
                <div class="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/2RjzNUTruuQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <v-card-title class="primary">
                  <a
                    href="https://www.youtube-nocookie.com/watch?v=2RjzNUTruuQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 class="subtitle-2 white--text">
                      l'Échappée des copropriétés - qui sommes nous?
                    </h1>
                  </a>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>

    <v-divider class="ma-4 primary"></v-divider>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">Projet "En Roue Libre"</h1>
      </v-col>
    </v-row>

    <VideosList
      class="mb-5"
      :videos="playlists.data[1].attributes.videos || []"
    ></VideosList>

    <v-divider class="ma-4 primary"></v-divider>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">Toutes les vidéos</h1>
      </v-col>
    </v-row>
    <VideosList
      class="mb-5"
      :videos="playlists.data[0].attributes.videos || []"
    ></VideosList>

    <v-row class="align-center my-5 d-flex justify-center">
      <v-col cols="12" md="6">
        <nuxt-link to="/blog">
          <v-btn class="ma-5" color="primary">Voir le blog</v-btn></nuxt-link
        >
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          href="https://www.youtube-nocookie.com/channel/UCWxYK7EayDD5lYdjLSNW-lw/?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          class="ma-5"
          color="primary"
          >Voir la chaine Youtube
          <v-icon class="ml-3">mdi-youtube</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="align-center d-flex justify-center">
      <v-col cols="12">
        <nuxt-link to="/">
          <v-btn class="ma-5 button" color="primary"
            >Retour à l'accueil</v-btn
          ></nuxt-link
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VideosList from '~/components/VideosList.vue'
import playlistsQuery from '~/apollo/playlists.gql'
import videosQuery from '~/apollo/videos.gql'
export default {
  components: {
    VideosList,
  },
  apollo: {
    videos: {
      prefetch: true,
      query: videosQuery,
    },
    playlists: {
      prefetch: true,
      query: playlistsQuery,
    },
  },
  data() {
    return {
      articles: [],
      videos: [],
      categories: [],
      playlists: [],
    }
  },

  head() {
    return {
      title: 'La Vidéothèque',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>
