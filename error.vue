<template>
  <div class="page-wrapper">
    <!-- main header -->
    <header class="main-header error-header menu-absolute">
      <!--Header-Upper-->
      <div class="header-upper">
        <div class="container container-1290 clearfix">
          <div class="header-inner py-50 rpy-10 rel d-flex align-items-center">
            <div class="error-page-logo me-auto">
              <div class="logo">
                <NuxtLink href="/"
                  ><img
                    src="/assets/images/logos/logo.svg"
                    alt="Marwan Maher"
                    title="Marwan Maher"
                    style="max-height: 38px"
                /></NuxtLink>
              </div>
            </div>

            <!-- Menu Button -->
            <div class="menu-btns">
              <NuxtLink href="/" class="theme-btn style-two"
                >Back to Home <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--End Header Upper-->
    </header>

    <!-- Error Section Start -->
    <section
      class="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container container-1290">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="error-content rmb-55 wow fadeInRight delay-0-2s">
              <h1>{{ statusCode }}</h1>
              <div class="section-title mb-50 rmb-35">
                <h2>{{ errorMessage }}</h2>
              </div>
              <NuxtLink href="/" class="theme-btn style-two"
                >Go to Home <i class="far fa-arrow-right"></i
              ></NuxtLink>
              <div class="social-style-four d-flex mt-60 rmt-35">
                <a href="https://www.linkedin.com/in/marwan-maher-b11628227/" target="_blank" rel="noopener"
                  ><i class="fab fa-linkedin-in"></i> <span>LinkedIn</span></a
                >
                <a href="https://www.facebook.com/marwan.maher.50746" target="_blank" rel="noopener"
                  ><i class="fab fa-facebook-f"></i> <span>Facebook</span></a
                >
                <a href="https://twitter.com/MElg3fre" target="_blank" rel="noopener"
                  ><i class="fab fa-twitter"></i> <span>Twitter</span></a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="error-image wow zoomIn delay-0-2s">
              <img
                src="/assets/images/background/404-error.png"
                alt="Error"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Error Section End -->
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const statusCode = computed(() => props.error?.statusCode || 404);
const errorMessage = computed(() => {
  const code = statusCode.value;
  if (code === 404) return "This page could not be found.";
  if (code === 500) return "Something went wrong on the server.";
  return props.error?.message || "An unexpected error occurred.";
});

useHead({
  title: () => `${statusCode.value} Error — Marwan Maher Mostafa`,
});
</script>
