<script>
import Card from './cards/Card.vue';
import { cardSection1 } from '../../data/menus';
export default {
  name: "Section",
  data(){
    return{
      cardSection1
    }
  },
  components: {
    Card 
  },
  props:{
    smallTitle: String,
    title: String,
  }
}
</script>

<template>
  <section class="py-5 d-flex align-items-center justify-content-center flex-column text-uppercase">
    <span class="mb-4">{{smallTitle}}</span>
    <h2 class="mb-5">{{title}}</h2>

    <div class="container">
      <div class="row row-cols-3">
        <Card v-for="(card, index) in cardSection1" :key="index" :title="card.title" :text="card.text" :image="card.image"/>
      </div>
    </div>

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