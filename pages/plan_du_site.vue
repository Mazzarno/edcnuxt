<template>
  <div fluid fill-height class="mt-5">
    <v-treeview activatable :items="items"></v-treeview>
    <nuxt-link to="/">
      <v-btn dark class="btn button ma-5" outlined>RETOUR à L'accueil</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Accueil',
      },

      {
        id: 8,
        name: 'Nos Activités',
      },
      {
        id: 9,
        name: 'Notre Vision',
      },
      {
        id: 10,
        name: 'Qui sommes-nous',
      },
      {
        id: 11,
        name: 'Blog',
      },
      {
        id: 12,
        name: 'Vidéothèques',
      },
      {
        id: 13,
        name: 'Contact',
      },
      {
        id: 14,
        name: 'Mentions Légales',
      },
      {
        id: 15,
        name: 'Plan du site',
      },
      {
        id: 16,
        name: '404',
      },
    ],
  }),
  head() {
    return {
      title: 'Le Plan du site',
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

<style></style>
