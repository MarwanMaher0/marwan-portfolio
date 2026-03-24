<template>
  <NuxtLayout name="portfolio" :header="2" :footer="4">
    <!-- Hero -->
    <section class="hero-area-four pt-250 rpt-120 pb-220 rpb-100 rel z-1">
      <div class="container container-1620 rel z-1">
        <div class="hero-four-content rel mt-50 text-center">
          <h1>
            <span class="marquee-wrap">
              <span class="marquee-inner one">
                <span>Hello, I'm</span> Marwan
              </span>
              <span class="marquee-inner one">
                <span>Hello, I'm</span> Marwan
              </span>
              <span class="marquee-inner one">
                <span>Hello, I'm</span> Marwan
              </span>
            </span>

            <span class="marquee-wrap">
              <span class="marquee-inner two">
                Developer <span>&amp; PM.</span>
              </span>
              <span class="marquee-inner two">
                Developer <span>&amp; PM.</span>
              </span>
              <span class="marquee-inner two">
                Developer <span>&amp; PM.</span>
              </span>
            </span>

            <span class="marquee-wrap">
              <span class="marquee-inner three">
                <span>Building Products</span> That Matter
              </span>
              <span class="marquee-inner three">
                <span>Building Products</span> That Matter
              </span>
              <span class="marquee-inner three">
                <span>Building Products</span> That Matter
              </span>
            </span>
          </h1>
          <div class="rotated-man-wrap">
            <div class="rotated-man">
              <img
                src="/assets/images/marwan.jpeg"
                alt="Marwan Maher Mostafa"                loading="lazy"
                width="570"
                height="570"              />
            </div>
          </div>
        </div>
      </div>
      <div class="hero-shapes">
        <img
          class="shape one"
          src="/assets/images/hero/hero-shape1.png"
          alt="Shape"
        />
        <img
          class="shape two"
          src="/assets/images/hero/hero-shape2.png"
          alt="Shape"
        />
      </div>
    </section>

    <!-- About -->
    <section class="about-area rel z-1">
      <div class="container-fluid">
        <div class="about-four-wrap py-130 rpy-100">
          <div class="container container-1290">
            <div class="row gap-70 align-items-center">
              <div class="col-lg-6">
                <div class="about-four-content rmb-55 wow fadeInUp delay-0-2s">
                  <div class="section-title mb-35">
                    <span class="sub-title mb-15">About Me</span>
                    <h2>From Front-End Dev to Project Manager</h2>
                  </div>
                  <p>
                    I'm Marwan Maher Mostafa — a developer who grew into product
                    leadership. I built a brain-health telemedicine platform at
                    IDAAM, then joined Digitee as a Front-End Developer building
                    AI-powered fashion platforms with Vue.js, Three.js, and
                    TensorFlow.js. I then moved to SIPRC where I progressed from
                    Senior Front-End to Full Stack Developer, and now lead as
                    Project Manager overseeing enterprise IP management
                    products.
                  </p>
                  <p>
                    With hands-on experience across 15+ production applications
                    — from AR try-on experiences to enterprise dashboards — I
                    bring both technical depth and strategic product thinking to
                    every project.
                  </p>
                  <ul class="list-style-three pt-25 pb-20">
                    <li>Vue.js / Nuxt / React / Next.js</li>
                    <li>TypeScript &amp; Enterprise Architecture</li>
                    <li>AR / AI / 3D Web Experiences</li>
                    <li>Product &amp; Project Management</li>
                  </ul>
                  <div class="about-btns">
                    <NuxtLink
                      href="/about"
                      class="theme-btn style-two mt-15 me-3"
                      >More About Me <i class="far fa-arrow-right"></i
                    ></NuxtLink>
                    <NuxtLink href="/projects" class="theme-btn mt-15"
                      >View Experience <i class="far fa-arrow-right"></i
                    ></NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-four-image wow fadeInUp delay-0-4s">
                  <img
                    src="/assets/images/marwan2.jpg"
                    alt="Marwan Maher Mostafa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services / What I Do -->
    <section class="service-section pt-130 rpt-100 pb-100 rpb-70">
      <div class="container container-1290">
        <div class="row justify-content-center mb-30">
          <div class="col-lg-7">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">What I Do</span>
              <h2>
                Full-stack development, product management, and technical
                leadership.
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="service-item style-three wow fadeInUp delay-0-2s">
              <div class="icon"><i class="flaticon-ux"></i></div>
              <h4>Vue / React Apps</h4>
              <p>
                Enterprise-grade SPAs with Vue 3, Nuxt, React, Next.js,
                TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="service-item style-three wow fadeInDown delay-0-2s">
              <div class="icon"><i class="flaticon-ai"></i></div>
              <h4>AR / AI Integration</h4>
              <p>
                TensorFlow.js body segmentation, MediaPipe pose detection, and
                Three.js 3D experiences.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="service-item style-three wow fadeInUp delay-0-2s">
              <div class="icon"><i class="flaticon-optimization-1"></i></div>
              <h4>Enterprise Dashboards</h4>
              <p>
                Bilingual RTL/LTR dashboards with charting, PDF export,
                role-based access, and real-time data.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="service-item style-three wow fadeInDown delay-0-2s">
              <div class="icon"><i class="flaticon-creativity"></i></div>
              <h4>Project Management</h4>
              <p>
                Leading cross-functional teams from requirements through
                delivery on enterprise SaaS products.
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
                  Tools and technologies I use to build production applications.
                </h2>
              </div>
              <p>
                My core stack is Vue.js / Nuxt with TypeScript and Tailwind CSS.
                I've also shipped production React/Next.js apps, integrated
                AI/AR with TensorFlow.js, and built full-stack features with
                Laravel.
              </p>
              <NuxtLink class="read-more mt-15" href="/contact"
                >Let's Work Together <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="my-skill-images wow fadeInRight delay-0-2s">
              <div class="skill-item">
                <img src="/assets/images/skills/skill4.png" alt="Vue.js" /><span
                  class="text"
                  >Vue 3 / Nuxt</span
                >
              </div>
              <div class="skill-item">
                <img src="/assets/images/skills/skill4.png" alt="React" /><span
                  class="text"
                  >React / Next.js</span
                >
              </div>
              <div class="skill-item">
                <img
                  src="/assets/images/skills/skill1.png"
                  alt="TypeScript"
                /><span class="text">TypeScript</span>
              </div>
              <div class="skill-item">
                <img
                  src="/assets/images/skills/skill2.png"
                  alt="Tailwind"
                /><span class="text">Tailwind CSS</span>
              </div>
              <div class="skill-item">
                <img
                  src="/assets/images/skills/skill8.png"
                  alt="Three.js"
                /><span class="text">Three.js / WebGL</span>
              </div>
              <div class="skill-item">
                <img
                  src="/assets/images/skills/skill9.png"
                  alt="TensorFlow"
                /><span class="text">TensorFlow.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work — one from each phase -->
    <section class="project-grid-area pb-130 rpb-100">
      <div class="container container-1210">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Featured Work</span>
              <h2>A highlight from each chapter of my career.</h2>
            </div>
          </div>
        </div>
        <div class="row gap-60">
          <div
            v-for="project in featured"
            :key="project.slug"
            class="col-lg-3 col-md-6"
          >
            <div class="project-item">
              <div
                class="image wow fadeInUp delay-0-2s"
                style="border-radius: 10px; overflow: hidden"
              >
                <img :src="project.image" :alt="project.title" loading="lazy" width="280" height="350" />
                <NuxtLink
                  :href="`/project-details?slug=${project.slug}`"
                  class="project-btn"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="content wow fadeInUp delay-0-2s">
                <span class="category">{{
                  companyLabels[project.company]
                }}</span>
                <h4>
                  <NuxtLink :href="`/project-details?slug=${project.slug}`">{{
                    project.title
                  }}</NuxtLink>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-40">
          <NuxtLink href="/projects" class="theme-btn style-two">
            View All 15 Projects <i class="far fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="work-with-area pb-150 rpb-145 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Next Step</span>
              <h2>Let's build something great together.</h2>
              <NuxtLink class="explore-more text-start mt-30" href="/contact"
                ><i class="fas fa-arrow-right"></i>
                <span>Start a Conversation</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <span class="big-text light-opacity">Portfolio</span>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { allProjects, getProjectsByCompany } from "~/data/projects";

useHead({
  title: "Marwan Maher Mostafa | Developer & Project Manager",
});

useSeoMeta({
  description:
    "Marwan Maher Mostafa — Developer & Project Manager. Built 15+ production apps at SIPRC, Digitee, IDAAM, and as a freelancer.",
  ogTitle: "Marwan Maher Mostafa | Developer & Project Manager",
  ogDescription:
    "Developer & Project Manager with 15+ production apps. Vue.js, React, TypeScript, AR/AI, enterprise dashboards.",
  ogImage: "/assets/images/marwan.jpeg",
  ogUrl: "https://marwanmaher.dev",
  twitterTitle: "Marwan Maher Mostafa | Developer & Project Manager",
  twitterDescription:
    "Developer & Project Manager with 15+ production apps. Vue.js, React, TypeScript, AR/AI, enterprise dashboards.",
  twitterImage: "/assets/images/marwan.jpeg",
});

const companyLabels = {
  siprc: "SIPRC",
  digitee: "Digitee",
  IDAAM: "IDAAM",
  freelance: "Freelance",
};

// Pick one featured project from each career phase
const featured = [
  getProjectsByCompany("siprc")[0], // IPORA
  getProjectsByCompany("digitee")[0], // Digitee Consumer Platform
  getProjectsByCompany("IDAAM")[0], // Keme Brain Health
  getProjectsByCompany("freelance")[0], // Climate Risk Assessment
];
</script>
