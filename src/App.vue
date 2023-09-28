<script>
import { state } from "./state.js";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="searchbox py-5">
      <input class="w-50 ps-2" type="search" v-model="state.searchInput" />
      <button>Cerca</button>
    </div>
  </div>
</template>

<style></style>
