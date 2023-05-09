<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="container-fluid h-100 d-flex justify-content-between align-items-center px-5">
      <div class="pg-logo">
        <span>Logo</span>
      </div>

      <nav>
        Menu
      </nav>

      <nav>
        Social
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../sass/partials/vars" as *;

  header{
    height: 80px;
    background-color: $primary-color;
    box-shadow: 0 5px 10px rgba($secondary-color, 0.1);
  }
</style>