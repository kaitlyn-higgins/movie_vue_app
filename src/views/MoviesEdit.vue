<template>
  <div class="movies-edit">

<!--     <h1>Edit Movie</h1>
 -->
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <section id="contact">
         <div class="container">
              <div class="row">

                   <div class="col-md-offset-1 col-md-10 col-sm-12">
                        <h2>Edit a movie</h2>
                        <p>Thanks for improving upon our posting!</p>

                        <form v-on:submit.prevent="submit()" action="#" method="post">
                             <div class="col-md-4 col-sm-4">
                                  Title:<input name="name" type="text" class="form-control" id="name" placeholder="Title" v-model="movie.title">
                             </div>
                             <div class="col-md-4 col-sm-4">
                                  Year Released<input name="name" type="number" class="form-control" id="name" placeholder="Year Released" v-model="movie.year">
                             </div>
<!--                              <div class="col-md-12 col-sm-12">
                                  <textarea name="message" rows="5" class="form-control" id="message" placeholder="Message"></textarea>
                             </div>  -->                          
                             <div class="col-md-12 col-sm-12">
                                  Plot<textarea name="message" rows="5" class="form-control" id="message" placeholder="Plot" v-model="movie.plot"></textarea>
                             </div>                             
                             <div class="col-md-4 col-sm-4">
                                  Director<input name="name" type="text" class="form-control" id="name" placeholder="Director" v-model="movie.director">
                             </div>                             
                             <div class="col-md-4 col-sm-4">
                                  In English?<input name="name" type="number" class="form-control" id="name" placeholder="In English?" v-model="movie.english">
                             </div>
                             <div class="col-md-3 col-sm-6">
                                  <input name="submit" type="submit" class="form-control" id="submit" v-on:click="submit(movie)" value="Submit">
                             </div>
                        </form>
                   </div>

              </div>
         </div>
    </section>




<!--   <form v-on:submit.prevent="submit()">
    <div>
      Title: <input type="text" v-model="movie.title"><br>
      Year Released: <input type="number" v-model="movie.year"><br>
      Plot: <input type="text" v-model="movie.plot"><br>
      Director: <input type="textbox" v-model="movie.director"><br>
      In English?: <input type="text" v-model="movie.english"><br>
    </div>

    <button v-on:click="submit(movie)">Update Movie</button>
  </form> -->

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