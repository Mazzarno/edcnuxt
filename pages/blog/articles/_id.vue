<template>
  <v-container fill-height fluid class="justify-center align-center">
    <v-row class="align-center">
      <v-col cols="12">
        <h1 class="headline primary--text titre">
          {{ articles.data[$route.params.id - 1].attributes.title }}
        </h1>
      </v-col>
    </v-row>
    <v-col cols="12" md="8" sm="10">
      <v-row class="align-center mb-3">
        <v-avatar >
          <v-img
            :src="api_url + articles.data[$route.params.id - 1].attributes.avatar.data[0].attributes.url"
            :lazy-src="api_url + articles.data[$route.params.id - 1].attributes.avatar.data[0].attributes.url"
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
        </v-avatar>
        <h3 class="primary--text ml-2 title">
          {{ articles.data[$route.params.id - 1].attributes.auteur }}
        </h3>
      </v-row>

      <v-row class="justify-center">
        <p class="text-left body-1">
          {{ articles.data[$route.params.id - 1].attributes.description }}
        </p>
      </v-row>
      <v-row class="my-5 d-flex justify-center">
        <v-col cols="8">
          <v-img
            :src="api_url +articles.data[$route.params.id - 1].attributes.image.data[0].attributes.url"
            :lazy-src="api_url + articles.data[$route.params.id - 1].attributes.image.data[0].attributes.url"
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
        </v-col>
      </v-row>
      <v-row>
        <p class="text-left body-1">
          {{ articles.data[$route.params.id - 1].attributes.content }}
        </p>
      </v-row>
      <v-row>
        <p
          class="text-center body-2"
          v-if="articles.data[$route.params.id - 1].attributes.created_at"
        >
          Publié le
          {{
            moment(articles.data[$route.params.id - 1].attributes.created_at)
              .locale('fr')
              .format('LL')
          }}
          par
          {{ articles.data[$route.params.id - 1].attributes.auteur }}
        </p>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="12">
          <v-btn to="/blog" class="ma-5 button" color="primary"
            >Retour au blog
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
import articlesQuery from '~/apollo/articles.gql'
var moment = require('moment')
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri || 'http://localhost:1337',
      articles: [],
      moment: moment,
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
  },
}
</script>