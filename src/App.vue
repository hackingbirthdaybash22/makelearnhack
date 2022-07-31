<template>
  <div id="nav">
    <img id="site-logo" alt="site logo" src="./assets/icon.png" />
    &emsp;
    <h3>Make, Learn, Hack</h3>
    <div id="links">
      <router-link to="/"><i class="fa-solid fa-house fa-2xl"></i></router-link>&emsp;|&emsp;
      <router-link to="guide"><i class="fa-solid fa-scroll fa-2xl"></i></router-link>&emsp;|&emsp;
      <router-link to="faq"><i class="fa-solid fa-circle-question fa-2xl"></i></router-link>
    </div>
  </div>
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
}

#nav {
  padding: 5px;
  background-color: rgba(248, 185, 42, 1);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #f5f5f5;
}

#site-logo {
  height: 60px;
  margin: 0;
}

#links {
  position: absolute;
  right: 15px;
}

@media screen and (max-width: 600px) {
  #nav {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    padding: 5px;
    background-color: rgba(248, 185, 42, 1);
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }

  h1, p {
    font-size: 30px;
  }
}

</style>
