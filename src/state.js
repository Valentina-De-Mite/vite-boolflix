import { reactive } from "vue";

export const state = reactive({
  api_url_movies:
    "https://api.themoviedb.org/3/search/movie?api_key=3251d53895cc1c147c63e0202c2fe26d",
  searchInput: "",
  title: null,
  originalTitle: null,
  language: null,
  score: null,
});
