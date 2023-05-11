<script>
import MenuItem from "./partials/MenuItem.vue";
import MenuItemSocial from "./partials/MenuItemSocial.vue";
import {navBar, navBarSocial} from "../data/menus.js";
import {store} from "../data/store.js";
export default {
  name: "Header",
  components:{
    MenuItem,
    MenuItemSocial
  },
  data(){
    return{
      navBar,
      navBarSocial,
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
  <header>
    <div class="container-fluid h-100 d-flex justify-content-between align-items-center ps-5">
      <!-- Row -->
      <div class="row row-cols-3 w-100 h-100">
        
        <!-- Left col -->
        <div class="col d-flex h-100 justify-content-start">
          
          <div class="pg-logo h-100 w-100 py-4">
            <img class="h-100" :src="getImage('../assets/img/logo.svg')" alt="">
          </div>
        </div>
        
        <!-- Middle col -->
        <div class="col h-100">

          <nav class="w-100 h-100">

            <ul class="d-flex justify-content-between list-unstyled w-100 h-100 m-0">
              <MenuItem v-for="(item, index) in navBar" :key="index" :name="item.name" :dropdown="item.dropdownItems"/>
            </ul>
          </nav>
        </div>

        <!-- Right col -->
        <div class="col d-flex align-items-center justify-content-end">

          <img :src="getImage('../assets/img/image-8.svg')" class="me-4" @click="store.showModal = true" alt="">

          <nav class="pg-nav border-start ps-3">
            <ul class="d-flex justify-content-evenly  list-unstyled w-100 h-100 m-0">
              <MenuItemSocial v-for="(item, index) in navBarSocial" :key="index" :name="item.name" :img="item.img_path"/>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /Row -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/vars" as *;

  header{
    height: 90px;
    background-color: $primary-color;
    box-shadow: 0 5px 10px rgba($secondary-color, 0.1);
    color: $secondary-color;
    font-weight: 700;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .pg-nav{
    width: 30%;
  }
  img{
    opacity: 100%;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      opacity: 60%;
    }
  }
</style>