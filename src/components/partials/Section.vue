<script>
export default {
  name: "Section",
  props:{
    smallTitle: String,
    title: String,
  }
}
</script>

<template>
  <section class="py-5 d-flex align-items-center justify-content-center flex-column text-uppercase">
    <span class="mb-4">{{smallTitle}}</span>
    <h2>{{title}}</h2>
  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/vars" as *;
  section{
    background-color: $primary-color;
  }
  span{
    font-weight: $fw-bold !important;
    font-size: $fs-small;
    letter-spacing: 2px;
  }
  h2{
    font-size: $fs-x-large !important;
    letter-spacing: 0.6px;
  }
</style>