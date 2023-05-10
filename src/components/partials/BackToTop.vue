<script>
import { store } from "../../data/store.js";
export default {
  name:"BackToTop",
  data(){
    return{
      store
    }
  },
  methods:{
    checkScroll(){
      window.addEventListener("scroll", () =>{
        window.scrollY > 20 ? store.showBackUp = true : store.showBackUp = false;
      })
    }
  },
  mounted(){
    this.checkScroll()
  }
}
</script>

<template>
  <a href="#home" :class="{'show' : store.showBackUp}"><img src="../../assets/img/image-21.svg" alt=""></a>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/vars" as *;
  a{
    position: fixed;
    bottom: 0px;
    right: 30px;
    opacity: 0;
    border: 2px solid $secondary-color-light;
    display: block;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    img{
      filter: invert(20%);
    }
    &.show{
      bottom: 30px;
      opacity: 1;
    }
  }
</style>