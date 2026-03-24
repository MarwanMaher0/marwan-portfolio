<template>
  <Footer4 />
</template>

<script>
import Footer4 from "./Footer4.vue";

export default {
  name: "Footer",
  components: { Footer4 },
  props: {
    footer: {
      type: Number,
      default: 4,
    },
  },
};
</script>
