<template>
  <div class="movies-index">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>


    <!-- Home Section -->

    <section id="home" class="main-single-post parallax-section">
         <div class="overlay"></div>
         <div class="container">
              <div class="row">

                   <div class="col-md-12 col-sm-12">
                        <h1>The best movies ever...</h1>
                   </div>

              </div>
         </div>
    </section>


    <!-- search bar -->

    <h3>
      <label for="title">Search by title: </label>
      <input type="text" id="title" placeholder="enter title" v-model="titleFilter" list="titles">
    </h3>

    <!-- autocomplete -->

    <datalist id="titles">
      <option v-for="movie in movies">{{ movie.title }}</option>
    </datalist>


    <!-- order by button -->

    <div>
      <button class="smoothScroll btn btn-default" v-on:click="setSortAttribute('title')">Sort by title</button>

      <i v-if="sortAttribute === 'title' && sortAscending === 1" class="icon-arrow-up"></i>
      <i v-if="sortAttribute === 'title' && sortAscending === -1" class="icon-arrow-down"></i>


      <button class="smoothScroll btn btn-default" v-on:click="setSortAttribute('year')">Sort by year released</button>

      <i v-if="sortAttribute === 'year' && sortAscending === 1" class="icon-arrow-up"></i>
      <i v-if="sortAttribute === 'year' && sortAscending === -1" class="icon-arrow-down"></i>

    </div>

    <!-- Main content -->

    <section id="about">
         <div class="container">
              <div class="row">

                   <transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated bounce" class="col-md-offset-1 col-md-10 col-sm-12">

                        <div class="col-md-4 col-sm-4" v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), sortAttribute, sortAscending)" v-bind:key="movie.id">

                             <h2>{{ movie.title }}</h2>
                             <p>Year released: <strong>{{ movie.year }}</strong></p>
                             <p>Movie Genres: <strong>{{ movie.genres }}</strong></p>
                             <router-link v-bind:to="'/movies/' + movie.id">
                               <button class="smoothScroll btn btn-default">More Info</button>
                             </router-link>
                        </div>

                   </transition-group>

              </div>
         </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";


export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
      movie: {},
      errors: [],
      titleFilter: '',
      sortAttribute: "",
      sortAscending: 1
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

  methods: {
    setSortAttribute: function(attribute) {
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    }
  }
};
</script>