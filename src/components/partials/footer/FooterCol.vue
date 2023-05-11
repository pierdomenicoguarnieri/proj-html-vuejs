<script>
export default {
  name: "FooterCol",
  props:{
    title: String,
    array: Array
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="col px-4">
    <span class="title">{{ title }}</span>
    <nav class="mt-3">
      <ul class="list-unstyled">
        <li v-for="(link, index) in array" :key="index" class="d-flex align-items-start py-2">
          <img v-if="link.image != ''" :src="getImage(`../../../assets/img/${link.image}`)" class="me-3" alt="">
          <span class="undertext" :class="{'pg-link' : link.isLink}">{{ link.text }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .title{
    text-transform: uppercase;
    font-size: 20px;
  }

  li{
    img{
      margin-top: 5px;
      width: 15px;
    }
    span.undertext{
      color: darken($primary-color, 30%);
      font-size: 18px;
      text-transform: capitalize;
      transition: all .3s;
      &.pg-link:hover{
        cursor: pointer;
        color: darken($primary-color, 10%);
      }
    }
  }
</style>