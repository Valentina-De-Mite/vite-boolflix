<script>
import { state } from "./state.js";
import axios from "axios";
import movieCard from "./components/movieCard.vue";

export default {
  name: "App",
  data() {
    return {
      state,
      api_url:
        "https://api.themoviedb.org/3/search/movie?api_key=3251d53895cc1c147c63e0202c2fe26d&query=",
    };
  },

  methods: {
    callApi(urlMovie) {
      axios
        .get(this.api_url + urlMovie)
        .then((resp) => {
          this.state.movies = resp.data.results;
          console.log(resp.data.results);
        })
        .catch((err) => {
          console.error(err.message);
          this.state.errorMessage = err.message;
        });
    },

    Search() {
      let urlMovie = this.state.searchInput;

      if (urlMovie != "") {
        console.log(urlMovie);

        this.callApi(urlMovie);
      } else {
        console.log("OPS: c'e' statro un problema!");
      }
    },
  },

  components: {
    movieCard,
  },
};
</script>

<template>
  <body>
    <div class="container">
      <div class="searchbox py-5">
        <input class="w-50 ps-2" type="search" v-model="state.searchInput" />
        <button @click="Search">Cerca</button>
      </div>

      <div class="row row-cols-2 row-cols-md-4 g-4 my-5">
        <movieCard v-for="movie in state.movies" :movie="movie"></movieCard>
      </div>
    </div>
  </body>
</template>

<style>
body {
  background-color: rgb(76, 76, 76);
}
</style>
