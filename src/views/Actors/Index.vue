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

    <section id="about">
         <div class="container">
              <div class="row">

                   <div class="col-md-offset-1 col-md-10 col-sm-12">
                        <div class="col-md-4 col-sm-4" v-for="actor in actors">
                             <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
                             <p>Known For: <strong>{{ actor.known_for }}</strong></p>
<!--                              <p>Actor Genres: <strong>{{ actor.genres }}</strong></p>
 -->                             <router-link v-bind:to="'/actors/' + actor.id">
                               <button class="smoothScroll btn btn-default">More Info</button>
                             </router-link>
                        </div>

                       <!--  <div class="col-md-4 col-sm-4">
                             <h2>New Design</h2>
                             <p>Quisque vitae felis eros. Suspendisse quis leo molestie, iaculis sapien id, hendrerit augue. Phasellus fermentum.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>

                        <div class="col-md-4 col-sm-4">
                             <h2>HTML CSS</h2>
                             <p>Vivamus non scelerisque ex, et interdum leo. In bibendum lacus vitae felis egestas, at consectetur metus facilisis.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>

                        <div class="col-md-6 col-sm-6">
                             <h3>Fully Customizable!</h3>
                             <p>Maecenas quis pulvinar neque, non dapibus orci. Integer non suscipit dui. In eu tempor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras porta lacus ac sagittis imperdiet. Vestibulum eget mattis quam.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita.</p>
                        </div>

                        <div class="col-md-6 col-sm-6">
                             <img src="images/about-image.jpg" class="img-responsive" alt="About Image">
                        </div>

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

    <!-- <h1>Actors</h1>
    <div v-for="actor in actors">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>Known for: {{ actor.known_for }}</p>
      <p>actor Genres: {{ actor.genres }}</p>
    
    <router-link v-bind:to="'/actors/' + actor.id">
      <button>More Info</button>
    </router-link>

    </div> -->
    

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