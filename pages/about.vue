<template>
  <NuxtLayout name="portfolio" :header="2" :footer="4">
    <PageBanner :pageName="'About Me'" />

    <!-- Bio -->
    <section class="about-area pt-130 rpt-100 pb-70 rpb-40 rel z-1">
      <div class="container container-1290">
        <div class="row gap-70 align-items-center">
          <div class="col-lg-6">
            <div class="about-four-image wow fadeInUp delay-0-2s">
              <img
                :src="a('/assets/images/marwan2.jpg')"
                alt="Marwan Maher Mostafa"
                loading="lazy"
                width="570"
                height="570"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-four-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-35">
                <span class="sub-title mb-15">Who I Am</span>
                <h2>Developer turned Product Manager</h2>
              </div>
              <p>
                I'm Marwan Maher Mostafa — a software engineer with a trajectory
                from hands-on front-end development to leading product teams. I
                started in freelance, sharpening my Vue.js skills across diverse
                client projects, then spent 6 months at IDAAM building a
                brain-health telemedicine platform for the US market. I joined
                Digitee as a Front-End Developer where I built AI-powered
                fashion platforms integrating AR, NFTs, and multi-region
                e-commerce.
              </p>
              <p>
                At SIPRC, I grew from Senior Front-End Developer to Full Stack
                Engineer, and now serve as Project Manager — overseeing
                enterprise IP management platforms for the Saudi market. I bring
                the unique advantage of deep technical fluency combined with
                product ownership experience.
              </p>
              <ul class="list-style-three pt-20">
                <li>15+ production applications shipped</li>
                <li>Enterprise SaaS &amp; Consumer platforms</li>
                <li>Bilingual RTL/LTR internationalization</li>
                <li>AR / AI / 3D web experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Timeline -->
    <section class="service-section pb-100 rpb-70">
      <div class="container container-1290">
        <div class="row justify-content-center mb-40">
          <div class="col-lg-7">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Career Path</span>
              <h2>From code to leadership — my professional journey.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            v-for="exp in experience"
            :key="exp.id"
            class="col-xl-4 col-md-6"
          >
            <div class="service-item style-three wow fadeInUp delay-0-2s">
              <div class="mb-15">
                <span
                  class="d-inline-block px-3 py-1 rounded-pill"
                  style="
                    background: rgba(255, 255, 255, 0.06);
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.5);
                  "
                >
                  {{ exp.period }}
                </span>
              </div>
              <h4>{{ exp.company }}</h4>
              <p class="mb-10">
                <strong style="color: rgba(255, 255, 255, 0.7)">{{
                  exp.role
                }}</strong>
              </p>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="service-section pb-100 rpb-70">
      <div class="container container-1290">
        <div class="row justify-content-center mb-20">
          <div class="col-lg-7">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">How I Work</span>
              <h2>A structured approach to building quality software.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="service-item style-three wow fadeInUp delay-0-2s">
              <div class="icon"><i class="flaticon-ux"></i></div>
              <h4>Requirements &amp; Architecture</h4>
              <p>
                Deep-dive into business needs, user stories, and technical
                architecture before writing a single line of code.
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-item style-three wow fadeInUp delay-0-4s">
              <div class="icon"><i class="flaticon-mobile-banking"></i></div>
              <h4>Development &amp; Testing</h4>
              <p>
                Clean, typed code with component-driven architecture. E2E tests
                with Playwright/Cypress. CI/CD pipelines.
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-item style-three wow fadeInUp delay-0-6s">
              <div class="icon"><i class="flaticon-optimization-1"></i></div>
              <h4>Delivery &amp; Handover</h4>
              <p>
                Comprehensive documentation, VitePress dev guides, deployment to
                AWS/Vercel, and structured handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="my-skills-area rel z-1 pb-130 rpb-100">
      <div class="container container-1290">
        <div class="row gap-100 justify-content-between align-items-center">
          <div class="col-lg-5">
            <div class="my-skill-content rmb-55 wow fadeInLeft delay-0-2s">
              <div class="section-title mb-35">
                <span class="sub-title mb-15">Tech Stack</span>
                <h2>
                  The tools I use to deliver production-grade applications.
                </h2>
              </div>
              <p>
                Core expertise in Vue 3 / Nuxt and the broader JavaScript
                ecosystem. Production experience with React/Next.js, Three.js
                for 3D, TensorFlow.js for AI, and Laravel on the backend. Full
                i18n and RTL implementation across enterprise platforms.
              </p>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="my-skill-images wow fadeInRight delay-0-2s">
              <div class="skill-item">
                <img :src="a('/assets/images/skills/skill4.png')" alt="Vue.js" /><span
                  class="text"
                  >Vue 3 / Nuxt</span
                >
              </div>
              <div class="skill-item">
                <img :src="a('/assets/images/skills/skill4.png')" alt="React" /><span
                  class="text"
                  >React / Next.js</span
                >
              </div>
              <div class="skill-item">
                <img
                  :src="a('/assets/images/skills/skill1.png')"
                  alt="TypeScript"
                /><span class="text">TypeScript</span>
              </div>
              <div class="skill-item">
                <img
                  :src="a('/assets/images/skills/skill2.png')"
                  alt="Tailwind"
                /><span class="text">Tailwind CSS</span>
              </div>
              <div class="skill-item">
                <img
                  :src="a('/assets/images/skills/skill8.png')"
                  alt="Three.js"
                /><span class="text">Three.js</span>
              </div>
              <div class="skill-item">
                <img :src="a('/assets/images/skills/skill9.png')" alt="TF.js" /><span
                  class="text"
                  >TensorFlow.js</span
                >
              </div>
              <div class="skill-item">
                <img :src="a('/assets/images/skills/skill3.png')" alt="Charts" /><span
                  class="text"
                  >ApexCharts</span
                >
              </div>
              <div class="skill-item">
                <img
                  :src="a('/assets/images/skills/skill1.png')"
                  alt="Laravel"
                /><span class="text">Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { experience } from "~/data/projects";

const a = useAssetUrl();

useHead({
  title: "About Me — Marwan Maher Mostafa",
});

useSeoMeta({
  description:
    "Learn about Marwan Maher Mostafa — from front-end developer to project manager. 15+ production apps, Vue.js, React, TypeScript, AR/AI.",
  ogTitle: "About Me — Marwan Maher Mostafa",
  ogDescription:
    "From front-end developer to project manager. 15+ production apps at SIPRC, Digitee, IDAAM, and freelance.",
  ogImage: a("/assets/images/marwan2.jpg"),
  ogUrl: "https://marwanmaher.dev/about",
  twitterTitle: "About Me — Marwan Maher Mostafa",
  twitterDescription:
    "From front-end developer to project manager. 15+ production apps at SIPRC, Digitee, IDAAM, and freelance.",
  twitterImage: a("/assets/images/marwan2.jpg"),
});
</script>
