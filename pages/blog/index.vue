<template>
  <div fluid fill-height v-cloak>
    <v-row class="justify-center">
      <v-col cols="12" md="8" sm="10">
        <h1 class="mt-10 display-1 primary--text text-decoration-underline">
          LE BLOG
        </h1>
        <div class="d-flex justify-start">
          <h1 class="mt-10 headline primary--text">
            Les {{ categories.data[0].attributes.name }}
          </h1>
        </div>
      </v-col>
    </v-row>
    <ArticlesList
      :articles="categories.data[0].attributes.articles || []"
    ></ArticlesList>
    <v-row class="justify-center">
      <v-col cols="12" md="8" sm="10">
        <div class="d-flex justify-start">
          <h1 class="mt-2 headline primary--text">Tout les Articles</h1>
        </div>
      </v-col>
    </v-row>
    <ArticlesList
      :articles="categories.data[1].attributes.articles || []"
    ></ArticlesList>
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