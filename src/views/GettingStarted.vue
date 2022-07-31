<template>
  <back-to-demo></back-to-demo>
  <div id="app">
    <back-to-demo></back-to-demo>
    <a id="url-setting" v-bind:href="url">click here for code</a>
    <br /><br />
    <p id="text" class="example" :style="`font-size: ${fontSize}px`">
      Drag the slider to watch me change
    </p>
    <div id="display" :style="`font-size: ${fontSize}px`">
      The current font size is: {{ fontSize }}px
    </div>
    <br /><br />
    <input
      type="range"
      min="1"
      max="100"
      class="slider"
      id="my-range"
      v-model="fontSize"
    />
  </div>
</template>
<script>
import BackToDemo from "@/components/BackToDemo";
export default {
  name: "GettingStarted",
  data() {
    return {
      url: "https://github.com/hackingbirthdaybash22/makelearnhack/tree/siewwen-demo/demo-getting-started",
      fontSize: 50,
    };
  },
  methods: {},
  components: {
    BackToDemo,
  },
};
</script>
<style scoped>
#app {
  background-color: bisque;
  height: 100%;
  width: 100%;
}

#url-setting {
  font-size: 25px;
}

#display {
  font-size: 50px;
}

#my-range {
  width: 100%;
}
</style>
