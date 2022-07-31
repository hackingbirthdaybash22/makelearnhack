<template>
  <div class="container progress-sidebar">
    <h4>Hackathon Progress</h4>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped bg-warning"
        role="progressbar"
        aria-label="Warning striped example"
        :style="{ width: progress + '%' }"
        aria-valuenow="1"
        aria-valuemin="0"
        aria-valuemax="8"
      ></div>
    </div>
    <p>
      This section holds your progress and inventory information. You can add
      items to your inventory by clicking on the
      <strong>"Save Item"</strong> button.
    </p>

    <hr />

    <div class="row">
      <h5>Inventory</h5>
      <p>
        You have <strong>{{ currentBadges.length }}</strong
        >/7 badges in your inventory.
      </p>
      <div class="row">
        <div class="badge-container col-md-2 m-1" v-for="badge in currentBadges" :key="badge" :title="badge">
          <img
            class="img-fluid"
            :src='require(`../assets/` + badge + `.png`)'
            :alt="badge"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PipelineProgress",
  components: {},
  props: {
    progressValue: {
      type: Number,
      default: 1,
    },
    currentBadges: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    progress() {
      return (this.progressValue / 8) * 100;
    },
  },
  methods: {
    imgSrc(badge) {
      return "./assets/" + badge + ".png";
    },
  },
};
</script>

<style scoped>
.progress-sidebar {
  background-color: #1d539f;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  width: calc(100% - 20px);
}

.badge-container {
  font-size: 12px;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  color: black;
}

img {
  width: 100%;
}
</style>
