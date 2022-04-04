<template>
  <div fluid fill-height v-cloak>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline mt-5 primary--text">LE BLOG</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">
          Les {{ categories.data[1].attributes.name }}
        </h1>
      </v-col>
    </v-row>
    <ArticlesList
      :articles="categories.data[0].attributes.articles || []"
    ></ArticlesList>
    <v-divider class="ma-4 primary"></v-divider>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">Tout les articles</h1>
      </v-col>
    </v-row>

    <ArticlesList
      :articles="categories.data[0].attributes.articles || []"
    ></ArticlesList>

    <v-row class="align-center my-5 d-flex justify-center">
      <v-col cols="12" md="6">
        <nuxt-link to="/videotheque">
          <v-btn class="ma-5" color="primary"
            >Voir la vidéothèque</v-btn
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
import ArticlesList from '~/components/ArticlesList.vue'
import articlesQuery from '~/apollo/articles.gql'
import categoriesQuery from '~/apollo/categories.gql'
export default {
  components: {
    ArticlesList,
  },
  data() {
    return {
      articles: [],
      categories: [],
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
  head() {
    return {
      title: 'Le Blog',
      meta: [{ hid: 'robots', name: 'robots', content: 'blog, follow' }],
    }
  },
}
</script>