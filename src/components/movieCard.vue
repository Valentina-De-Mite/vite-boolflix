<script>
import axios from "axios";

export default {
  name: "movieCard",
  props: {
    results: Object,
  },

  data() {
    return {
      img_url: "http://image.tmdb.org/t/p/w500/",
      starHTML: "",
    };
  },

  methods: {
    getFlag_img(original_language) {
      if (original_language === "en") {
        return "src/assets/img/united_kingdom_flags_flag_17079.ico";
      }
      if (original_language === "it") {
        return "src/assets/img/italy_flags_flag_17018.ico";
      }
      if (original_language === "ja") {
        return "src/assets/img/japan_flags_flag_17019.ico";
      }
      if (original_language === "es") {
        return "src/assets/img/spain_flags_flag_17068.ico";
      }
      if (original_language === "ru") {
        return "src/assets/img/russia_flags_flag_17058.ico";
      }
      if (original_language === "fr") {
        return "src/assets/img/france_flags_flag_16999.ico";
      }
      if (original_language === "ge") {
        return "src/assets/img/germany_flags_flag_17001.ico";
      } else {
        return "src/assets/img/1497554326-multiple-flags_84867.png";
      }
    },

    check404(img_url) {
      if (img_url === null) {
      }
    },
  },
  created() {
    this.results.vote = Math.round(this.results.vote / 2);
    console.log(this.results.vote);

    let starsMarkup = "";

    for (let i = 0; i < this.results.vote; i++) {
      starsMarkup += `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>`;
    }
    this.starHTML = starsMarkup;
  },
};
</script>

<template>
  <div class="col mb-4">
    <div class="card rounded bg-dark text-light">
      <img class="img-fluid poster" :src="img_url + results.poster" alt="" />
      <div class="card-text text-start pt-5 ps-2">
        <h5>Titolo: {{ results.title }}</h5>
        <h5>Titolo originale: {{ results.o_title }}</h5>
        <div>
          <h6>Voto: <span v-html="starHTML"></span></h6>
        </div>
        <p>
          Lingua Originale:
          <img class="flag pb-3" :src="getFlag_img(results.language)" />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 100%;
}

.poster {
  height: 50%;
}
.flag {
  width: 15%;
}

.bgc-dark {
  background-color: rgb(28, 28, 28);
}
svg {
  fill: #fff71a;
}
</style>
