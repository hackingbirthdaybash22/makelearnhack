<template>
  <div class="home">
    <div id="motto-container">
      <h1 id="motto">
        <p class="red">Make,&nbsp;</p>
        <p class="yellow">Learn,&nbsp;</p>
        <p class="blue">Hack</p>
      </h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#motto {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 75px;
  display: flex;
  margin: 0;
}

#motto-container {
  border: 1vw solid #000000;
  border-radius: 46px;
  padding: 0px 200px;
  margin: 5vh;
  max-width: 60vw;
}

.red {
  color: rgba(231, 52, 39, 1);
}

.yellow {
  color: rgba(248, 185, 42, 1);
}

.blue {
  color: rgba(29, 83, 159, 1);
}
