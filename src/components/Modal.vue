<script>
import {store} from "../data/store.js";
export default {
  name: "Modal",
  data(){
    return{
      store
    }
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div
      class="pg-modal-wrapper d-flex justify-content-center align-items-center"
      @click="store.showModal = false"
      v-if="store.showModal">

    <div class="pg-input-container d-flex justify-content-center position-relative">

      <input @click.stop type="text" class="bg-transparent" placeholder="search...">
      <img :src="getImage('../assets/img/image-23.svg')" class="position-absolute" alt="">

    </div>
    
    <img :src="getImage('../assets/img/image-22.svg')" class="pg-cross position-absolute top-0 end-0 py-3 pe-4" @click.stop="store.showModal = false">
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/vars" as *;
  .pg-modal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(black, 90%);
    font-size: 1.2rem;
    z-index: 9999999;
    .pg-input-container{
      input{
        width: 800px;
        padding: 22px 20px;
        color: $secondary-color-light;
        border: 1px solid $primary-color;
      }
      img{
        width: 18px;
        top: 50%;
        right: 25px;
        transform: translate(0, -50%);
        filter: invert(100%);
      }
    }
    .pg-cross{
      filter: invert(100%);
      cursor: pointer;
    }
  }
</style>