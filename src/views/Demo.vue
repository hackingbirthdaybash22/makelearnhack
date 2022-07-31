<template>
  <body>
    <h1>Simple demo</h1>
    <div id="text">
      <p>
        We have some demos here to get you started! You can interact with our
        buttons and other inputs and see what happens! Web development may seem
        daunting at first but you can just have a look at these projects and see
        for yourself how easy it is!
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col card" style="width: 18rem; margin: 0vh 2vw">
          <div class="card-body">
            <h5 class="card-title">Getting Started</h5>
            <br />
            <p
              class="card-text"
              style="text-align: left; list-style-position: inside"
            >
              This is a very simple demo of what you can do on a website! Play
              around with the slider and see what happens!
            </p>
          </div>
          <router-link to="/gettingstarted">Let me see!</router-link>
        </div>

        <div class="col card" style="width: 18rem; margin: 0vh 2vw">
          <div class="card-body">
            <h5 class="card-title">Birthday Card</h5>
            <br />
            <p
              class="card-text"
              style="text-align: left; list-style-position: inside"
            >
              This one is a very simplified birthday card. Here we have some
              questions to which you can answer to make your very own
              personalised birthday message!
            </p>
            <router-link to="/card">Let me see!</router-link>
          </div>
        </div>
        <div class="col card" style="width: 18rem; margin: 0vh 2vw">
          <div class="card-body">
            <h5 class="card-title">Happy Birthday</h5>
            <br />
            <p
              class="card-text"
              style="text-align: left; list-style-position: inside"
            >
              With this card, we're simply showing you how you can incorporate
              media into your website! Adding audio and images is always a good
              way to make your website more interactive!
            </p>
          </div>

          <router-link to="/happybirthday">Let me see!</router-link>
        </div>
      </div>
    </div>
  </body>
</template>
<script></script>
<style scoped>
body {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#text {
  margin: 2vh 0vw;
  max-width: 70vw;
}

#text, p {
    font-size: 20px;
}
</style>
