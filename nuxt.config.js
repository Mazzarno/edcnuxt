import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - edc',
    title: 'edc',
    htmlAttrs: {
      lang: 'en'
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
  env: {
    strapiBaseUri: "https://edc-strapi.herokuapp.com"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     '@/assets/css/styles.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/carousel'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  apollo: {  
  clientConfigs: {
    default: {
      httpEndpoint: "https://edc-strapi.herokuapp.com/graphql"
    }
  }
},
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
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
        dark: {
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
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
