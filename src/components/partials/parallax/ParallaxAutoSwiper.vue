<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/swiper.css";
  import { Autoplay, Navigation } from 'swiper';
  import { swiperParallaxAuto } from '../../../data/menus';

  export default {
    name: "ParallaxAutoSwiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        swiperParallaxAuto
      }
    },
    setup() {
      return {
        modules: [Autoplay, Navigation],
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
  <!-- Container -->
  <div class="container">
    <swiper
      :slidesPerView="5"
      :spaceBetween="0"
      :loop="true"
      :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="parallaxAutoSwiper">

      <!-- Stampo due volte le stesse immagini poiché avendo visualizzato 5 immagini nello swiper non avrei più avuto lo scorrimento di quest'ultimo, stampandole 32 volte avrò 10 elementi nello swiper che mi permettono di scorrere tra le slides -->
      <swiper-slide v-for="(image, index) in swiperParallaxAuto" :key="index" class="d-flex justify-content-center">
        <img :src="getImage(`../../../assets/img/${image}`)" alt="">
      </swiper-slide>

      <swiper-slide v-for="(image, index) in swiperParallaxAuto" :key="index" class="d-flex justify-content-center">
        <img :src="getImage(`../../../assets/img/${image}`)" alt="">
      </swiper-slide>

    </swiper>
    
  </div>
</template>

<style lang="scss" scoped>
  .parallaxAutoSwiper{
    padding: 100px 0;
  }
</style>