<script>
export default {
  name: "Breadcrumb"
}
</script>

<template>
  <div class="pg-aboutus-container d-flex justify-content-end align-items-center">
    <div class="pg-text-wrapper h-100 w-50 text-white d-flex flex-column justify-content-center">
      <span class="text-uppercase mb-3">About us</span>
      <h2 class="text-uppercase mb-3">High quality cinematics</h2>
      <p>
        Orci varius penatibus et magnis dis parturient In the montes, nascetur ridiculus mus. Nulla A nisi ut mi efficitur hendrerit. nunc urna. quisque a partr hendrerit purus erat, nec dapibus sem sed. phasellus sed eli molestie, porttitor ligula of the egestas, mattis augue. quisque et rhoncus justo. suspendisse luctus pharetra eleme tcondimentum.
      </p>
      <div class="pg-btn-wrapper mt-3">
        <button type="button" class="text-uppercase">read more</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../scss/partials/vars" as *;
  .pg-aboutus-container{
    height: 570px;
    background-image: url("../../assets/img/About-Us.jpg");
    .pg-text-wrapper{
      h2{
        font-size: $fs-x-large !important;
      }
      p{
        max-width: 720px;
        font-size: 18px !important;
        letter-spacing: 1px;
      }
      button{
        border: 0;
        background-color: $primary-color;
        color: $secondary-color;
        font-size: 1.1rem;
        padding: 10px 30px;
        font-weight: 700 !important;
      }
    }
  }
</style>