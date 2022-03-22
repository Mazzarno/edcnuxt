<template>
  <div>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Le blog',
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