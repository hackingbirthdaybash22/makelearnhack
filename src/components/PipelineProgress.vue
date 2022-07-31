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
    <p>This section holds your progress and inventory information.</p>
    <p>
      You can add items to your inventory by clicking on the "Save Item" button.
    </p>
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
  },
  computed: {
    progress() {
      return (this.progressValue / 8) * 100;
    },
  },
  methods: {
    completeStep(step) {
      step.status = "completed";
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
</style>