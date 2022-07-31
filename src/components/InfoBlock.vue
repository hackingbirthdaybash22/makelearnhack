<!-- eslint-disable prettier/prettier -->
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ sectionTitle }}</h5>
      <p class="card-text">{{ sectionText }}</p>
      <a href="#" class="btn btn-primary">Save Item</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    sectionTitle: {
      type: String,
      default: "Section Text Default",
    },
    sectionText: {
      type: String,
      default: "Section Text Default",
    },
  },
  data() {
    return {
      sectionSelected: false,
    };
  },
  computed: {},
  methods: {
    sectionClicked() {
      this.sectionSelected = !this.sectionSelected;
      console.log("Section clicked", this.sectionTitle, this.sectionSelected);
    },
  },
};
</script>

<style scoped>
</style>