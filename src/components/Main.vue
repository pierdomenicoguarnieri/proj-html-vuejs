<script>
import Cta from './Cta.vue';
import AboutUs from './partials/AboutUs.vue';
import BackToTop from './partials/BackToTop.vue';
import Parallax from './partials/Parallax.vue';
import Section from './partials/Section.vue'
export default {
  name: "Main",
  components: {
    Section,
    AboutUs,
    Parallax,
    BackToTop,
    Cta
}
}
</script>

<template>
  <main>
    <Section smallTitle="pelicula studio" title="this is what we do"/>

    <AboutUs/>

    <Section smallTitle="your watchlist" title="best hits movie"/>

    <Parallax className="img-1"/>

    <Section smallTitle="the pericuros" title="meet the team"/>

    <Parallax className="img-2"/>

    <Section smallTitle="latest news" title="articles updated daily"/>

    <Parallax className="img-3"/>

    <Cta/>

    <BackToTop/>
  </main>
</template>

<style lang="scss" scoped>
  main{
    margin-top: 90px;
  }
</style>