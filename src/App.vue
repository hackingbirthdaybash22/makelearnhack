<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-brand position-absolute top-0 start-50 translate-middle-x"> 
      <img id="site-logo" alt="site logo" src="./assets/icon.png" />&emsp;
      <a>Make, Learn, Hack &emsp;</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="spacer"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/"><i class="fa-solid fa-house fa-2xl"></i></router-link>
        </li>&emsp;
        <li class="nav-item">
          <router-link to="guide"><i class="fa-solid fa-scroll fa-2xl"></i></router-link>
        </li>&emsp;
        <li class="nav-item">
          <router-link to="faq"><i class="fa-solid fa-circle-question fa-2xl"></i></router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

#app {
  font-family: Noto Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

nav {
  padding: 15px;
  background-color: rgba(248, 185, 42, 1);
  width: 100vw;
  min-height: 70px;
}

a {
  font-weight: bold;
  color: black;
}

a:hover {
  color: rgba(231, 52, 39, 1);
}

a.router-link-exact-active {
  color: #f5f5f5;
}

#site-logo {
  height: 60px;
  margin: 0;
}

.spacer {
  width: 90vw;
}

@media screen and (max-width: 600px) {
  h1, p {
    font-size: 30px;
  }

  ul {
    margin-top: 20px;
  }
}
</style>
