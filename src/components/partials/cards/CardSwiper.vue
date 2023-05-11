<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { cardSection4 } from "../../../data/menus.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.css";

// Import required modules
import { Navigation } from "swiper";
import BlogPost from "../BlogPost.vue";

  export default {
    name: "CardSwiper",
    components: {
    Swiper,
    SwiperSlide,
    BlogPost, 
    },
    data(){
      return{
        cardSection4
      }
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="20"
    :navigation="true"
    :rewind="true"
    :modules="modules"
    class="cardSwiper">

    <!-- Swiper slide -->
    <swiper-slide
      v-for="(slide, index) in cardSection4"
      :key="index">

      <!-- BlogPost component -->
      <BlogPost
        :title="slide.title"
        :preview="slide.preview"
        :image="slide.image"
        :date="slide.date"/>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>

</style>