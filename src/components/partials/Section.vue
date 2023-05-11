<script>
import Card from './cards/Card.vue';
import CardImages from './cards/CardImages.vue';
import CardSwiper from './cards/CardSwiper.vue';
import { cardSection1, cardSection2, cardSection3 } from '../../data/menus';
export default {
  name: "Section",
  data(){
    return{
      cardSection1,
      cardSection2,
      cardSection3
    }
  },
  components: {
    Card,
    CardImages,
    CardSwiper
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

    <div class="container" v-if="smallTitle == 'pelicula studio'">
      <div class="row row-cols-3">
        <Card v-for="(card, index) in cardSection1" :key="index" :title="card.title" :text="card.text" :image="card.image"/>
      </div>
    </div>

    <div class="container" v-if="smallTitle == 'your watchlist'">
      <div class="row row-cols-3">
        <CardImages v-for="(card, index) in cardSection2" :key="index" :title="card.title" :text="card.category" :image="card.image"/>
      </div>
    </div>

    <div class="container" v-if="smallTitle == 'the pericuros'">
      <div class="row row-cols-4">
        <CardImages v-for="(card, index) in cardSection3" :key="index" :title="card.name" :text="card.role" :image="card.image"/>
      </div>
    </div>

    <div class="container pg-custom-container" v-if="smallTitle == 'latest news'">
      <CardSwiper/>
    </div>

    
  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/vars" as *;

  .container.pg-custom-container{
    max-width: 1500px !important;
  }
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