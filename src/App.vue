<template>
  <div id="app">
    <nav class="contianer-fluid">
      <section class="nav-left">
        <router-link  class="navbar-brand" to="/">Aamin Davis</router-link>
      </section>
      <section class="nav-right">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/work">Work</router-link>
        <router-link class="nav-item" to="/Contact">Contact</router-link>
      </section>
    </nav>
    <main class="App_main">
      <transition name="fade">
    <router-view @:click.prevent />
      </transition>
    </main>
    <footer>
      <div class="footer-container container-fluid">
        <div class="left">
          <h3 class="title"><strong>Menu</strong></h3>
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
          <h3 class="title"><strong>Contact</strong></h3>
          <p>Email Me</p>
          <p>
            <i class="fas fa-envelope"></i> ME@gmail.com
          </p>
          <p>Call Me</p>
          <p>
            <i class="fas fa-phone"></i> 412-000-0000
          </p>
        </div>
      </div>
      <hr class="footer-hr">
      <div class="copyright contianer-fluid">
        <strong>Copyright Aamin Withrow-Davis | 2019</strong>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
};
</script>

<style lang="css" rel="preload">
#app {
	font-family: "Adamina", serif;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-display: fallback;
	color: #2c3e50;
	background-color: white;
}
body{
	padding: 0;
	margin: 0;
}
p {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-display: fallback;
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
.fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
nav {
  background-color: lightskyblue;
  margin: auto;
  padding: 0 10%;
  padding-top: .3em;
	overflow: hidden;
  height: 50px;
}
.navbar-brand {
  color: black;
}
.nav-item {
  font-size: 1em;
  color: rgb(15, 13, 13);
}
.nav-item:hover,
.nav-item:focus
{
	cursor: pointer;
	/*color: black;*/
	text-decoration: none;
}
section.nav-left {
  float: left;
}
section.nav-right {
  float: right;
  padding-top: 5px;
}
section.nav-right > .nav-item:nth-child(1) {
	margin-right: 10px;
}
section.nav-right > .nav-item:nth-child(2) {
	margin-right: 10px;
}
section.nav-right > .router-link-exact-active {
	border-bottom: 2px solid black;
}
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
	padding-bottom: .55em;
	text-decoration: underline;
	color: black;
}
hr.footer-hr {
	clear:both;
  margin: 0;
  color: black;
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
h3, h4, p {
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
@media (min-width: 1200px){

}
</style>