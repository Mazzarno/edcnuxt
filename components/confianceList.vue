
<template>
  <swiper class="swiper" :pagination="true" :options="swiperOption">
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/abbe-pierre.png`)"
        :lazy-src="require('@/assets/img/logo/abbe-pierre.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide
      ><v-img
        :src="require(`@/assets/img/logo/agglopole.png`)"
        :lazy-src="require('@/assets/img/logo/agglopole.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/ashoka.png`)"
        :lazy-src="require('@/assets/img/logo/ashoka.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/eauetvie.png`)"
        :lazy-src="require('@/assets/img/logo/eauetvie.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/fondation2france.png`)"
        :lazy-src="require('@/assets/img/logo/fondation2france.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide
      ><v-img
        :src="require(`@/assets/img/logo/erasmus+.png`)"
        :lazy-src="require('@/assets/img/logo/erasmus+.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide
      ><v-img
        :src="require(`@/assets/img/logo/gefosat.png`)"
        :lazy-src="require('@/assets/img/logo/gefosat.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/leroy-merlin-source.png`)"
        :lazy-src="require('@/assets/img/logo/leroy-merlin-source.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/lille.png`)"
        :lazy-src="require('@/assets/img/logo/lille.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide
      ><v-img
        :src="require(`@/assets/img/logo/palanca.png`)"
        :lazy-src="require('@/assets/img/logo/palanca.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>

    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/plainecommune.png`)"
        :lazy-src="require('@/assets/img/logo/plainecommune.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide
      ><v-img
        :src="require(`@/assets/img/logo/sete.png`)"
        :lazy-src="require('@/assets/img/logo/sete.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/toulouse.png`)"
        :lazy-src="require('@/assets/img/logo/toulouse.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <swiper-slide>
      <v-img
        :src="require(`@/assets/img/logo/urbanis.png`)"
        :lazy-src="require('@/assets/img/logo/urbanis.png')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> </v-img
    ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: { delay: 2500, disableOnInteraction: false },
        navigation: true,
        pagination: { clickable: true },
        grabCursor: true,
        breakpoints: {
          1500: {
            slidesPerView: 6,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 90,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>