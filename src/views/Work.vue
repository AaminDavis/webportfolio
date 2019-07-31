<template>
  <section class="work">
    <div class="project">
      <!-- Can't have underscores in file names-->
      <h5>Project One</h5>
      <img :src="require('@/assets/img/aeScreenshot.png')" alt="Affordable Elegance, LLC">
      <p>For this project I was tasked with redesinging the clients website and asseccessing whether it would be benefitual to go choose anothe cms or continue to use the current one. I also was tasked with imporving the SEO of the site.</p>
      <button>
        <a rel="preconnect" href="https://affordableelegancecateringllc.com/">View Site</a>
      </button>
    </div>
    <hr>
    <div class="project">
      <h5>Project Two</h5>
      <p>Words... Zip Code Finder</p>
      <button>
        <a rel="preconnect" href="https://zipcodefinder-b1559.web.app/#/">View Site</a>
      </button>
    </div>
    <hr>
    <div class="project">
      <h5>Project Three</h5>
      <!--<img src="@/img/AE_screenshot.PNG" alt="">-->
      <p></p>
      <button>
        <a rel="preconnect" href="#">View Site</a>
      </button>
    </div>
    <hr>
    <div class="project">
      <h5>Project Four</h5>
      <!--<img src="@/img/AE_screenshot.PNG" alt="">-->
      <p></p>
      <button>
        <a rel="precommect" href="#">View Site</a>
      </button>
    </div>
    <hr>
    <div class="project">
      <h5>Project Five</h5>
      <!--<img src="@/img/AE_screenshot.PNG" alt="">-->
      <p></p>
      <button>
        <a rel="preconnect" href="#">View Site</a>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Work",
  components: {}
};
</script>

<style scoped>
section.work {
  padding: 2em 0;
}
div.project {
  margin: 0;
}
h5 {
  padding-bottom: 0.5em;
}
img {
  width: 100%;
  height: 100%;
}
p {
  margin-top: 0.5em;
}
button {
  background-color: lightskyblue;
  color: Black;
  border: 1px solid lemonchiffon;
  width: 8em;
  height: 3em;
  border-radius: 2em;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
