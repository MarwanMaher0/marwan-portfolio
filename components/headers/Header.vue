<template>
  <div>
    <Header2Vue :singlePage="singlePage" />
  </div>
</template>

<script>
import { appUtilits } from "~/utilits";
import Header2Vue from "./Header2.vue";
export default {
  name: "Header",
  components: {
    Header2Vue,
  },
  props: {
    header: {
      type: Number,
      default: 2,
    },
    singlePage: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    appUtilits.stickyNav();
  },
};
</script>
