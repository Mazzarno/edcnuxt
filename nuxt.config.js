export default {
  head: {
    titleTemplate: "L'Echappée des Copropriétés - %s",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
     '@/assets/css/styles.css',
  ],

  plugins: ['~/plugins/carousel'],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],

  axios: {},

  apollo: {  
  clientConfigs: {
    default: {
      httpEndpoint: /*'http://localhost:1337'/graphql ||*/ 'https://edc-strapi.herokuapp.com/graphql',
    }
  }
  },
  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
        primary: "#FF8C00",
        secondary: "#ECBE12",
        tertiary: "#ffffeb",
        accent: "#FAEA1C",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        },
      }
    }
  },

  build: {
  }
}
