<template>
  <div class="movies-edit">

    <h1>Edit Movie</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

  <form v-on:submit.prevent="submit()">
    <div>
      Title: <input type="text" v-model="movie.title"><br>
      Year Released: <input type="number" v-model="movie.year"><br>
      Plot: <input type="text" v-model="movie.plot"><br>
      Director: <input type="textbox" v-model="movie.director"><br>
      In English?: <input type="text" v-model="movie.english"><br>
    </div>

    <button v-on:click="submit(movie)">Update Movie</button>
  </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
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
    submit: function() {
      var params = {
        title: this.movie.title,
        year: this.movie.year,
        plot: this.movie.plot,
        director: this.movie.director,
        english: this.movie.english
      };
      axios.patch("/api/movies/" + this.movie.id, params).then(response => {
        this.$router.push("/movies/" + this.movie.id);
        // console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>