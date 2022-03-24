<template>
  <v-container fluid fill-height class="align-center d-flex justify-center">
    <v-col cols="10">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="video in videos.data" :key="video.id">
          <v-card height="100%" width="100%" class="ma-2">
            <div class="video-responsive">
              <iframe
                defer
                :src="video.attributes.url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <v-card-title class="primary justify-center">
              <h1 class="subtitle-1 white--text text-decoration-underline">
                {{ video.attributes.name }}
              </h1>
            </v-card-title>
            <v-card-actions class="primary d-flex justify-center">
              <v-btn
                :href="video.attributes.youtube"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-5 button primary--text"
                >Voir sur youtube<v-icon color="primary" class="ml-3"
                  >mdi-youtube</v-icon
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </v-col>
  </v-container>
</template>
<script>
import videosQuery from '~/apollo/videos.gql'
export default {
  data() {
    return {
      videos: [],
      swiperOption: {
        breakpoints: {
          1500: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          430: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  apollo: {
    videos: {
      prefetch: true,
      query: videosQuery,
    },
  },
}
</script>
