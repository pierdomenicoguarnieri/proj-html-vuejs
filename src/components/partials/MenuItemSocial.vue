<script>
export default {
  name: "MenuItemSocial",
  props: {
    name: String,
    img: String
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <li class="text-center">
    <a href="#">
      <img :src="getImage(`../../assets/img/image-${img}.svg`)" :alt="name" :title="name">
    </a>
  </li>
</template>

<style lang="scss" scoped>
  img{
    width: 65%;
    opacity: 100%;
    transition: all .3s;
  }
  a:hover{
    img{
      opacity: 60%;
    }
  }
</style>