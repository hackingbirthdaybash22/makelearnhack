<template>
  <div class="home">
    <div id="motto-container">
      <h1 id="motto">
        <p class="red">Make,&nbsp;</p>
        <p class="yellow">Learn,&nbsp;</p>
        <p class="blue">Hack</p>
      </h1>
    </div>
    <p id="text">
      Your guide to&nbsp;
      <span class="tt"
        ><u id="hackathons">
          hackathons.
          <span class="tttext"
            >A hackathon is an event organized by a company for tech enthusiasts
            putting up hardware or software-related challenges to be solved over
            a fixed time duration, generally two days or more.
          </span></u
        ></span
      >
    </p>

    <button type="button" id="btn" onclick="location.href = '#/simplePipeline'">
      <p class="red">Let's&nbsp;</p>
      <p class="yellow">get&nbsp;</p>
      <p class="blue">started!</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

#motto {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 75px;
  display: flex;
  margin: 0;
}

#motto-container {
  border: 1vw solid #000000;
  border-radius: 46px;
  padding: 75px 200px;
  margin: 5vh 0vw;
  max-width: fit-content;
  inline-size: min-content;
  overflow-wrap: break-word;
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

#text {
  font-size: 75px;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

#hackathons:hover {
  color: rgba(29, 83, 159, 1);
  cursor: pointer;
}

#btn {
  background-color: black;
  margin: 100px 0vw 0vw 0vw;
  display: flex;
  padding: 10px;
  border-radius: 46px;
  height: 178px;
  align-items: center;
  border: transparent;
}

#btn p {
  margin: 0;
  font-size: 55px;
}

/* tooltip CSS gotten from w3schools*/
.tt {
  position: relative;
  display: inline-block;
}

.tt .tttext {
  font-size: 15px;
  visibility: hidden;
  width: 550px;
  max-width: 100vw;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  transform: translate(-75%, 0);
}

.tt .tttext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tt:hover .tttext {
  visibility: visible;
}

@media screen and (max-width: 920px) {
  #motto,
  #text,
  p {
    font-size: 50px;
  }

  #text {
    flex-direction: column;
  }

  #motto-container {
    padding: 10vh 5vw;
  }

  #btn {
    max-height: 70px;
  }

  #btn p {
    font-size: 35px;
  }
}

@media screen and (max-width: 500px) {
  #motto,
  #text,
  p {
    font-size: 30px;
  }

  #btn p {
    font-size: 25px;
  }
}
</style>
