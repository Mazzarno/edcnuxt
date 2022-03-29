<template>
  <div fluid fill-height class="home" v-cloak>
    <section class="header">
      <v-img
        class="hidden-sm-and-down"
        aspect-ratio="2.6"
        :src="require('@/assets/img/banniere-header.jpg')"
        :lazy-src="require('@/assets/img/banniere-header.jpg')"
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
    </section>
    <section>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="display-1 mt-5 primary--text">
            L'ÉCHAPPÉE DES COPROPRIÉTÉS
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="justify-center align-center">
            <v-col cols="10" sm="10" md="4">
              <v-img
                aspect-ratio="1"
                :src="require('@/assets/img/totem1.jpg')"
                :lazy-src="require('@/assets/img/totem1.jpg')"
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
            </v-col>
            <v-col cols="10" sm="8" md="8">
              <p class="text-left body-1">
                L’Échappée des copropriétés est née de l’envie de contribuer à
                l’amélioration de l’habitat et des conditions de vie des
                habitant·e·s de copropriété, en partant toujours de leur parole,
                individuelle et collective.
              </p>

              <p class="text-left body-1">
                Nous agissons particulièrement sur les dynamiques collectives en
                copropriété, c’est-à-dire, les relations, les interactions, les
                rôles et positionnements non seulement entre les habitant·e·s,
                mais aussi avec les acteurs qui gravitent autour de leurs
                copropriétés (collectivités, accompagnateurs, fournisseurs,
                associations…).
              </p>
              <p class="text-left body-1">
                Nous avons la conviction que c’est au niveau de ces dynamiques
                collectives que se trouvent, certes, une des origines des
                problèmes des copropriétés, mais également un levier pour les
                affronter.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section class="pa-5">
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="ma-5 headline primary--text">
            VIDÉO DE PRÉSENTATION DE L'EDC
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center">
        <v-col cols="12" md="8" sm="10">
          <div class="video-responsive mb-8">
            <iframe
              v-cloak
              defer
              name="vidéo présentation"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/2RjzNUTruuQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="bg-action2">
      <v-divider class="mx-4 primary"></v-divider>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="ma-5 headline primary--text">
            NOS ÉCHELLES D'INTERVENTION
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="echelle justify-center align-center">
            <v-col cols="10" sm="10" md="3">
              <v-img
                height="150"
                width="150"
                aspect-ratio="1"
                :src="require('@/assets/img/totem4.jpg')"
                :lazy-src="require('@/assets/img/totem4.jpg')"
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
            </v-col>

            <v-col cols="9">
              <h1 class="text-left headline titre mb-5 primary--text">
                À l’échelle d’une Copropriété
              </h1>
              <p class="text-left body-1">
                Accompagner et animer vers des dynamiques collectives apaisées
                et fonctionnelles.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="ma-4 primary"></v-divider>
    </section>
    <section>
      <v-row class="justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="echelle justify-center align-center">
            <v-col cols="10" sm="10" md="3">
              <v-img
                height="150"
                width="150"
                aspect-ratio="1"
                :src="require('@/assets/img/totem7.jpg')"
                :lazy-src="require('@/assets/img/totem7.jpg')"
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
            </v-col>

            <v-col cols="9">
              <h1 class="text-left headline titre mb-5 primary--text">
                À l’échelle d’un Territoire
              </h1>
              <p class="text-left body-1">
                Faciliter l’entraide et l’inspiration entre Copropriétés.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section class="bg-action2">
      <v-divider class="ma-4 primary"></v-divider>
      <v-row class="justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="echelle justify-center align-center">
            <v-col cols="10" sm="10" md="3">
              <v-img
                height="150"
                width="150"
                aspect-ratio="1"
                :src="require('@/assets/img/totem3.jpg')"
                :lazy-src="require('@/assets/img/totem3.jpg')"
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
            </v-col>

            <v-col cols="9">
              <h1 class="text-left headline titre mb-5 primary--text">
                À l’échelle de l’écosystème de l’habitat privé
              </h1>
              <p class="text-left body-1">
                Développer la recherche, valoriser et transmettre nos
                expériences de terrain.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="bg-action2 align-center d-flex justify-center pb-3">
        <v-col cols="12">
          <nuxt-link to="/activites">
            <v-btn class="ma-5" color="primary"
              >nos activités
              <v-icon size="18" class="ml-3">
                {{ mdiPresentation }}</v-icon
              ></v-btn
            >
          </nuxt-link>
        </v-col>
      </v-row>
      <v-divider class="ma-4 primary"></v-divider>
    </section>

    <v-row class="justify-center my-5">
      <v-col cols="12" md="8" sm="10">
        <v-parallax
          class="ma-5"
          height="700"
          :src="require(`@/assets/img/Actions.jpg`)"
          :lazy-src="require('@/assets/img/Actions.jpg')"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="white--text title paralax">NOTRE VISION</h1>
              <nuxt-link to="/vision">
                <v-btn class="mt-5 primary--text"
                  >EN SAVOIR PLUS</v-btn
                ></nuxt-link
              >
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>

    <section class="bg-action3">
      <v-divider class="mx-4 primary"></v-divider>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="mt-5 headline primary--text">
            ILS·ELLES NOUS FONT CONFIANCE
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center confiance">
        <v-col cols="10">
          <confiance-list />
        </v-col>
      </v-row>
    </section>
    <v-divider class="mx-4 primary"></v-divider>
    <v-row class="justify-center mt-5">
      <v-col cols="12" md="8" sm="10">
        <v-parallax
          class="ma-5"
          height="700"
          :src="require(`@/assets/img/Aventure.jpg`)"
          :lazy-src="require('@/assets/img/Aventure.jpg')"
          ><v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="white--text title paralax">QUI SOMMES-NOUS ?</h1>
              <nuxt-link to="/qui_sommes_nous">
                <v-btn class="mt-5 primary--text"
                  >EN APPRENDRE PLUS SUR L'EQUIPE</v-btn
                ></nuxt-link
              >
            </v-col>
          </v-row></v-parallax
        >
      </v-col></v-row
    >
    <section>
      <v-col cols="12">
        <h1 class="mt-5 headline primary--text">LE BLOG</h1>
      </v-col>

      <ArticlesList
        class="mb-5"
        :articles="categories.data[1].attributes.articles || []"
      ></ArticlesList>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <nuxt-link to="/blog">
            <v-btn class="ma-5" color="primary"
              >Voir tout nos articles
              <v-icon size="18" class="ml-2 mt-1">{{
                mdiBorderColor
              }}</v-icon></v-btn
            ></nuxt-link
          >
        </v-col>
      </v-row>
      <v-divider class="ma-4 primary"></v-divider>
    </section>
    <section class="bg-action3">
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="headline my-5 primary--text">NOTRE VIDÉOTHÈQUE</h1>
        </v-col>
      </v-row>

      <VideosList
        class="mb-5"
        :videos="playlists.data[0].attributes.videos || []"
      ></VideosList>

      <v-row class="align-center my-5 d-flex justify-center">
        <v-col cols="12" md="6">
          <nuxt-link to="/videotheque">
            <v-btn class="ma-5" color="primary"
              >Voir toutes nos vidéos
              <v-icon class="ml-3">{{ mdiVideo }}</v-icon></v-btn
            ></nuxt-link
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
            <v-icon class="ml-3">{{ mdiYoutube }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import {
  mdiVideo,
  mdiYoutube,
  mdiMagnify,
  mdiBorderColor,
  mdiPresentation,
} from '@mdi/js'
import ConfianceList from '../components/confianceList.vue'
import ArticlesList from '~/components/ArticlesList.vue'
import VideosList from '~/components/VideosList.vue'
import articlesQuery from '~/apollo/articles.gql'
import videosQuery from '~/apollo/videos.gql'
import categoriesQuery from '~/apollo/categories.gql'
import playlistsQuery from '~/apollo/playlists.gql'
export default {
  name: 'Home',
  components: {
    ConfianceList,
    ArticlesList,
    VideosList,
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
    videos: {
      prefetch: true,
      query: videosQuery,
    },
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
    playlists: {
      prefetch: true,
      query: playlistsQuery,
    },
  },
  data() {
    return {
      mdiPresentation,
      mdiBorderColor,
      mdiYoutube,
      mdiVideo,
      mdiMagnify,
      articles: [],
      videos: [],
      categories: [],
      playlists: [],
      image: require('@/assets/img/Actions.jpg'),
    }
  },
  head() {
    return {
      title: 'Accueil',
      meta: [
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'og:image', property: 'og:image', content: `${this.image}` },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${this.image}`,
        },
      ],
    }
  },
}
</script>
