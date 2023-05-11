<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/swiper.css";
  import { Pagination } from 'swiper';
  import { swiperParallax } from "../../../data/menus.js";

  export default {
    name: "ParallaxSwiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        swiperParallax
      }
    },
    methods:{
      getImage(img){
        return new URL(img, import.meta.url).href;
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>

<template>
  <div class="pg-swiper-container">

    <div class="img-container d-flex align-items-center justify-content-center mb-5">
      <img src="../../../assets/img/image-20.svg" alt="">
    </div>

    <swiper
      
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="parallaxSwiper">
      <swiper-slide v-for="(slide, index) in swiperParallax" :key="index">
        <p>Curabitur bibendum ex ut sapien blandit viverra. Nunc lobortis mi dui, id <br> Etiam tempor sit amet metus in bibendum. Nunc eros risus, pellentesque a augue Pellentesque fringilla eget mi eu mollis. Mauris commodo</p>
        <div class="pg-info-wrapper d-flex w-100 d-flex justify-content-center align-items-center">
          <img :src="getImage(`../../../assets/img/${slide.image}`)" class="rounded-circle overflow-hidden" alt="">

          <div class="pg-text-wrapper d-flex flex-column justify-content-center h-100 ms-3">
            <span class="text-uppercase title">{{ slide.name }}</span>
            <span class="text-capitalize">{{ slide.role }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .pg-swiper-container{
    padding: 100px 0;
    .img-container{
      img{
        width: 3%;
        filter: invert(100%);
      }
    }
  }
  .parallaxSwiper{
    color: $primary-color;
    max-width: 800px;
    .swiper-slide{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
      p{
        text-align: center;
        line-height: 40px;
      }
      .pg-info-wrapper{
        img{
          width: 7%;
        }
        .pg-text-wrapper{
          span{
            font-size: $fs-small;
          }
          .title{
            font-weight: $fw-bold;
            font-size: 15px;
          }
        }
      }
    }
  }
</style>