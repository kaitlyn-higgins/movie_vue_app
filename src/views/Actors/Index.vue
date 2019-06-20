<template>
  <div class="actors-index">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Actors</h1>
    <div v-for="actor in actors">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>Known for: {{ actor.known_for }}</p>
      <p>actor Genres: {{ actor.genres }}</p>
    
    <router-link v-bind:to="'/actors/' + actor.id">
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
      actors: [],
      actor: {},
      errors: []
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
};
</script>