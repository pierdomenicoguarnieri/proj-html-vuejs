<script>
import {footerMenu} from "../../data/menus.js";
import FooterCol from './footer/FooterCol.vue';
export default {
  components: { FooterCol },
  name: "FooterTop",
  data(){
    return{
      footerMenu
    }
  }
}
</script>

<template>
  <div class="row row-cols-4 py-5 border-2 border-bottom border-dark">

    <!-- FooterCol componet -->
    <FooterCol
      v-for="(col, index) in footerMenu"
      :key="index"
      :title="col.label"
      :array="col.links"/>

    <!-- Right col -->
    <div class="col px-4">

    <span class="title">newsletter</span>

      <!-- Newsletter container -->
      <div class="pg-newsletter-container d-flex flex-column mt-3">

        <span class="undertext py-2">Subsribe to recive inspiration, ideas & news in your inbox.</span>
        <input type="text" class="mt-2" placeholder="Enter your email">
        
        <!-- Button container -->
        <div class="pg-btn-container mt-3">
          <button type="button">subscribe</button>
        </div>

      </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/vars" as *;
  .title{
    text-transform: uppercase;
    font-size: 20px;
  }
  span.undertext{
    color: darken($primary-color, 30%);
    font-size: 18px;
    text-transform: capitalize;
  }
  input{
    border: none;
    background-color: lighten($secondary-color, 5%);
    padding: 10px 15px;
    font-size: 18px;
    color: darken($primary-color , 10%);
    box-shadow: none;
    transition: all .3s;
    &:focus{
      outline: none;
      box-shadow: 0 5px 10px rgba($secondary-color, 10%);
    }
  }
  button{
    text-transform: uppercase;
    border: none;
    background-color: $primary-color;
    color: $secondary-color;
    padding: 12px 40px;
    font-weight: $fw-bold;
  }
</style>