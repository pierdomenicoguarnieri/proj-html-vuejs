<script>
export default {
  name: "Card",
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

    <!-- Col wrapper -->
    <div class="pg-col-wrapper h-100">

      <!-- Image contanier -->
      <div class="pg-img-container d-flex align-items-center justify-content-center mb-4 h-50 w-100">
        <img :src="getImage(`../../../assets/img/${image}`)" class="p-2" alt="">
      </div>

      <!-- Text container -->
      <div class="pg-text-container text-center">
        <h5>{{ title }}</h5>
        <p>{{ text }}</p>
      </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .col{
    max-height: 200px;
    .pg-col-wrapper{
      img{
        width: 22%;
        height: 100%;
        object-fit: contain;
        transform: translate(0, 0);
        transition: all .3s;
      }
      p{
        text-transform: none;
        color: $secondary-color-light;
      }
      &:hover{
        img{
          transform: translate(0, -10px);
        }
      }
    }
  }
</style>