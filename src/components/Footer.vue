<script>
import FooterTop from './partials/FooterTop.vue';

export default {
    name: "Footer",
    components: { FooterTop }
}
</script>

<template>
  <footer>
    <div class="container pt-5">
      <FooterTop/>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/vars" as *;

  footer{
    background-color: $secondary-color;
    color: $primary-color;
  }
</style>