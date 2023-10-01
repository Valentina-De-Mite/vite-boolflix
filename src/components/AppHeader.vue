<script>
import { state } from "../state.js";
import axios from "axios";
export default {
  name: "AppHeader",

  data() {
    return {
      state,
      api_url:
        "https://api.themoviedb.org/3/search/movie?api_key=3251d53895cc1c147c63e0202c2fe26d&query=",

      api_url_tv:
        "https://api.themoviedb.org/3/search/tv?api_key=3251d53895cc1c147c63e0202c2fe26d&query=",
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
};
</script>

<template>
  <div class="row justify-content-between fs-5 shadow py-3">
    <div class="col-8 d-flex align-items-center text-light">
      <img
        class="w-25 p-3 me-2"
        src="../assets/img/logo-no-background.png"
        alt=""
      />
      <a class="nav-item nav-link active bordo" href="#" aria-current="page"
        >Home <span class="visually-hidden">(current)</span></a
      >
      <a class="nav-item nav-link px-3 active" href="#">Serie TV</a>
      <a class="nav-item nav-link px-3 active" href="#">Serie TV</a>
      <a class="nav-item nav-link px-3 active" href="#">Film</a>
      <a class="nav-item nav-link px-3 active" href="#">Nuovi e Popolari</a>
      <a class="nav-item nav-link px-3 active" href="#">La mia Lista</a>
      <a class="nav-item nav-link px-3 active" href="#">Sfoglia per lingua</a>
    </div>
    <div class="col-4 d-flex align-items-center text-light">
      <div class="input-group d-flex w-75 me-4">
        <input
          v-model="state.searchInput"
          class="form-control"
          type="search"
          placeholder="Cerca qui film, serie TV..."
          aria-label="Cerca qui film, serie TV..."
          aria-describedby="button-addon2"
        />
        <button class="btn btn-outline-secondary" @click="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="bi bi-search-heart"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"
            />
            <path
              d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
            />
          </svg>
        </button>
      </div>

      <img
        src="../assets/img/AAAABVPGd8MNBaqbEPi4pIr71tzngSEKpxT3fNIfUrw5w8Fvapf9wyAsyqKk0k8O-UwaUzgUUM1EFCLZEJjMYheRjmrbRszfAXqmE0ng.png"
        alt=""
        class="w-s ms-1"
      />
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li>
            <button class="dropdown-item" type="button">Another action</button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
svg {
  fill: white;
}

.w-s {
  width: 9%;
  border-radius: 14%;
  margin-right: 10px;
}

a.nav-link {
  text-transform: uppercase;
  padding: 1rem 0.5rem;

  &.active:hover {
    border-bottom: 1px solid white;
  }
}
</style>
