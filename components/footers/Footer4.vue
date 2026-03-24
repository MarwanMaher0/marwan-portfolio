<template>
  <footer
    class="main-footer footer-four pt-100 rel bgs-cover z-1"
    :style="`background-image: url(${a('/assets/images/footer/footer-bg-shape-three.png')})`"
  >
    <div class="container container-1290 pb-40">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="footer-widget footer-about wow fadeInUp delay-0-2s">
            <div class="section-title mb-30">
              <h2>Let's Work Together</h2>
            </div>
            <ul class="social-style-four">
              <li><NuxtLink href="/">Home</NuxtLink></li>
              <li><NuxtLink href="/about">About</NuxtLink></li>
              <li><NuxtLink href="/projects">Experience</NuxtLink></li>
              <li><NuxtLink href="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-sm-4">
          <div class="footer-widget footer-links wow fadeInUp delay-0-4s">
            <h5 class="footer-title">Follow Me</h5>
            <div class="footer-widget widget_nav_menu">
              <ul class="list-style-two">
                <li>
                  <a
                    href="https://www.linkedin.com/in/marwan-maher-b11628227/"
                    target="_blank"
                    rel="noopener"
                    >LinkedIn</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/marwan.maher.50746"
                    target="_blank"
                    rel="noopener"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a
                    href="https://twitter.com/MElg3fre"
                    target="_blank"
                    rel="noopener"
                    >Twitter / X</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/marwan_elg3fre/"
                    target="_blank"
                    rel="noopener"
                    >Instagram</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-8">
          <div class="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
            <h5 class="footer-title">Get In Touch</h5>
            <p class="mb-15">
              <a href="mailto:Marwanmaher635@gmail.com" class="text-white"
                >Marwanmaher635@gmail.com</a
              >
            </p>
            <p class="mb-20">
              <a href="tel:+201025027019" class="text-white"
                >+20 102 502 7019</a
              >
            </p>
            <div class="footer-logo pt-15">
              <NuxtLink href="/"
                ><img
                  :src="a('/assets/images/logos/logo.svg')"
                  alt="Marwan Maher"
                  style="max-height: 40px"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s">
      <div class="container">
        <p>
          © {{ new Date().getFullYear() }}, Made with passion by
          <NuxtLink href="/">Marwan Maher</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer4",
  setup() {
    const a = useAssetUrl();
    return { a };
  },
};
</script>
