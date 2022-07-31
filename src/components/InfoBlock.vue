<!-- eslint-disable prettier/prettier -->
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ sectionTitle }}</h5>
      <p class="card-text" v-html="sectionText"></p>
      <a
        v-if="sectionBadge != '' && !currentBadges.includes(sectionBadge)"
        @click="itemSaved"
        class="btn btn-danger"
        >Save Item</a
      >
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
    sectionBadge: {
      type: String,
      default: "",
    },
    currentBadges: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sectionSelected: false,
    };
  },
  emits: ["itemSaved"],
  methods: {
    itemSaved() {
      if (
        this.sectionBadge != "soloBadge" &&
        this.sectionBadge != "teamBadge"
      ) {
        this.$emit("itemSaved", this.sectionBadge);
      } else if (
        this.sectionBadge == "soloBadge" &&
        !this.currentBadges.includes("teamBadge")
      ) {
        this.$emit("itemSaved", this.sectionBadge);
      } else if (
        this.sectionBadge == "teamBadge" &&
        !this.currentBadges.includes("soloBadge")
      ) {
        this.$emit("itemSaved", this.sectionBadge);
      } else {
        alert("You cannot collect both the solo and team badge!");
      }
    },
  },
};
</script>

<style scoped></style>
