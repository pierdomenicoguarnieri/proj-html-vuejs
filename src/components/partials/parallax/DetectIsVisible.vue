<script>
export default {
  name: "DetectIsVisible.vue",
  methods:{
    checkIsVisible(){
      const parallax = document.getElementById("parallax1");
      let scrollY;
      console.log(parallax);
      window.addEventListener('scroll',() =>{
        scrollY = window.scrollY
        scrollY > 2500 ? this.$emit("startCount") : null
      })
      
    }
  },
  mounted(){
    this.checkIsVisible();
  }
}
</script>

<template>

</template>

<style>

</style>