<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/swiper.css";

// Import required modules
import {  Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default {
  name: "Jumbotron",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
    };
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
};
</script>

<template>
  <div class="pg-jumbotron">
    <swiper
      :spaceBetween="0"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :effect="'fade'"
      :navigation="true"
      :modules="modules"
      class="mySwiper">
      <swiper-slide class="position-relative">
        <img :src="getImage('../assets/img/main-banner-1.jpg')" alt="">
        <div class="pg-content-slide position-absolute h-100 w-100 top-0 start-0 text-uppercase d-flex align-items-center text-uppercase">
          
          <div class="container p-0">

            <div class="pg-content-wrapper d-flex flex-column px-4">
            
              <div class="pg-text-wrapper mb-4">
                <span class="mb-3">Cinemato Studio</span>
                <h1>Action and inspire people</h1>
              </div>
            
              <div class="pg-btn-wrapper">
                <button type="button" class="text-uppercase">read more</button>
              </div>

            </div>

          </div>

        </div>
      </swiper-slide>
      <swiper-slide>
        <img :src="getImage('../assets/img/main-banner-2.jpg')" alt="">

        <div class="pg-content-slide position-absolute h-100 w-100 top-0 start-0 text-uppercase d-flex align-items-center text-uppercase">

          <div class="container p-0">

            <div class="pg-content-wrapper d-flex flex-column px-4">

              <div class="pg-text-wrapper mb-4">
                <span class="mb-3">Cinemato Director</span>
                <h1>Dancing with of the stars</h1>
              </div>

              <div class="pg-btn-wrapper">
                <button type="button" class="text-uppercase">read more</button>
              </div>

            </div>

          </div>

        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/vars" as *;
.pg-jumbotron{
  height: 800px;
  margin-top: 90px;
  .swiper{
    height: 100%;
  }
  .swiper-slide{
    .pg-content-slide{
      // padding: 0 15%;
      .pg-content-wrapper{
        .pg-text-wrapper{
          max-width: 600px;
          color: $primary-color;
          h1{
            font-weight: 700 !important;
            font-size: 4rem;
            letter-spacing: 1.5px;
          }
          span{
            font-weight: 700 !important;
            letter-spacing: 3px;
          }
        }
        .pg-btn-wrapper{
          button{
            border: 0;
            background-color: $primary-color;
            color: $secondary-color;
            font-size: 1.1rem;
            padding: 10px 30px;
            font-weight: 700 !important;
          }
        }
      }
    }
  }
}
</style>