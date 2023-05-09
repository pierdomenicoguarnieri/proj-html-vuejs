<script>
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";
import Jumbotron from "./components/Jumbotron.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name:"App",
  components:{
    Header,
    Modal,
    Jumbotron,
    Main,
    Footer
  }
}
</script>

<template>
  <Header/>
  <Modal/>
  <Jumbotron/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
  @use "./scss/main.scss" as *;
  @use "./scss/partials/typography" as *;
</style>