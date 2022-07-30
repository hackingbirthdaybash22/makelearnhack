<template>
  <h3>Hackathon Progress</h3>
  <p> This section holds your progress and inventory information. </p>
</template>

<script>


export default {
  name: "PipelineProgress",
    components: {
    },
  data() {
    return {
      progressValue: 0
    };
  },
  computed: {
    progress() {
      let progress = 0;
      this.steps.forEach((step) => {
        if (step.status === "active") {
          progress += 100 / this.steps.length;
        }
      });
      return progress;
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
.progress {
  margin-bottom: 1rem;
}
</style>