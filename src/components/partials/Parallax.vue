<script>
import Counter from './parallax/Counter.vue'
import ParallaxSwiper from './parallax/ParallaxSwiper.vue'
export default {
  components: { Counter, ParallaxSwiper },
  name: "Parallax",
  props:{
    className: String
  }
}
</script>

<template>
  <div class="pg-parallax" :class="className">
    <Counter v-if="className == 'img-1'"/>
    <ParallaxSwiper v-if="className == 'img-2'"/>
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