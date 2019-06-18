<template>
  <div class="movies-new">

    <h1>Add New Movie</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <div>
      Title: <input type="text" v-model="newMovieTitle"><br>
      Year Released: <input type="number" v-model="newMovieYear"><br>
      Plot: <input type="text" v-model="newMoviePlot"><br>
      Director: <input type="textbox" v-model="newMovieDirector"><br>
      In English?: <input type="text" v-model="newMovieEnglish"><br>
    </div>

    <button v-on:click="createMovie()">Create Movie</button>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
      errors: []
    };
  },
  created: function() {
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
        this.$router.push("/movies-index");
        // console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>