<script>
import AboutUs from './partials/AboutUs.vue';
import Parallax from './partials/Parallax.vue';
import Section from './partials/Section.vue'
export default {
  name: "Main",
  components: {
    Section,
    AboutUs,
    Parallax
}
}
</script>

<template>
  <Section smallTitle="pelicula studio" title="this is what we do"/>
  <AboutUs/>
  <Section smallTitle="your watchlist" title="best hits movie"/>
  <Parallax className="img-1"/>
  <Section smallTitle="the pericuros" title="meet the team"/>
  <Parallax className="img-2"/>
  <Section smallTitle="latest news" title="articles updated daily"/>
  <Parallax className="img-3"/>
</template>

<style lang="scss" scoped>

</style>