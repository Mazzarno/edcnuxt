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
        <v-col cols="12" data-aos="zoom-in" data-aos-duration="2000">
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
                data-aos="fade-right"
                data-aos-duration="2000"
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
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                class="text-left body-1"
              >
                L’Échappée des copropriétés est née de l’envie de contribuer à
                l’amélioration de l’habitat et des conditions de vie des
                habitant·e·s de copropriété, en partant toujours de leur parole,
                individuelle et collective.
              </p>

              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                class="text-left body-1"
              >
                Nous agissons particulièrement sur les dynamiques collectives en
                copropriété, c’est-à-dire, les relations, les interactions, les
                rôles et positionnements non seulement entre les habitant·e·s,
                mais aussi avec les acteurs qui gravitent autour de leurs
                copropriétés (collectivités, accompagnateurs, fournisseurs,
                associations…).
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                class="text-left body-1"
              >
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
          <h1
            class="ma-5 headline primary--text"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            VIDÉO DE PRÉSENTATION DE L'EDC
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center">
        <v-col cols="12" md="8" sm="10">
          <div
            class="video-responsive"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
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
          <h1
            class="ma-5 headline primary--text"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            NOS ÉCHELLES D'INTERVENTION
          </h1>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" md="8" sm="10">
          <v-row class="echelle justify-center align-center">
            <v-col cols="10" sm="10" md="3">
              <v-img
                data-aos="fade-right"
                data-aos-duration="2000"
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

            <v-col cols="9" data-aos="fade-left" data-aos-duration="2000">
              <h1 class="text-left headline titre my-5 primary--text">
                À l’échelle d’une copropriété
              </h1>
              <p class="text-left body-1">
                Accompagner et animer vers des dynamiques collectives apaisées
                et fonctionnelles
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
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="2000"
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

            <v-col
              cols="9"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <h1 class="text-left headline titre my-5 primary--text">
                À l’échelle d’un territoire
              </h1>
              <p class="text-left body-1">
                Faciliter l’entraide et l’inspiration entre copropriétés
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
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="2000"
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

            <v-col
              cols="9"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="2000"
            >
              <h1 class="text-left headline titre my-5 primary--text">
                À l’échelle de l’écosystème de l’habitat privé
              </h1>
              <p class="text-left body-1">
                Développer la recherche, valoriser et transmettre nos
                expériences de terrain
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <v-row class="bg-action2 align-center d-flex justify-center">
      <v-col
        cols="12"
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="2000"
      >
        <v-btn to="/activites" class="ma-5" color="primary"
          >Voir toutes nos activités</v-btn
        >
      </v-col>
    </v-row>
    <v-divider class="mx-4 primary"></v-divider>
    <section class="bg-action3">
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="ma-5 headline primary--text">
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
    <!--
              <v-card
                  height="100%"
                  width="100%"
                  class="ma-1"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <div class="video-responsive">
                    <iframe
                      v-cloak
                      defer
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/7N91xq_pieE"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <v-card-title class="primary">
                    <a
                      href="https://www.youtube-nocookie.com/watch?v=7N91xq_pieE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 class="subtitle-2 white--text">
                        Épisode #1 => Toulouse ~ FRANCE
                      </h1>
                    </a>
                  </v-card-title>
                </v-card>
-->

    <section class="hidden-sm-and-down">
      <v-row no-gutters class="d-flex justify-center">
        <v-col no-gutters cols="6">
          <v-parallax
            height="700"
            :src="require(`@/assets/img/Actions.jpg`)"
            :lazy-src="require('@/assets/img/Actions.jpg')"
          ></v-parallax>
        </v-col>
        <v-col class="primary d-flex justify-center align-center" cols="6">
          <div>
            <h1 class="white--text font-weight-light title">NOTRE VISION</h1>
            <v-btn to="/vision" class="mt-5 primary--text"
              >EN SAVOIR PLUS</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters class="d-flex justify-center">
        <v-col
          no-gutters
          class="primary d-flex justify-center align-center"
          cols="6"
        >
          <div>
            <h1 class="white--text font-weight-light title">
              QUI SOMMES-NOUS ?
            </h1>
            <v-btn to="/qui_ sommes_nous" class="mt-5 primary--text"
              >EN APPRENDRE PLUS SUR L'EQUIPE</v-btn
            >
          </div>
        </v-col>
        <v-col no-gutters cols="6">
          <v-parallax
            height="700"
            :src="require(`@/assets/img/Aventure.jpg`)"
            :lazy-src="require('@/assets/img/Aventure.jpg')"
          ></v-parallax>
        </v-col>
      </v-row>
    </section>

    <section>
      <v-row class="justify-center align-center">
        <v-col cols="12">
          <h1 class="mt-5 headline primary--text">NOS DERNIERS ARTICLES</h1>
        </v-col>
      </v-row>

      <ArticlesList
        class="mb-5"
        :articles="categories.data[1].attributes.articles || []"
      ></ArticlesList>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="10">
          <v-btn to="/blog" class="ma-5" color="primary"
            >Voir tout nos articles</v-btn
          >
        </v-col>
      </v-row>
      <v-divider class="ma-4 primary"></v-divider>
    </section>
    <section>
      <v-row class="justify-center align-center">
        <v-col cols="12" data-aos="zoom-in" data-aos-duration="2000">
          <h1 class="headline my-5 primary--text">NOTRE VIDÉOTHÈQUE</h1>
        </v-col>
      </v-row>
   
          <VideosList
            class="mb-5"
            :videos="playlists.data[1].attributes.videos || []"
          ></VideosList>

          <v-row class="align-center my-5 d-flex justify-center">
            <v-col cols="12" md="6" data-aos="zoom-in" data-aos-duration="2000">
              <v-btn to="/videotheque" class="ma-5" color="primary"
                >Voir toutes nos vidéos</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                href="https://www.youtube-nocookie.com/channel/UCWxYK7EayDD5lYdjLSNW-lw/?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                class="ma-5"
                color="primary"
              >
                <v-icon class="mr-3">mdi-youtube</v-icon>Voir sur Youtube
              </v-btn>
            </v-col>
          </v-row>
    </section>
  </div>
</template>

<script>
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
      articles: [],
      videos: [],
      categories: [],
      playlists: [],
    }
  },
}
</script>
