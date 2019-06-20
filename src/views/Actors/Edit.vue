<template>
  <div class="actors-edit">


    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <section id="contact">
         <div class="container">
              <div class="row">

                   <div class="col-md-offset-1 col-md-10 col-sm-12">
                        <h2>Edit an actor</h2>
                        <p>Thanks for improving upon our posting!</p>

                        <form v-on:submit.prevent="submit()" action="#" method="post">
                             <div class="col-md-4 col-sm-4">
                                  First Name<input name="name" type="text" class="form-control" id="name" placeholder="First Name" v-model="actor.first_name">
                             </div>
                             <div class="col-md-4 col-sm-4">
                                  Last Name<input name="name" type="text" class="form-control" id="name" placeholder="Last Name" v-model="actor.last_name">
                             </div>                             <div class="col-md-4 col-sm-4">
                                  Known For<input name="name" type="text" class="form-control" id="name" placeholder="Known For" v-model="actor.known_for">
                             </div>                             <div class="col-md-4 col-sm-4">
                                  Gender<input name="name" type="text" class="form-control" id="name" placeholder="Gender" v-model="actor.gender">
                             </div>                             <div class="col-md-4 col-sm-4">
                                  Age<input name="name" type="number" class="form-control" id="name" placeholder="Age" v-model="actor.age">
                             </div>                             <div class="col-md-4 col-sm-4">
                                  Movie Id<input name="name" type="number" class="form-control" id="name" placeholder="Movie Id" v-model="actor.movie_id">
                             </div>
                             <div class="col-md-3 col-sm-6">
                                  <input name="submit" type="submit" class="form-control" id="submit" v-on:click="submit(actor)" value="Submit">
                             </div>
                        </form>
                   </div>

              </div>
         </div>
    </section>

<!--     <h1>Edit actor</h1>
 -->

<!--   <form v-on:submit.prevent="submit()">
    <div>
      First Name: <input type="text" v-model="actor.first_name"><br>
      Last Name: <input type="text" v-model="actor.last_name"><br>
      Known For: <input type="text" v-model="actor.known_for"><br>
      Gender: <input type="textbox" v-model="actor.gender"><br>
      Age: <input type="age" v-model="actor.age"><br>
    </div>

    <button v-on:click="submit(actor)">Update actor</button>
  </form> -->

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
        age: this.actor.age,
        movie_id: this.actor.movie_id
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