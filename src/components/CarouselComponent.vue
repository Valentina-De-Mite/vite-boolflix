<script>
import axios from "axios";
import { state } from "../state";
export default {
  data() {
    return {
      state,
      img_url: "http://image.tmdb.org/t/p/w500/",
      activeImage: 0,
      url_movies:
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=3251d53895cc1c147c63e0202c2fe26d&week=2/10/2023 16:28",

      cards: [],

      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.callTendencyMovieApi();
  },

  methods: {
    callTendencyMovieApi() {
      let movies = [];
      console.log("ciao");
      axios

        .get(this.url_movies)

        .then((resp) => {
          console.log("chiamata riuscita");
          resp.data.results.forEach((tendencyMovie) => {
            if (movies.length <= 8) {
              movies.push(tendencyMovie);
            }
          });
          movies.forEach((tend_movie) => {
            let srcString = this.img_url + tend_movie.poster_path;
            // let movieMarkup =
            //   `<img class="img-fluid poster" :src="` +
            //   srcString +
            //   `" alt="" />`;
            this.cards.push(srcString);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    next() {
      this.activeImage++;
      if (this.activeImage > this.slides.length - 1) {
        this.activeImage = 0;
      }
      console.log(this.activeImage);
    },

    prev() {
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.slides.length - 1;
      }
      console.log(this.activeImage);
    },

    startAutoPlay() {
      this.interval = setInterval(() => {
        this.next();
      }, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.interval);
    },
  },
};
</script>

<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <img :src="cards[activeImage]" alt="" srcset="" />
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<style scoped>
.carousel {
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
</style>
