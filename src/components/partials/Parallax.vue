<script>
import Counter from './parallax/Counter.vue'
import ParallaxSwiper from './parallax/ParallaxSwiper.vue'
import ParallaxAutoSwiper from './parallax/ParallaxAutoSwiper.vue'
export default {
  components: { Counter, ParallaxSwiper, ParallaxAutoSwiper },
  name: "Parallax",
  props:{
    className: String
  }
}
</script>

<template>
  <!-- Container components parallax -->
  <div class="pg-parallax" :class="className">

    <!-- V-if component Conuter if props className == 'img-1' -->
    <Counter v-if="className == 'img-1'"/>
    
    <!-- V-if component ParallaxSwiper if props className == 'img-2' -->
    <ParallaxSwiper v-if="className == 'img-2'"/>

    <!-- V-if component ParallaxAutoSwiper if props className == 'img-3' -->
    <ParallaxAutoSwiper v-if="className == 'img-3'"/>
  </div>
</template>

<style lang="scss" scoped>
  .pg-parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img-1{
    background-image: url("../../assets/img/Parallax-01.jpg");
  }
  .img-2{
    background-image: url("../../assets/img/Parallax-02.jpg");
  }
  .img-3{
    background-image: url("../../assets/img/Parallax-03.jpg");
  }
</style>