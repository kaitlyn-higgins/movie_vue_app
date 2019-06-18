<template>
  <div class="movies-show">

      <h2>{{ movie.title }}</h2>
      <p>Year released: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Directed by: {{ movie.director }}</p>
      <p>In English: {{ movie.english }}</p>
      <p>Movie Genres: {{ movie.genres }}</p>
    
    <button>
      <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit Movie</router-link>
    </button><br>

    <button v-on:click="destroyMovie(movie)">Destroy Movie</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movie: {}
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },
  methods: {
    destroyMovie: function(movie) {
      axios.delete("/api/movies/" + movie.id).then(response => {
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    }
  }
};
</script>