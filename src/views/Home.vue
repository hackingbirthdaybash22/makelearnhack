<template>
  <div class="home">
    <div id="motto-container">
      <h1 id="motto">
        <p class="red">Make,&nbsp;</p>
        <p class="yellow">Learn,&nbsp;</p>
        <p class="blue">Hack</p>
      </h1>
    </div>
    <p id="text">Your guide to&nbsp;
      <span class="tooltip"><u id="hackathons"> hackathons.
        <span class="tooltiptext">A hackathon is an event organized by
            a company for tech enthusiasts putting up hardware or software-related challenges to be solved over a fixed
            time duration, generally two days or more.
        </span></u></span>
    </p>

    <button>Let's get started!</button>
  </div>
</template>

<script>
export default {
  name: "Home"
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
  margin: 5vh;
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

/* Tooltip CSS gotten from w3schools*/
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  font-size: 15px;
  visibility: hidden;
  width: 550px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

@media screen and (max-width: 920px) {
  #motto, #text, p {
    font-size: 50px;
  }

  #text {
    flex-direction: column;
  }

  #motto-container {
    padding: 10vh 5vw;
  }
}
</style>
