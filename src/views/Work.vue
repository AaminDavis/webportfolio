<template>
  <section class="work">
    <div class="container project">
      <h5>Affordable Elegance Catering LLc 2017</h5>
      <div class="main_proj_cont">
        <img src="@/assets/img/aeScreenshot.png" alt="Affordable Elegance, LLC Home Page" />
        <p>For this project, I redesigned the clients' website and assessed whether it would be beneficial to continue using the current CMS or utilize a different one. I also was tasked with improving the SEO of the site, resulting in a 12 percent increase in site visits.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://affordableelegancecateringllc.com/">View Site</a>
        </button>

      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>ZipInfo Demo Web App 2019</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/zipcodefinder-b1559.web.app_.png" alt="Zipcode Finder Wep App">
      <p>This is a demo project that I have worked on to create a PWA using Vue.js and Ionic. I worked on this to get a better understanding of service workers, PWAs, how the Ionic/Vue package works and firebase hosting.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://zipcodefinder-b1559.web.app/#/">View Site</a>
        </button>
        <button class="code-btn">
          <a rel="preconnect" target="_blank" href="#">View Code</a>
        </button>
      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>Moses Photography 2019</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/frosty-elion-9792b8.netlify.com_ (2).png" alt="Moses Photography">
      <p>I created this responsive web site for Moses Photography. Moses Photography is a photography studio that was created in response to overly photoshopped and edited photographs, especially of women and to demonstrate the beauty of ordinary items. To keep in line with Moses Photography, I decided to go with a minimalist design, one that emphasizes the content and its elegance.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank" href="https://frosty-elion-9792b8.netlify.com/">View Site</a>
        </button>
        <button class="code-btn">
          <a rel="preconnect" target="_blank" href="https://github.com/AaminDavis/mosesphotoportfolio">View Code</a>
        </button>
      </div>
    </div>
    <hr />
    <div class="container project">
      <h5>Aamin Withrow-Davis Dev. Portfolio 2019</h5>
      <div class="main_proj_cont">
      <img src="@/assets/img/localhost_8080_.png" alt="Aamin Withrow-Davis Portfolio">
      <p> I designed and developed this website to use as my online portfolio.</p>
      </div>
      <div class="btns">
        <button>
          <a rel="preconnect" target="_blank"  href="https://www.aamindavis.com/">View Site</a>
        </button>
        <button class="code-btn">
          <a rel="preconnect" target="_blank"  href="https://github.com/AaminDavis/webportfolio">View Code</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "work-page",
  components: {}
};
</script> 

<style scoped rel="preload">
section.work {
  padding: 2em 0;
}
div.project {
  margin: 0 auto;
  padding: 2rem auto;
}
div.btns {
  margin: 20px 0;
  padding-bottom: 1em;
  display: flex;
  align-items: center;
}
h5 {
  padding-top: 1em;
  padding-bottom: 0.125em;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
p {
  margin-top: 0.5em;
}
button {
  background-color: lightskyblue;
  border: 2px solid #000;
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
.code-btn {
  background-color: transparent;
}
@media (min-width: 768px) {
  section.work {
    padding: 2rem 0;
  }
  h5 {
    padding-top: 1em;
    padding-bottom: 0.125em;
    text-align: left;
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
    /*padding: 2em 0em;*/
    align-items: flex-end;
  }
  hr {
    width: 90%;
  }
}
</style>
