import { reactive } from "vue";

export const state = reactive({
  searchInput: "",
  results: [],

  addToResult(arrayToAdd, isMovie) {
    if (isMovie) {
      arrayToAdd.forEach((movie) => {
        this.results.push({
          poster: movie.poster_path,
          title: movie.title,
          o_title: movie.original_title,
          vote: movie.vote_average,
          language: movie.original_language,
        });
      });
    } else {
      arrayToAdd.forEach((serie) => {
        this.results.push({
          poster: serie.poster_path,
          title: serie.name,
          o_title: serie.original_name,
          vote: serie.vote_average,
          language: serie.original_language,
        });
      });
      console.log(this.results);
    }
  },
  createResults() {
    console.log(this.movies);
    if (this.movies != null) {
      this.movies.forEach((movie) => {
        this.results.push({
          poster: movie.poster_path,
          title: movie.title,
          o_title: movie.original_title,
          vote: movie.vote_avarage,
          language: movie.original_language,
        });
      });

      this.series.forEach((serie) => {
        this.results.push({
          poster: serie.poster_path,
          title: serie.name,
          o_title: serie.original_name,
          vote: serie.vote_avarage,
          language: serie.original_language,
        });
      });
    }
  },
});
