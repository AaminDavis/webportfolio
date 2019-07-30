<template>
  <div class="page-bg">
    <h2 class="contactheading">Let's Chat</h2>
    <h3 class="formheading">Lets talk about your project and how I can help it come to fruition!</h3>

    <div class="form-bg">
      <form>
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
          Inquire
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>
      <section class="right">
        <h4>Call Me</h4>
        <p>412-000-0000</p>
        <h4>Email Me</h4>
        <p>ME@gmail.com</p>
      </section>
    </div>
    <hr class="clear"/>
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
  margin-left: 2rem;
  padding: 1rem 0;
  text-decoration-line: underline;
}
h3.formheading {
  text-align: left;
  font-size: 1em;
  margin-left: 2rem;
  margin-right: 20px;
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
  padding-bottom: 6em;
}
form {
  padding: 0rem 3rem;
  margin-top: 1.25em;
  float: left;
  width: 100%;
}
form > button{
  background-color: lightskyblue;
}
section.right {
  float: right;
  width: 0;
  background-color: whitesmoke;
  display: none;
}
hr {
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
  width: 50%;
}

}
@media (min-width: 992px) {
  form {
      padding: 0rem 5rem;
  }
}
@media (min-width: 1200px) {}
</style>
