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
};
</script>

<template>
  <div class="col">
    <div class="card rounded">
      <img class="img-fluid poster" :src="img_url + results.poster" alt="" />
      <div class="card-text text-start pt-5 ps-2">
        <h5>Titolo: {{ results.title }}</h5>
        <h5>Titolo originale: {{ results.o_title }}</h5>
        <p>Media di voti: {{ results.vote }}</p>
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
</style>
