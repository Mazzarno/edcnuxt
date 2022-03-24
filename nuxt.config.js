export default {
  head: {
    titleTemplate: "L'Échappée des copropriétés - %s",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés." },
      { hid: 'keywords', name: 'keywords', content: "Copropriétés, L'Échappée des copropriétés, copro,Toulouse, France,Association des Responsables de Copropriété (ARC), ARC,politiques publiques, la loi, accompagnement des copropriétés, aides copropriétés" },
      { hid: 'language', name: 'language', content: "French" },
      { hid: 'revisit-after', name: 'revisit-after', content: "1 days" },
      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: "website" },
      { hid: 'og:url', property: 'og:url', content: "https://www.echappee-copro.org" },
      { hid: 'og:title', property: 'og:title', content: "L'Échappée des copropriétés" },
      { hid: 'og:description', property: 'og:description', content: "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés." },
      // Twitter
      { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:url', property: 'twitter:url', content: "https://www.echappee-copro.org" },
      { hid: 'twitter:title', property: 'twitter:title', content: "L'Échappée des copropriétés" },
      { hid: 'twitter:description', property: 'twitter:description', content: "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
     '~/assets/css/styles.css',
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
    customVariables: ['~/assets/css/styles.scss'],
    treeShake: true,
      defaultAssets: false,
  icons: {
    iconfont: 'mdi',
  },
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
