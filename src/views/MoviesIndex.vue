<template>
  <div class="movies-index">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>All Movies</h1>
    <div v-for="movie in movies">
      <h2>{{ movie.title }}</h2>
      <p>Year released: {{ movie.year }}</p>
<!--       <p>Plot: {{ movie.plot }}</p>
      <p>Directed by: {{ movie.director }}</p>
      <p>In English: {{ movie.english }}</p> -->
      <p>Movie Genres: {{ movie.genres }}</p>
    
    <router-link v-bind:to="'/movies/' + movie.id">
      <button>More Info</button>
    </router-link>

    </div>
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movies: [],
      movie: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/movies/").then(response => {
      this.movies = response.data;
      console.log(response.data);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
};
</script>