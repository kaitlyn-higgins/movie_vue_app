<template>
  <div class="actors-new">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Add New Actor</h1>


    <form v-on:submit.prevent="submit()">
          
          <div>
               First Name: <input type="text" v-model="newActorFirstName"><br>
               Last Name: <input type="text" v-model="newActorLastName"><br>
               Known For: <input type="text" v-model="newActorKnownFor"><br>
               Gender: <input type="text" v-model="newActorGender"><br>
               Age: <input type="number" v-model="newActorAge"><br>
               Movie Id: <input type="number" v-model="newActorMovieId"><br>
             </div>
<!--             <label for="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Jake" v-model="newActorFirstName">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Johnson" v-model="newActorLastName">
            <label for="knownFor">Known For</label>
            <input type="text" id="knownFor" placeholder="New Girl" v-model="newActorKnownFor">
            <label for="gender">Gender</label>
            <input type="text" id="gender" placeholder="M" v-model="newActorGender">
            <label for="age">Age</label>
            <input type="number" id="age" placeholder="41" v-model="newActorAge"> -->
          <button type="submit">Create Actor</button>
        </form>


<!--     <div>
      First Name: <input type="text" v-model="newActorFirstName"><br>
      Last Name: <input type="text" v-model="newActorLastName"><br>
      Known For: <input type="text" v-model="newActorKnownFor"><br>
      Gender: <input type="text" v-model="newActorGender"><br>
      Age: <input type="number" v-model="newActorAge"><br>
    </div>

    <button v-on:click="createActor()">Create Actor</button> -->


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newActorFirstName: "",
      newActorLastName: "",
      newActorKnownFor: "",
      newActorGender: "",
      newActorAge: "",
      newActorMovieId: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.newActorFirstName,
        last_name: this.newActorLastName,
        known_for: this.newActorKnownFor,
        gender: this.newActorGender,
        age: this.newActorAge,
        movie_id: this.newActorMovieId
      };
      axios.post("/api/actors", params).then(response => {
        this.$router.push("/actors-index");
        // console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>