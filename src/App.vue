<template>
  <div id="app">
    <!-- Start of Responsive Nav -->
    <nav class="navbar navbar-expand-md navbar-light bg-lsb">
    <router-link class="nav-brand" to="/">Aamin Withrow-Davis</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Work">Work</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://drive.google.com/file/d/1zpJRmuSnhF2VjmNZp3Qogjgc-h3NOPi6/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" tabindex="-1">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav> <!-- End of Responsive Nav -->

<!-- Main Content -->
    <main class="App_main">
      <transition name="fade" mode="in-out" appear>
        <router-view @:click.prevent></router-view>
      </transition>
    </main> <!-- End of Main Content -->

<!-- Footer Content -->    
    <footer>
      <hr class="clear"/>
      <div class="footer-container container-fluid">
        <div class="left">
          <h3 class="title"><strong>Menu</strong></h3>
          <router-link to="/"><p>Home</p></router-link>
          <router-link to="/Work"><p>Work</p></router-link>
          <router-link to="/Contact"><p>Contact</p></router-link>
        </div>
        <div class="right">
          <h3 class="title"><strong>Contact</strong></h3>
          <p><i class="fab fa-github-square"></i><a href="https://github.com/AaminDavis">GitHub</a></p>
          <p><i class="fas fa-envelope"></i><a href="mailto:aaminwd@gmail.com">Email</a></p>
        </div>
      </div>
      <hr class="footer-hr"/>
      <div class="copyright contianer-fluid">
        <strong>
          &copy; 2021,
          <a href="mailto:aaminwd@gmail.com">Aamin Withrow-Davis</a>
        </strong>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="css" rel="preload"> 
#app {
  font-family: "Adamina", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}
body {
  padding: 0;
  margin: 0;
}
i {
  padding: 12px;
}
p {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.1em;
  line-height: 1.15em;
  margin-bottom: 2em;
  padding: 0 1em;
  text-align: center;
}
h3 {
  font-size: 1.5em;
  line-height: 1em;
  margin-bottom: 1.25em;
  text-align: center;
}
h4 {
  font-size: 1em;
  line-height: 1em;
  margin-bottom: 1.5em;
  color: lightskyblue;
  text-transform: uppercase;
  text-align: center;
} 
/* Buttons */ 
button {
  line-height: 32px;
}
button:hover,
button > a:hover {
  text-decoration: none;
  color: #000;
}
button > a,
button > strong > a {
  color: #000;
}
button > strong > a:hover {
  text-decoration: none;
  color: #000;
} 
/* Page Transitions */ 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in .2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} 
/* Navigation */ 
.bg-lsb {
  background-color: lightskyblue;
}
.nav-brand {
 color: #2c3e50;  
}
.nav-brand:hover,
.nav-brand:focus {
 color: #2c3e50; 
}
.navbar .navbar-toggler {
border-color: transparent;
}
.navbar .nav-item .nav-link {
  color: #2c3e50;
}
.navbar .nav-item .nav-link:hover,
.navbar .nav-item .nav-link:focus
{
	cursor: pointer;
	text-decoration: underline;
} 
/* Footer Content */
footer {
  background-color: lightskyblue;
}
.footer-container {
  max-width: 90%;
  padding-top: 30px;
}
hr.clear {
  margin: 0;
  border: 5px solid black;
  clear: both;
}
.left {
  width: 100%;
  padding-top: 1em;
}
.right {
  width: 100%;
  padding-top: 1em;
  padding-bottom: 3em;
}
div.left > a {
  margin-bottom: 35px;
  color: black;
}
div.copyright {
  text-align: center;
  padding: 1.5em 0;
  clear: both;
}
h3.title {
  font-size: 1.5em;
  text-decoration: underline;
  color: black;
}
hr.footer-hr {
  clear: both;
  margin: 0px;
  color: black;
  height: 1px;
  width: 80%;
  margin: auto;
}
a[href^="mailto:"] {
  color: #000;
  text-decoration: underline;
}
.fa-envelope {
  transform: scale(1.1);
}
.fa-github-square {
  transform: scale(1.3);
}
a[href^="https://github"] {
  color: #000;
  text-decoration: none;
}
a[href^="https://github"]:hover {
  text-decoration: underline;
}
ul.right li.nav-item {
  text-align: right;
  color: black;
}
/*Medium Devices*/
@media (min-width: 768px) {
  .left {
    position: relative;
    float: left;
    width: 50%;
  }
  .right {
    position: relative;
    float: right;
    width: 50%;
  }
  h3, h4, p {
    text-align: initial;
    padding: 0;
  }
  div.right > p {
    text-align: right;
  }
  div.right > h3 {
    text-align: right;
  }
  hr.footer-hr {
  width: 90%;
}
}
/*Large Devices*/ 
@media (min-width: 992px) {
  .left {
    float: left;
    width: 50%;
  }
  .right {
    float: right;
    width: 50%;
  }
} 
/*Extra Large Devices*/ 
@media (min-width: 1200px) {
  #footerContainer {
    width: 80%;
    margin: 60px 0 0 0;
  }
} 
</style>
