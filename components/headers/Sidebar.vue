<template>
  <!--Form Back Drop-->
  <div class="form-back-drop" @click="toggleSidebar()"></div>

  <!-- Hidden Sidebar -->
  <section class="hidden-bar" role="complementary" aria-label="Contact sidebar">
    <div class="inner-box text-center">
      <div class="cross-icon" @click="toggleSidebar()">
        <span class="fa fa-times"></span>
      </div>
      <div class="title">
        <h4>Get in Touch</h4>
      </div>

      <!-- Contact Info -->
      <div class="appointment-form">
        <p
          style="
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
            font-size: 15px;
          "
        >
          Have a project in mind? Let's discuss it.
        </p>
        <div style="margin-bottom: 15px">
          <a
            href="mailto:Marwanmaher635@gmail.com"
            style="
              color: #00d4aa;
              text-decoration: none;
              display: block;
              margin-bottom: 8px;
            "
          >
            <i class="far fa-envelope" style="margin-right: 8px"></i
            >Marwanmaher635@gmail.com
          </a>
          <a
            href="tel:+201025027019"
            style="
              color: rgba(255, 255, 255, 0.7);
              text-decoration: none;
              display: block;
              margin-bottom: 8px;
            "
          >
            <i class="fas fa-phone" style="margin-right: 8px"></i>+20 102 502
            7019
          </a>
          <span style="color: rgba(255, 255, 255, 0.5); display: block">
            <i class="fas fa-map-marker-alt" style="margin-right: 8px"></i
            >Assiut, Egypt
          </span>
        </div>
        <NuxtLink
          href="/contact"
          class="theme-btn style-two w-100"
          @click="toggleSidebar()"
          >Send a Message <i class="far fa-arrow-right"></i
        ></NuxtLink>
      </div>

      <!--Social Icons-->
      <div class="social-style-one">
        <a
          href="https://www.linkedin.com/in/marwan-maher-b11628227/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a
          href="https://www.facebook.com/marwan.maher.50746"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a
          href="https://twitter.com/MElg3fre"
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          href="https://www.instagram.com/marwan_elg3fre/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
    </div>
  </section>
  <!--End Hidden Sidebar -->
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    toggleSidebar() {
      if (typeof document !== "undefined") {
        document.querySelector("body").classList.remove("side-content-visible");
      }
    },
  },
};
</script>
