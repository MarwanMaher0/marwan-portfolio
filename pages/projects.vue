<template>
  <NuxtLayout name="portfolio" :header="2" :footer="4">
    <PageBanner :pageName="'Experience'" />

    <!-- Timeline -->
    <section class="project-timeline-area pt-100 rpt-80 pb-70 rpb-50 rel z-1">
      <div class="container container-1290">
        <!-- Intro -->
        <div class="row justify-content-center mb-55">
          <div class="col-xl-8">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Career Timeline</span>
              <h2>
                From front-end development to product management — here's
                everything I've built.
              </h2>
            </div>
          </div>
        </div>

        <!-- Loop through each experience phase -->
        <div
          v-for="(exp, ei) in experience"
          :key="exp.id"
          class="timeline-phase mb-80"
        >
          <!-- Phase header -->
          <div class="row align-items-center mb-45 wow fadeInUp delay-0-2s">
            <div class="col-lg-8">
              <div class="phase-header">
                <span
                  class="sub-title mb-10 d-inline-block"
                  :style="{ color: phaseColor(exp.id) }"
                  >{{ exp.period }}</span
                >
                <h3 class="mb-10">
                  {{ exp.company }}
                  <span class="fw-normal text-white-50">— {{ exp.role }}</span>
                </h3>
                <p class="text-white-50 mb-0">{{ exp.description }}</p>
              </div>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <span
                class="badge rounded-pill px-4 py-2 fs-6"
                :style="{
                  backgroundColor: phaseColor(exp.id),
                  color: '#0b0b0f',
                }"
              >
                {{ getProjectsByCompany(exp.id).length }} Projects
              </span>
            </div>
          </div>

          <!-- Decorative line -->
          <div
            class="mb-35"
            :style="{
              height: '2px',
              background: `linear-gradient(90deg, ${phaseColor(exp.id)}, transparent)`,
            }"
          ></div>

          <!-- Project cards grid -->
          <div class="row">
            <div
              v-for="(project, pi) in getProjectsByCompany(exp.id)"
              :key="project.slug"
              class="col-xl-4 col-md-6 mb-30"
            >
              <div
                class="project-timeline-card wow fadeInUp"
                :style="{ animationDelay: `${pi * 0.1}s` }"
              >
                <NuxtLink
                  :href="`/project-details?slug=${project.slug}`"
                  class="d-block"
                >
                  <div class="card-image-wrap">
                    <img
                      :src="a(project.image)"
                      :alt="project.title"
                      class="w-100"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                    <div class="card-overlay">
                      <span
                        class="card-category"
                        :style="{ backgroundColor: phaseColor(exp.id) }"
                        >{{ project.category }}</span
                      >
                    </div>
                  </div>
                  <div class="card-body-content">
                    <h5 class="mb-5">{{ project.title }}</h5>
                    <p class="text-white-50 small mb-10">
                      {{ project.subtitle }}
                    </p>
                    <div class="tech-pills">
                      <span
                        v-for="t in project.tech.slice(0, 4)"
                        :key="t"
                        class="tech-pill"
                        >{{ t }}</span
                      >
                      <span v-if="project.tech.length > 4" class="tech-pill"
                        >+{{ project.tech.length - 4 }}</span
                      >
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="work-with-area pb-150 rpb-145 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Let's Work Together</span>
              <h2>
                Have a project in mind? I'd love to help bring it to life.
              </h2>
              <NuxtLink class="explore-more text-start mt-30" href="/contact">
                <i class="fas fa-arrow-right"></i>
                <span>Get in Touch</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <span class="big-text light-opacity">Experience</span>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { experience, getProjectsByCompany } from "~/data/projects";

const a = useAssetUrl();

useHead({
  title: "Experience & Projects — Marwan Maher Mostafa",
});

useSeoMeta({
  description:
    "Explore 15+ production projects by Marwan Maher Mostafa — enterprise dashboards, AR/AI experiences, and full-stack applications at SIPRC, Digitee, IDAAM.",
  ogTitle: "Experience & Projects — Marwan Maher Mostafa",
  ogDescription:
    "15+ production projects — enterprise dashboards, AR/AI experiences, and full-stack applications.",
  ogImage: "https://marwanmaher0.github.io/assets/images/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: "https://marwanmaher0.github.io/projects",
  twitterTitle: "Experience & Projects — Marwan Maher Mostafa",
  twitterDescription:
    "15+ production projects — enterprise dashboards, AR/AI experiences, and full-stack applications.",
  twitterImage: "https://marwanmaher0.github.io/assets/images/og-image.jpg",
});

const phaseColor = (id) => {
  const colors = {
    siprc: "#00d4aa",
    digitee: "#7c6fff",
    IDAAM: "#ff9f43",
    freelance: "#ff6b6b",
  };
  return colors[id] || "#ffffff";
};
</script>

<style scoped>
.timeline-phase {
  position: relative;
}

.phase-header .sub-title {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
}

.project-timeline-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.35s ease;
}

.project-timeline-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.project-timeline-card a {
  text-decoration: none;
  color: inherit;
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.card-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-timeline-card:hover .card-image-wrap img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
}

.card-category {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0b0b0f;
}

.card-body-content {
  padding: 20px;
}

.card-body-content h5 {
  color: #fff;
  font-size: 17px;
  line-height: 1.3;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.tech-pill {
  display: inline-block;
  padding: 3px 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}
</style>
