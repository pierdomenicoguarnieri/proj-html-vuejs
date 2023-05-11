<script>
export default {
  name: "CardImages",
  props:{
    title: String,
    text: String,
    image: String
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="col mb-5 px-3">

    <!-- Cl wrapper -->
    <div class="pg-col-wrapper w-100 h-100">

      <!-- Image container -->
      <div class="pg-img-container mb-4 overflow-hidden">
        <img :src="getImage(`../../../assets/img/${image}`)" alt="">
      </div>

      <!-- Text container -->
      <div class="pg-text-container text-center">
        <h5>{{ title }}</h5>
        <p class="text-capitalize">{{ text }}</p>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .col{
    .pg-col-wrapper{
      .pg-img-container{
        img{
          transition: all .3s;
        }
        &:hover{
        img{
          transform: scale(1.04);
        }
      }
      }
      p{
        text-transform: none;
        color: $secondary-color-light;
      }
    }
  }
</style>