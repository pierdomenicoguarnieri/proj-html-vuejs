<script>
export default {
  name: "Cta"
}
</script>

<template>
  <div class="container py-5">

    <div class="row row-cols-2 py-5">

      <!-- Left col -->
      <div class="col pe-4 text-uppercase">

        <span>collaborate</span>
        <h2 class="my-4">Want to work with us? leave us a message!</h2>
        <p>
          Duis sit amet congue ipsum. Nulla maximus My venenatis posuere.To The Mauris ut tempus Suspendisse porta tincidunt lectus non of me pellentesque. At A Sed blandit at diam sit amet Orci varius natoque penatibus et dis dis to parturient montes, My Car nascetur ridiculus Sed feugiat lacus in erat egestas, quis eleifend lacus imperdiet.
        </p>

      </div>
      
      <!-- Right col -->
      <div class="col mt-5 ps-4">

        <!-- Input wrapper -->
        <div class="pg-input-wrapper d-flex flex-column py-2">

          <!-- Fisrt row -->
          <div class="row row-cols-2 mb-5">

            <!-- Left col -->
            <div class="col">
              <input type="text" class="w-100" placeholder="Your name">
            </div>

            <!-- Right col -->
            <div class="col">
              <input type="text" class="w-100" placeholder="Your email">
            </div>
          </div>

          <!-- Second row -->
          <div class="row row-cols-2 mb-5">

            <!-- Left col -->
            <div class="col">
              <input type="text" class="w-100" placeholder="Mobile number">
            </div>

            <!-- Right col -->
            <div class="col">
              <input type="text" class="w-100" placeholder="Your pincode">
            </div>

          </div>

          <!-- Input text area -->
          <input type="text-area" class="text-area-input mb-5" placeholder="Enter your message">
          
          <!-- Submit button -->
          <button type="button">Submit now</button>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/vars" as *;
  

  span{
    font-size: 14px;
  }
  h2{
    font-size: $fs-x-larger;
  }
  p{
    text-transform: none;
    color: $secondary-color-light;
    font-size: 18px;
  }

  input{
    border: none;
    background-color: lighten($secondary-color-light, 50%);
    padding: 10px 15px;
    font-size: 18px;
    color: lighten($secondary-color , 5%);
    box-shadow: none;
    transition: all .3s;
    &:focus{
      outline: none;
      box-shadow: 0 5px 10px rgba($secondary-color, 10%);
    }
    &.text-area-input{
      resize: both;
      min-height: 200px;
    }
  }
  button{
    text-transform: uppercase;
    border: none;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 12px 0;
    font-weight: $fw-bold;
  }
</style>