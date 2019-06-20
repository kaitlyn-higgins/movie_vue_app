<template>
  <div class="actors-show">

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

                        <div class="col-md-6 col-sm-6">

                             <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
                                <h4>Known for: {{ actor.known_for }}</h4>
                                <h4>Gender: {{ actor.gender }}</h4>
                                <h4>Age: {{ actor.age }}</h4>

                                <button class="smoothScroll btn btn-default">
                                  <router-link v-bind:to="'/actors/' + actor.id + '/edit'">Edit actor</router-link>
                                </button><br>

                                <button v-on:click="destroyactor(actor)" class="smoothScroll btn btn-default">Destroy actor</button>
                        </div>

                        <div class="col-md-6 col-sm-6">
                             <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492181001/articles/2015/05/06/morgan-freeman-shoots-straight-on-legalizing-marijuana-and-his-escape-from-new-york/150505-stern-morgan-freeman-tease_zomwym" class="img-responsive" alt="About Image">
                        </div>
<!-- 
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

<!--       <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
      <p>Known for: {{ actor.known_for }}</p>
      <p>Gender: {{ actor.gender }}</p>
      <p>Age: {{ actor.age }}</p> -->
<!--       <p>Movies: {{ actor.movies }}</p>
 -->    
    <!-- <button>
      <router-link v-bind:to="'/actors/' + actor.id + '/edit'">Edit actor</router-link>
    </button><br>

    <button v-on:click="destroyactor(actor)">Destroy actor</button> -->

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