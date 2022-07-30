<!-- eslint-disable prettier/prettier -->
<template>
  <h3>{{ sectionTitle }}</h3>

  <p>lorem ipsum dolor sit amet</p>
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    sectionTitle: {
      type: String,
      default: "Section Title",
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
.info-block {
  border: 1vw solid #000000;
  border-radius: 46px;
  padding: 0px 200px;
  margin: 5vh;
  max-width: 60vw;
}
</style>