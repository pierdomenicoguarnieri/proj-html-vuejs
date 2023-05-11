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

    <!-- Col wrapper -->
    <div class="pg-col-wrapper w-100 h-100">

      <!-- Image containe -->
      <div class="pg-img-container overflow-hidden mb-3">
        <img :src="getImage(`../../assets/img/${image}`)" alt="">
      </div>

      <!-- Text container -->
      <div class="pg-text-container">
        <span>{{ date }}</span>
        <h5 class="mt-2">{{ title }}</h5>
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
      .pg-text-container{
        h5{
          font-size: 16px;
          transition: all .3s;
          &:hover{
            color: lighten($secondary-color, 30%);
          }
        }
        p{
          text-transform: none;
          color: lighten($secondary-color, 5%);
        }
        span{
          text-transform: capitalize;
          color: $secondary-color-light;
        }
      }
    }
  }
</style>