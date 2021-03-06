<template>
  <div class="background">
    <div class="full">
      <div class="after">
        <h1 class="header">A Yinzer, Obsessed with Web Design and Development</h1>
      </div>
      <button class="cta">
        <router-link to="/work"><strong>View Work</strong></router-link>
      </button>
    </div>
    <section class="about pb">
      <h3>About</h3>
      <p>Hi, I'm Aamin. I am currently a freelance Web Designer and Developer based out of Pittsburgh, PA. I primarily work on front-end projects, however, I also create full-stack web apps and websites. I love working on new challenging projects and integrating new technologies. If you are interested in hiring me, contact me <a href="mailto:aaminwd@gmail.com">via email.</a></p>
      <h3>Services</h3>
      <h4>UX/UI Design</h4>
      <p>Before I develop a website or application, I work on creating its information structure and layout, going through numerous iterations. Once that is complete, I then start working on creating and functional and alluring user experience.</p>
      <h4>Front-End Development</h4>
      <p>After I finalize the UX/UI design, I then produce the visual components of the application/website. Using HTML, CSS, Javascript, and frameworks such as Vue.js and Angular, I create applications and websites. I also integrate CMS solutions whenever appropriate.</p>
      <h4>Full-stack Development</h4>
      <p>For some applications and websites, I create both the front-end and back-end. The combination of both the front-end, back-end, databases, and several other skill sets to create an all-inclusive application/website.</p>
      <button class="secondary"><a href="https://drive.google.com/open?id=1qGGwxp1E_cSidG5fmow6sR9nwhIRTnP0" target="_blank" rel="noreferrer">View Resume</a></button>
    </section>
    <hr />
    <section class="skills pb">
      <h3>Skills</h3>
      <div class="uls">
        <ul>
          <legend>
            <i class="fas fa-pen-nib"></i> Designer
          </legend>
          <li>Figma</li>
          <li>Axzure RP</li>
          <li>Invision Studio</li>
          <li>Adobe XD</li>
        </ul>
        <ul>
          <legend>
            <i class="fas fa-code"></i> Front-End Dev.
          </legend>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>WordPress</li>
          <li>Vue JS</li>
          <li>Angular 5+</li>
        </ul>
        <ul>
          <legend>
            <i class="fas fa-database"></i> Back End Dev.
          </legend>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>PHPMyAdmin</li>
          <li>Node.JS</li>
          <li>ExpressJS</li>
        </ul>
        <ul>
          <legend>
            <i class="fas fa-toolbox"></i> Tool Kit
          </legend>
          <li>Sublime Text</li>
          <li>VS Code</li>
          <li>Git</li>
          <li>Github</li>
          <li>Chrome Developer Tools</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped rel="preload">
div.background {
  margin: auto;
}
div.full {
  height: 60vh;
  background-image: url("../assets/img/joshua-aragon-edited-small.jpg");
  background-attachment: fixed;
  opacity: 0.9;
  filter: alpha(opacity=9);
  background-position: center;
  display: grid;
  grid-template-columns: 32px 1fr 1fr 1fr 1fr 32px;
  grid-template-rows: 56.8px 1fr 1fr 1fr 1fr 56.8px;
  /* Photo by Joshua Aragon on Unsplash */
}
div.after {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 20px;
  font-size: 1.2em;
  line-height: 1.4em;
  background-color: rgba(0, 0, 0, 0.7);
  align-self: center;
  justify-self: center;
}
h1.header {
  font-size: 1rem;
  align-self: center;
  color: white;
  font-weight: bold;
  text-align: center;
}
.cta {
  position: relative;
  height: 50px;
  width: 180.5px;
  padding: 0 1em;
  border-radius: 2em;
  background-color: lemonchiffon;
  border: 1px solid lightskyblue;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 6;
  align-self: center;
  justify-self: center;
}
.cta:hover {
  background: rgba(255, 250, 204, .6);
}
.secondary {
  background-color: transparent;
  border: 2px solid lightskyblue;
  border-radius: 20px;
  padding: 0 1em;
  position: relative;
  left: 40%;
}
.secondary:hover,
.secondary > a:hover {
  background-color: lightskyblue;
}
div.uls {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  -ms-flex-flow: row wrap;
}
ul {
  width: 300px;
  content: center;
  background-color: lemonchiffon;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 2em;
  flex-flow: wrap;
  box-shadow: 3px 5px 3px rgb(199, 191, 118);
}
.pb {
  padding-top: 2em;
  padding-bottom: 6em;
  margin: auto;
}
.skills {
  width: 90%;
}
/*Medium Devices*/
@media (min-width: 768px) {
  div.full { 
    height: 80vh;
  }
  h1.header {
    font-size: 1.5em;
  }
  hr {
    width: 90%;
  }
  section.about {
    width: 90%;
  }
  .secondary {
    position: unset;
  }
}
/*Large Devices*/
@media (min-width: 992px) {
  div.full {
    background-image: url("../assets/img/joshua-aragon-edited-medium.jpg");
  }
  h1.header {
    font-size: 2em;
  }
  section.about,
  section.skills {
    width: 80%;
  }
  hr {
    width: 80%;
  }
}
/*Extra Large Devices*/
@media (min-width: 1200px) {
  div.full {
    height: 100vh;
    background-image: url("../assets/img/joshua-aragon-edited-large.jpg");
  }
  h1.header {
    font-size: 2.3em;
  }
  .cta {
    height: 60px;
    width: 200px;
  }
}
</style>
