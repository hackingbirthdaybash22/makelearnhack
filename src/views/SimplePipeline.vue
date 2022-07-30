<template>
  <h1>Simple Pipeline</h1>
  <p>This is a simple pipeline to get you through your first Hackathon!</p>
  <PipelineProgress />
  <InfoBlock sectionTitle="sectionTitle" />
  <InfoBlock sectionTitle="sectionTitle" />
</template>

<script>
import PipelineProgress from "@/components/PipelineProgress.vue";
import InfoBlock from "@/components/InfoBlock.vue";

export default {
  name: "SimplePipline",
  components: {
    PipelineProgress,
    InfoBlock,
  },
  
  data() {
    return {
      sectionTitle: "Hackathon Info",
    };
  },
};
</script>


<style scoped>
</style>