<template>
  <div class="actors-edit">

    <h1>Edit actor</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

  <form v-on:submit.prevent="submit()">
    <div>
      First Name: <input type="text" v-model="actor.first_name"><br>
      Last Name: <input type="text" v-model="actor.last_name"><br>
      Known For: <input type="text" v-model="actor.known_for"><br>
      Gender: <input type="textbox" v-model="actor.gender"><br>
      Age: <input type="age" v-model="actor.age"><br>
    </div>

    <button v-on:click="submit(actor)">Update actor</button>
  </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
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
    submit: function() {
      var params = {
        first_name: this.actor.first_name,
        last_name: this.actor.last_name,
        known_for: this.actor.known_for,
        gender: this.actor.gender,
        age: this.actor.age
      };
      axios.patch("/api/actors/" + this.actor.id, params).then(response => {
        this.$router.push("/actors/" + this.actor.id);
        // console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>