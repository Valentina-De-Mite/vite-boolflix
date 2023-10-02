<script>
import { state } from "./state.js";
import movieCard from "./components/movieCard.vue";
import AppHeader from "./components/AppHeader.vue";
import { Carousel } from "bootstrap";
import CarouselComponent from "./components/CarouselComponent.vue";

export default {
  name: "App",
  data() {
    return {
      state,
    };
  },

  components: {
    movieCard,
    AppHeader,
    Carousel,
    CarouselComponent,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <body>
    <div class="container-fluid px-5">
      <CarouselComponent></CarouselComponent>
      <div class="row row-cols-2 row-cols-md-5 g-4 my-5">
        <movieCard
          v-for="result in state.results"
          :results="result"
        ></movieCard>
      </div>
    </div>
  </body>
</template>

<style>
body {
  background-color: rgb(28, 28, 28);
}
</style>
