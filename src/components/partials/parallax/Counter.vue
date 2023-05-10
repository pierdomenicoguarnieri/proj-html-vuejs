<script>
import {store} from "../../../data/store.js";
export default {
  name: "Counter",
  data(){
    return{
      store
    }
  },
  },
  mounted(){
    this.checkIsVisible();
  }
}
</script>

<template>
  <div class="pg-counter-container py-5" id="parallax1">
    <div class="container">
      <div class="row row-cols-4 py-5">
        <div class="col py-3" v-for="element in store.counter" :key="element.name" >
          <span class="title">{{ element.numberToShow }}{{ element.plus }}</span>
          <span>{{ element.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .col{
    color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      font-size: 18px;
      text-transform: uppercase;
      font-weight: $fw-bold;
    }
    .title{
      font-size: $fs-x-larger;
    }
  }
</style>