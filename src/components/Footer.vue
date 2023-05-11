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
      <!-- FooterTop component -->
      <FooterTop/>
      
      <!-- Copyright container -->
      <div class="pg-copyright text-center w-100 py-4">
        <span>© 2023 All Rights Reserved. Developed By TemplateMela</span>
      </div>

    </div>
    
  </footer>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/vars" as *;

  footer{
    background-color: $secondary-color;
    color: $primary-color;
    .pg-copyright{
      color: darken($primary-color, 20%);
      font-size: 17px;
    }
  }
</style>