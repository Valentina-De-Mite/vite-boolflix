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

      api_url_tv:
        "https://api.themoviedb.org/3/search/tv?api_key=3251d53895cc1c147c63e0202c2fe26d&query=",
      searchedThing: "",
    };
  },

  methods: {
    callApi(input, isMovie) {
      let url = "";
      if (isMovie == true) {
        url = this.api_url;
      } else {
        url = this.api_url_tv;
      }
      console.log(url);
      axios
        .get(url + input)

        .then((resp) => {
          if (isMovie) {
            this.state.addToResult(resp.data.results, true);
            // this.state.movies = resp.data.results;
            // console.log(this.state.movies);
          } else {
            this.state.addToResult(resp.data.results, false);
            // this.state.series = resp.data.results;
            // console.log(this.state.series);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    Search() {
      let input = this.state.searchInput;

      if (input != "") {
        // console.log(input);

        this.callApi(input, true);

        this.callApi(input, false);
        // this.state.createResults();
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
  background-color: rgb(76, 76, 76);
}
</style>
