<!-- eslint-disable prettier/prettier -->
<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ sectionTitle }}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

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