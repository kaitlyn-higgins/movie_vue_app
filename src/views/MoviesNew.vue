<template>
  <div class="movies-new">

<!--     <h1>Add New Movie</h1>
 -->
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <section id="home" class="main-contact parallax-section">
         <div class="overlay"></div>
         <div class="container">
              <div class="row">

                   <div class="col-md-12 col-sm-12">
                        <h1>Share your favorites with us!</h1>
                   </div>

              </div>
         </div>
    </section>

        <section id="contact">
             <div class="container">
                  <div class="row">

                       <div class="col-md-offset-1 col-md-10 col-sm-12">
                            <h2>Add a movie</h2>
                            <p>Tell us about your favorite movie!</p>

                            <form v-on:submit.prevent="submit()" action="#" method="post">
                                 <div class="col-md-4 col-sm-4">
                                      Title:<input name="name" type="text" class="form-control" id="name" placeholder="Title" v-model="newMovieTitle">
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                      Year Released<input name="name" type="number" class="form-control" id="name" placeholder="Year Released" v-model="newMovieYear">
                                 </div>
    <!--                              <div class="col-md-12 col-sm-12">
                                      <textarea name="message" rows="5" class="form-control" id="message" placeholder="Message"></textarea>
                                 </div>  -->                          
                                 <div class="col-md-12 col-sm-12">
                                      Plot<textarea name="message" rows="5" class="form-control" id="message" placeholder="Plot" v-model="newMoviePlot"></textarea>
                                 </div>                             
                                 <div class="col-md-4 col-sm-4">
                                      Director<input name="name" type="text" class="form-control" id="name" placeholder="Director" v-model="newMovieDirector">
                                 </div>                             
                                 <div class="col-md-4 col-sm-4">
                                      In English?<input name="name" type="number" class="form-control" id="name" placeholder="In English?" v-model="newMovieEnglish">
                                 </div>
                                 <div class="col-md-3 col-sm-6">
                                      <input name="submit" type="submit" class="form-control" id="submit" v-on:click="createMovie()" value="Submit">
                                 </div>
                            </form>
                       </div>

                  </div>
             </div>
        </section>


<!--     <div>
      Title: <input type="text" v-model="newMovieTitle"><br>
      Year Released: <input type="number" v-model="newMovieYear"><br>
      Plot: <input type="text" v-model="newMoviePlot"><br>
      Director: <input type="textbox" v-model="newMovieDirector"><br>
      In English?: <input type="text" v-model="newMovieEnglish"><br>
    </div>

    <button v-on:click="createMovie()">Create Movie</button> -->


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