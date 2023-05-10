<script>
export default {
  name: "Parallax",
  props:{
    className: String
  }
}
</script>

<template>
  <div class="pg-parallax" :class="className">

  </div>
</template>

<style lang="scss" scoped>
  .pg-parallax {
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img-1{
    background-image: url("../../assets/img/Parallax-01.jpg");
  }
  .img-2{
    background-image: url("../../assets/img/Parallax-02.jpg");
  }
  .img-3{
    background-image: url("../../assets/img/Parallax-03.jpg");
  }
</style>