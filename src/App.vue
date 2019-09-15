<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-lsb">
      <a class="navbar-brand" href="#">Aamin Withrow-Davis</a>
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
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Work">Work</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://drive.google.com/open?id=1qGGwxp1E_cSidG5fmow6sR9nwhIRTnP0" target="_blank">Resume</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" tabindex="-1">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="App_main">
      <transition name="fade">
        <router-view @:click.prevent></router-view>
      </transition>
    </main>
    <footer>
      <div class="footer-container container-fluid">
        <div class="left">
          <h3 class="title">
            <strong>Menu</strong>
          </h3>
          <router-link to="/">
            <p>Home</p>
          </router-link>
          <router-link to="/Work">
            <p>Work</p>
          </router-link>
          <router-link to="/Contact">
            <p>Contact</p>
          </router-link>
        </div>
        <div class="right">
          <h3 class="title">
            <strong>Contact</strong>
          </h3>
          <p>Email Me</p>
          <p class="container">
            <i class="fas fa-envelope"></i>
            <a href="mailto:aaminwd@gmail.com">Aaminwd@gmail.com</a>
          </p>
        </div>
      </div>
      <hr class="footer-hr" />
      <div class="copyright contianer-fluid">
        <strong>
          &copy; 2019,
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

<style lang="css">
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
/* Buttons*/
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
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*Navigation*/
.bg-lsb {
  background-color: lightskyblue;
}
.navbar .navbar-toggler {
color: black;
border-color: transparent;
}
.navbar-brand {
  color: black;
}
.nav-item {
  font-size: 1em;
}
.nav-link:hover
.nav-link:focus
{
	cursor: pointer;
	text-decoration: none;
}
/* Footer Content */
footer {
  background-color: lightskyblue;
  padding-top: 3em;
}
div.footer.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}
.left {
  width: 100%;
  background-color: lightskyblue;
  padding-top: 1em;
}
.right {
  width: 100%;
  background-color: lightskyblue;
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
  padding-bottom: 0.55em;
  text-decoration: underline;
  color: black;
}
hr.footer-hr {
  clear: both;
  margin: 0;
  color: black;
}
a[href^="mailto:"] {
  color: #000;
  text-decoration: underline;
}

/** Media Queries **/

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
  h3,
  h4,
  p {
    text-align: initial;
  }
  p {
    padding: 0;
  }
  div.footer-container {
    padding: 0 3em;
  }
  div.right > p {
    text-align: right;
  }
  div.right > h3 {
    text-align: right;
  }
}
/*Large Devices*/
@media (min-width: 992px) {
  div.footer-container {
    padding: 0 2em;
  }
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
  
}
</style>