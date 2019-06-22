<template>
  <div class="actors-index">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>


    <!-- Home Section -->

    <section id="home" class="main-gallery parallax-section">
         <div class="overlay"></div>
         <div class="container">
              <div class="row">

                   <div class="col-md-12 col-sm-12">
                        <h1>Your favorite actors...</h1>
                   </div>

              </div>
         </div>
    </section>

    <!-- search bar -->

    <h3>
      <label for="name">Search by name: </label>
      <input type="text" id="name" placeholder="enter name" v-model="nameFilter" list="names">
    </h3>

    <!-- autocomplete -->

    <datalist id="names">
      <option v-for="actor in actors">{{ actor.first_name }} {{ actor.last_name }}</option>
    </datalist>


    <!-- order by button -->

    <div>
      <button class="smoothScroll btn btn-default" v-on:click="setSortAttribute('first_name')">Sort by first name</button>

      <i v-if="sortAttribute === 'first_name' && sortAscending === 1" class="icon-arrow-up"></i>
      <i v-if="sortAttribute === 'first_name' && sortAscending === -1" class="icon-arrow-down"></i>


      <button class="smoothScroll btn btn-default" v-on:click="setSortAttribute('last_name')">Sort by last name</button>

      <i v-if="sortAttribute === 'last_name' && sortAscending === 1" class="icon-arrow-up"></i>
      <i v-if="sortAttribute === 'last_name' && sortAscending === -1" class="icon-arrow-down"></i>


    </div>

    <!-- main content -->

    <section id="about">
         <div class="container">
              <div class="row">

                   <div class="col-md-offset-1 col-md-10 col-sm-12">
                    
                        <div class="col-md-4 col-sm-4" v-for="actor in orderBy(filterBy(actors, nameFilter, 'first_name', 'last_name'), sortAttribute, sortAscending)">


                             <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
                             <p>Known For: <strong>{{ actor.known_for }}</strong></p>
                            <router-link v-bind:to="'/actors/' + actor.id">
                               <button class="smoothScroll btn btn-default">More Info</button>
                             </router-link>
                        </div>

                       
                   </div>

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
      actors: [],
      actor: {},
      errors: [],
      nameFilter: '',
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/actors/").then(response => {
      this.actors = response.data;
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