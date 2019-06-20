<template>
  <div class="actors-show">

      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>Known for: {{ actor.known_for }}</p>
      <p>Gender: {{ actor.gender }}</p>
      <p>Age: {{ actor.age }}</p>
<!--       <p>Movies: {{ actor.movies }}</p>
 -->    
    <button>
      <router-link v-bind:to="'/actors/' + actor.id + '/edit'">Edit actor</router-link>
    </button><br>

    <button v-on:click="destroyactor(actor)">Destroy actor</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      actor: {}
    };
  },
  created: function() {
    axios.get("/api/actors/" + this.$route.params.id).then(response => {
      this.actor = response.data;
      console.log(this.actor);
    });
  },
  methods: {
    destroyactor: function(actor) {
      axios.delete("/api/actors/" + actor.id).then(response => {
        var index = this.actors.indexOf(actor);
        this.actors.splice(index, 1);
      });
    }
  }
};
</script>