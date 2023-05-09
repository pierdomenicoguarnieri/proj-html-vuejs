<script>
import MenuItem from "./partials/MenuItem.vue";
import {navBar} from "../data/menus.js"
export default {
  name: "Header",
  components:{
    MenuItem
  },
  data(){
    return{
      navBar
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid h-100 d-flex justify-content-between align-items-center px-5">
      <div class="row row-cols-3 w-100 h-100">
        <div class="col d-flex justify-content-start">
          <div class="pg-logo">
            <img src="" alt="">
          </div>
        </div>
        
        <div class="col h-100">
          <nav class="w-100 h-100">
            <ul class="d-flex justify-content-between list-unstyled w-100 h-100 m-0">
              <MenuItem v-for="(item, index) in navBar" :key="index" :name="item.name" :dropdown="item.dropdownItems"/>
            </ul>
          </nav>
        </div>
  
        <div class="col d-flex align-items-center justify-content-end">
          <nav>
            Social
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../sass/partials/vars" as *;

  header{
    height: 80px;
    background-color: $primary-color;
    box-shadow: 0 5px 10px rgba($secondary-color, 0.1);
    color: $secondary-color;
    font-weight: 700;
  }
</style>