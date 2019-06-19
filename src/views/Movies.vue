<template>
  <div class="movies">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Add New Movie</h1>
    <div>
      Title: <input type="text" v-model="newMovieTitle"><br>
      Year Released: <input type="number" v-model="newMovieYear"><br>
      Plot: <input type="text" v-model="newMoviePlot"><br>
      Director: <input type="textbox" v-model="newMovieDirector"><br>
      In English?: <input type="text" v-model="newMovieEnglish"><br>
    </div>
    <button v-on:click="createMovie()">Create Movie</button>


    <h1>Movies</h1>
    <div v-for="movie in movies">
      <h2>{{ movie.title }}</h2>
      <p>Year released: {{ movie.year }}</p>
      <p>Movie Genres: {{ movie.genres }}</p>
      <button v-on:click="showMovie(movie)">See More Details</button>
      <div v-if="currentMovie === movie">
        <p>Plot: {{ movie.plot }}</p>
        <p>Directed by: {{ movie.director }}</p>
        <p>In English: {{ movie.english }}</p>
        <div>
          Title: <input type="text" v-model="movie.title"><br>
          Year Released: <input type="number" v-model="movie.year"><br>
          Plot: <input type="text" v-model="movie.plot"><br>
          Director: <input type="textbox" v-model="movie.director"><br>
          In English?: <input type="text" v-model="movie.english"><br>
          <button v-on:click="updateMovie(movie)">Update Movie</button>
          <button v-on:click="destroyMovie(movie)">Destroy Movie</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movies: [],
      errors: [],
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
      currentMovie: {}
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      this.movies = response.data;
    });
  },
  methods: {
    createMovie: function() {
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
        english: this.newMovieEnglish
      };
      axios.post("/api/movies", params).then(response => {
        this.movies.push(response.data);
        this.newMovieTitle = "";
        this.newMovieYear = "";
        this.newMoviePlot = "";
        this.newMovieDirector = "";
        this.newMovieEnglish = "";
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    showMovie: function(movie) {
      if (this.currentMovie === movie) {
        this.currentMovie = {};
      } else {
        this.currentMovie = movie;
      }
    },
    updateMovie: function(movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        director: movie.director,
        english: movie.english
      };
      axios.patch("/api/movies/" + movie.id, params).then(response => {
        this.currentMovie = {};
      });
    },
    destroyMovie: function(movie) {
      axios.delete("/api/movies/" + movie.id).then(response => {
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    }
  }
};
</script>