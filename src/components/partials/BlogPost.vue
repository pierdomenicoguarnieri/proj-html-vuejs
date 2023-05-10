<script>
export default {
  name: "BlogPost",
  props:{
    title: String,
    preview: String,
    image: String,
    date: String
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="col h-100 mb-5 px-3">

    <div class="pg-col-wrapper w-100 h-100">

      <div class="pg-img-container mb-4 overflow-hidden">
        <img :src="getImage(`../../assets/img/${image}`)" alt="">
      </div>

      <div class="pg-text-container text-center">
        <span>{{ date }}</span>
        <h5>{{ title }}</h5>
        <p class="text-capitalize">{{ preview }}</p>
      </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/vars" as *;
  .col{
    .pg-col-wrapper{
      .pg-img-container{
        width: 100%;
        aspect-ratio: 4/3;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
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
      span{
        color: $secondary-color-light;
      }
    }
  }
</style>