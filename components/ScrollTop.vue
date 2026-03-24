<template>
  <!-- Scroll Top Button -->
  <button class="scroll-top scroll-to-target" @click="scrollTop()">
    <span class="far fa-chevron-double-up"></span>
  </button>
</template>

<script>
import { appUtilits } from "~/utilits";

export default {
  name: "ScrollTop",
  mounted() {
    appUtilits.scrollTop();
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
