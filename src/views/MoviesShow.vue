<template>
  <div class="movies-show">

        <!-- About Section -->

        <section id="about">
             <div class="container">
                  <div class="row">

                       <div class="col-md-offset-1 col-md-10 col-sm-12">
    <!--                         <div class="col-md-4 col-sm-4">
                                 <h2>Our Story</h2>
                                 <p>Integer eget tortor justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <strong>Ut enim ad minim veniam, quis nostrud</strong> exercitation ullamco.</p>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                 <h2>New Design</h2>
                                 <p>Quisque vitae felis eros. Suspendisse quis leo molestie, iaculis sapien id, hendrerit augue. Phasellus fermentum.</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                 <h2>HTML CSS</h2>
                                 <p>Vivamus non scelerisque ex, et interdum leo. In bibendum lacus vitae felis egestas, at consectetur metus facilisis.</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div> -->
<!--                               <h2>{{ movie.title }}</h2>
                              <p>Year released: {{ movie.year }}</p>
                              <p>Plot: {{ movie.plot }}</p>
                              <p>Directed by: {{ movie.director }}</p>
                              <p>In English: {{ movie.english }}</p>
                              <p>Movie Genres: {{ movie.genres }}</p>
                            
                            <button>
                              <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit Movie</router-link>
                            </button><br>

                            <button v-on:click="destroyMovie(movie)">Destroy Movie</button> -->

                            <div class="col-md-6 col-sm-6">

                                 <h2>{{ movie.title }}</h2>
                                    <h4><strong>Year released: {{ movie.year }}</strong></h4>
                                    <h4><strong>Directed by: {{ movie.director }}</strong></h4>
                                    <h4><strong>In English: {{ movie.english }}</strong></h4>
                                    <h4><strong>Movie Genres: {{ movie.genres }}</strong></h4>
                                    <p>Plot: {{ movie.plot }}</p>

                                    <button class="smoothScroll btn btn-default">
                                      <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit Movie</router-link>
                                    </button><br>

                                    <button v-on:click="destroymovie(movie)" class="smoothScroll btn btn-default">Destroy movie</button>
                            </div>

                            <div class="col-md-6 col-sm-6">
                                 <img src="https://www.dreadcentral.com/wp-content/uploads/2019/05/Dark-Crystal-Age-of-Resistance-Banner.jpg" class="img-responsive" alt="About Image">
                            </div>

                            <div class="col-md-6 col-sm-6">
                                 <img src="https://theplaylist.net/wp-content/uploads/2017/05/The-Dark-Crystal-1200x520.jpg" class="img-responsive" alt="About Image">
                            </div>    <!-- 
                            <div class="clearfix"></div>

                            <div class="col-md-4 col-sm-4">
                                 <img src="images/about-image1.jpg" class="img-responsive" alt="Blog Image">
                                 <h3>Section One</h3>
                                 <p>Pellentesque lobortis velit mi, sed volutpat enim facilisis at. Maecenas quis pulvinar neque, non dapibus orci.</p>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                 <img src="images/about-image2.jpg" class="img-responsive" alt="Blog Image">
                                 <h3>Section Two</h3>
                                 <p>Pellentesque lobortis velit mi, sed volutpat enim facilisis at. Maecenas quis pulvinar neque, non dapibus orci.</p>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                 <img src="images/about-image3.jpg" class="img-responsive" alt="Blog Image">
                                 <h3>Section Three</h3>
                                 <p>Pellentesque lobortis velit mi, sed volutpat enim facilisis at. Maecenas quis pulvinar neque, non dapibus orci.</p>
                            </div>
                  
                            <h3>One Column</h3>
                            <p>Fusce finibus ac orci ut feugiat. Duis accumsan dui non augue ullamcorper, at porta elit lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras at est non quam mattis hendrerit. Fusce purus massa, pretium malesuada eros nec, feugiat iaculis sem.</p> -->
                       </div>

                  </div>
             </div>
        </section>

<!--       <h2>{{ movie.title }}</h2>
      <p>Year released: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Directed by: {{ movie.director }}</p>
      <p>In English: {{ movie.english }}</p>
      <p>Movie Genres: {{ movie.genres }}</p>
    
    <button>
      <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit Movie</router-link>
    </button><br>

    <button v-on:click="destroyMovie(movie)">Destroy Movie</button> -->

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