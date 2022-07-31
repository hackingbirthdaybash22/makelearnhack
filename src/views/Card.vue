<template>
  <div id="app">
    <a id="url-setting" v-bind:href="url">click here for code</a>

    <div v-if="oldWindow">
      <h1 class="h1">Let's create a birthday card!</h1>

      <br /><br />

      <div class="honorific">Can I have the honorific?</div>
      <select v-model="honorific" id="enter-honorific">
        <option disabled value="">Please select one</option>
        <option>Miss</option>
        <option>Mr</option>
        <option>Mrs</option>
        <option>Madam</option>
      </select>

      <br /><br /><br /><br />

      <div class="name-display">Can I have the recipient name?</div>
      <input v-model="name" id="enter-name" placeholder="Ex: Tom" />

      <br /><br /><br /><br />

      <div class="message-display">Can I have the message?</div>
      <textarea
        v-model="message"
        id="enter-message"
        placeholder="Ex: Happy 15th Birthday"
      ></textarea>

      <br /><br /><br /><br />

      <button class="confirm-detail" @click="confirm">Confirm</button>

      <br /><br />

      <div v-if="isGenerated" id="generate-card">
        <div>The current honorific is: {{ honorific }}</div>
        <br />
        <div>The current name is: {{ name }}</div>
        <br />
        <div>The current message is: {{ message }}</div>
        <br />
        <button id="generate-btn" @click="generate">Generate Card</button>
      </div>
    </div>

    <div v-if="newWindow" id="new-window">
      <h1 id="info">
        {{ honorific }} {{ name }},
        {{ message }}
      </h1>

      <audio
        src="assets/party.mp3"
        id="music"
        preload="auto"
        autoplay="true"
        loop="true"
      ></audio>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      name: "",
      message: "",
      isGenerated: false,
      honorific: "",
      newWindow: false,
      oldWindow: true,
      url: "https://github.com/hackingbirthdaybash22/makelearnhack/tree/siewwen-demo/demo-card",
    };
  },
  methods: {
    confirm() {
      this.isGenerated = true;
    },
    generate() {
      this.newWindow = true;
      this.oldWindow = false;
    },
  },
};
</script>
<style>
#url-setting {
  font-size: 25px;
}

#body {
  background-color: peachpuff;
}

.h1 {
  text-align: center;
  font-size: 45px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.confirm-detail {
  font-size: 25px;
  padding: 5px;
  margin-left: 45%;
  justify-content: center;
  align-items: center;
}

.honorific {
  font-size: 25px;
  text-align: center;
}

.name-display {
  font-size: 25px;
  text-align: center;
}

.message-display {
  font-size: 25px;
  text-align: center;
}

#enter-honorific {
  font-size: 20px;
  text-align: left;
  margin-left: 45%;
}

#enter-name {
  font-size: 20px;
  text-align: left;
  margin-left: 45%;
}

#enter-message {
  font-size: 20px;
  text-align: left;
  margin-left: 45%;
}

#generate-card {
  background-color: bisque;
  font-size: 25px;
  text-align: center;
  padding: 10px;
}

#generate-btn {
  font-size: 25px;
  padding: 5px;
}

#info {
  background-color: skyblue;

  font-size: 125px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#new-window {
  background-image: url("../assets/balloons.jpg");
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  height: 100%;
  width: 100%;
}
</style>
