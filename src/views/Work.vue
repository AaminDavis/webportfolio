<template>
  <section class="work">
    <div class="container project">
      <h5>Project One</h5>
      <div class="main_proj_cont">
        <img :src="require('@/assets/img/aeScreenshot.png')" alt="Affordable Elegance, LLC Home Page" />
        <p>For this project, I redesigned the clients' website and assessed whether it would be beneficial to continue using the current CMS or utilize a different one. I also was tasked with improving the SEO of the site.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://affordableelegancecateringllc.com/">View Site</a>
        </button>
        <button type="disabled" class="disabled">
          <a rel="preconnect" target="_blank" href="#">View Code</a>
        </button>
      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>Project Two</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/zipcodefinder-b1559.web.app_.png" alt="Zip Finder Wep App">
      <p>This is a demo project that I have worked on to create a PWA using Vue.js and Ionic. I worked on this to get a better understanding of service workers, PWAs, how the Ionic/Vue package works and firebase hosting.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://zipcodefinder-b1559.web.app/#/">View Site</a>
        </button>
        <button>
          <a rel="preconnect" target="_blank" href="https://zipcodefinder-b1559.web.app/#/">View Code</a>
        </button>
      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>Project Three</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/frosty-elion-9792b8.netlify.com_ (2).png" alt="Moses Photography">
      <p>I created this responsive web site for Moses Photography. Moses Photography is a photography studio that was created in response to overly photoshopped and edited photographs, especially of women and to demonstrate the beauty of ordinary items. To keep in line with Moses Photography, I decided to go with a minimalist design, one that emphasizes the content and its elegance.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://frosty-elion-9792b8.netlify.com/">View Site</a>
        </button>
        <button>
          <a rel="preconnect" target="_blank" href="https://github.com/AaminDavis/mosesphotoportfolio">View Code</a>
        </button>
      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>Project Four</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/localhost_8080_.png" alt="Aamin Withrow-Davis Portfolio">
      <p>Coming Soon</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank"  href="https://www.aamindavis.com/">View Site</a>
        </button>
        <button>
          <a rel="preconnect" target="_blank"  href="#">View Code</a>
        </button>
      </div>
    </div>
    <!--<hr />
    <dgit aasfafaiv class="container project">
      <h5>Project Five</h5>
      <img src="@/img/AE_screenshot.PNG" alt="">
      <p>Coming Soon</p>
      <div class="btns">
        <button>
          <a rel="preconnect" href="#">View Site</a>
        </button>
        <button>
          <a rel="preconnect" href="#">View Code</a>
        </button>
      </div>
    </div>-->
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
  margin: 0 auto;
}
div.btns {
  margin: 20px 0;
  display: flex;
  align-items: center;
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
  border: 1px solid #000;
  width: 8em;
  height: 3em;
  border-radius: 2em;
  margin: auto;
}
button:hover {
  background-color: lightblue;
  cursor: pointer;
}
button > a:hover {
  text-decoration: none;
  color: #000;
} 
/*
button:disabled,
button.disabled,
button.disabled > a {
  opacity: .7;
  cursor: none;
}
*/
/* Add grid to section in order to make it responsive */

@media (min-width: 768px) {
  h5 {
    padding-bottom: 1em;
  }
  img {
    max-width: 60%;
    margin-right: 20px;
  }
  div.main_proj_cont {
    display: flex;
    align-content: space-between;
  }
  .btns {
    padding: 2em 0em;
  }
  hr {
    width: 90%;
  }
}
@media (min-width: 992px) {
}
</style>
