<template>
  <div class="page-bg">
    <div class="form-bg">
      <form  name="interestForm" method="POST" data-netlify="true">
        <h2 class="contactheading">Let's Chat</h2>
        <h3 class="formheading">Lets talk about your project and how I can help it come to fruition!</h3>
        <div class="form-group">
          <label for="InputName">Name</label>
          <input
            type="name"
            class="form-control form-control-large"
            id="InputFullName"
            placeholder="Full Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control form-control-large"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >I'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="FormControlTextarea1">Message</label>
          <textarea
            class="form-control form-control-large"
            id="FormControlTextarea1"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-sm">
          <strong>Inquire</strong>
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>
      <section class="right">
        <p>Collaborate with me:</p>
        <p>
          <a href="mailto:aaminwd@gmail.com">aaminwd@gmail.com</a>
        </p>
        <img class="svg" src="../assets/img/waiting-contact.svg" />
      </section>
    </div>
    <hr class="clear" />
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {}
};
</script>

<style scoped rel="preload">
h2.contactheading {
  font-size: 1.3em;
  padding: 1rem 0;
  text-decoration-line: underline;
}
h3.formheading {
  text-align: left;
  font-size: 1em;
}
div.page-bg {
  background-color: whitesmoke;
}
div.form-bg {
  display: flex;
  flex-wrap: nowrap;
  background-color: whitesmoke;
  justify-content: space-around;
  margin: auto;
  padding-bottom: 3em;
}
form {
  padding: 0rem 3rem;
  margin-top: 1.25em;
  float: left;
  width: 100%;
}
form > button {
  background-color: lightskyblue;
  line-height: 32px;
  padding-left: 1em;
}
section.right {
  float: right;
  width: 0;
  background-color: whitesmoke;
  display: none;
  margin: auto;
}
hr {
  margin: 0;
  border: 5px solid black;
}
.clear {
  clear: both;
}
/** Media Queries **/

@media (min-width: 768px) {
  h3.formheading {
    margin: 1.4rem 0;
    margin-left: 2rem;
  }
  section.right {
    display: inline;
    width: 40%;
  }
  img.svg {
    max-width: 90%;
    min-height: 200px;
  }
  form {
    max-width: 560px;
  }
}
@media (min-width: 992px) {
  .form-bg {
    margin: auto 0;
  }
  form {
    padding: 0em 3em;
    max-width: 50%;
  }
}
@media (min-width: 1200px) {
}
</style>
