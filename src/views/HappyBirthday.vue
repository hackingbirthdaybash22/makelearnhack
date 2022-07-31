<template>
  <back-to-demo></back-to-demo>

  <body class="body" id="body">
    <div id="app">
      <a id="url-setting" v-bind:href="url">click here for code</a>

      <div class="info" id="info">Happy Birthday MLH!</div>

      <audio
        src="../assets/hbd_sound.mp3"
        id="music"
        preload="auto"
        autoplay="true"
        loop="true"
      ></audio>
    </div>
  </body>
</template>
<script>
import BackToDemo from "@/components/BackToDemo";
export default {
  name: "HappyBirthday",
  data() {
    return {
      url: "https://github.com/hackingbirthdaybash22/makelearnhack/tree/siewwen-demo/demo-happy-birthday",
    };
  },
  components: {
    BackToDemo,
  },
  methods: {},
};
</script>
<style>
.info {
  font-size: 125px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  width: 100%;
  height: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.body {
  background-image: url("../assets/hbd.jpg");
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  height: 90vh;
}

#url-setting {
  font-size: 25px;
}
</style>
