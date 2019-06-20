<template>
  <div id="app">

    <!-- PRE LOADER -->

    <div class="preloader">
         <div class="sk-spinner sk-spinner-wordpress">
              <span class="sk-inner-circle"></span>
         </div>
    </div>

    <div class="navbar navbar-default navbar-static-top" role="navigation">
         <div class="container">

              <div class="navbar-header">
                   <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                   </button>
<!--                    <router-link to="/movies-index">All Movies </router-link>
 -->                   <a href="/" class="navbar-brand">Mad Movies</a>
              </div>
              <div class="collapse navbar-collapse">
                   <ul class="nav navbar-nav navbar-right">
                        <li class="active"><router-link to="/">Home</router-link></li>
                        <li><router-link to="/movies-index">All Movies </router-link></li>
                        <li><router-link to="/movies/new">Add a New Movie</router-link></li>
                        <li><router-link to="/actors-index">Actors </router-link></li>
                        <li><router-link to="/actors/new">Add a New Actor </router-link></li>
                   </ul>
              </div>

      </div>
    </div>



<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/movies">Movies </router-link> |
      <router-link to="/movies-index">All Movies </router-link> |
      <router-link to="/movies/new">Add a New Movie</router-link>
    </div> -->

    <router-view/>

    <footer>
         <div class="container">
              <div class="row">

                   <div class="col-md-5 col-md-offset-1 col-sm-6">
                        <h3>Mad Movies</h3>
                        <p>Mad Movies Inc. is an affilliate of someone, somewhere. If our info isn't correct, send us an email! </p>
                        <div class="footer-copyright">
                             <p>Copyright &copy; 2019 Mad Movies Inc.</p>
                        </div>
                   </div>

                   <div class="col-md-4 col-md-offset-1 col-sm-6">
                        <h3>Talk to us! We're Hiring!</h3>
                        <p><i class="fa fa-globe"></i> 512 Delicious Street, San Francisco, CA 10880</p>
                        <p><i class="fa fa-phone"></i> 010-020-0990</p>
                        <p><i class="fa fa-save"></i> info@madMovies.com</p>
                   </div>

                   <div class="clearfix col-md-12 col-sm-12">
                        <hr>
                   </div>

                   <div class="col-md-12 col-sm-12">
                        <ul class="social-icon">
                             <li><a href="#" class="fa fa-facebook"></a></li>
                             <li><a href="#" class="fa fa-twitter"></a></li>
                             <li><a href="#" class="fa fa-google-plus"></a></li>
                             <li><a href="#" class="fa fa-dribbble"></a></li>
                             <li><a href="#" class="fa fa-linkedin"></a></li>
                        </ul>
                   </div>
                   
              </div>
         </div>
    </footer>



  </div>
</template>

<style>

</style>
