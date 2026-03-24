<template>
  <NuxtLayout name="portfolio" :header="2" :footer="4">
    <!-- Hero Banner with project screenshot -->
    <section
      class="page-banner pt-210 rpt-150 pb-75 rel z-1"
      style="
        background: linear-gradient(
          180deg,
          rgba(11, 11, 15, 0) 0%,
          #0b0b0f 100%
        );
      "
    >
      <div class="container container-1290">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="d-flex align-items-center gap-3 mb-15 wow fadeInUp delay-0-1s"
            >
              <span
                class="badge rounded-pill px-3 py-2"
                :style="{ backgroundColor: companyColor, color: '#0b0b0f' }"
              >
                {{ companyLabel }}
              </span>
              <span class="text-white-50" v-if="project.url">
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="text-white-50"
                >
                  <i class="fas fa-external-link-alt me-1"></i> Live Site
                </a>
              </span>
            </div>
            <h1
              class="hero-title style-two mt-10 mb-15 wow fadeInUp delay-0-2s"
            >
              {{ project.title }}
            </h1>
            <p class="text-white-50 fs-5 wow fadeInUp delay-0-3s">
              {{ project.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshot -->
    <div class="project-details-image rel z-1 mb-50">
      <div class="container container-1290">
        <div
          class="image wow fadeInUp delay-0-2s"
          style="
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.06);
          "
        >
          <img
            :src="a(project.image)"
            :alt="project.title"
            style="width: 100%; display: block"
            loading="lazy"
            width="1290"
            height="720"
          />
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <section class="project-details-area pt-30 rel z-1">
      <div class="container container-1290">
        <!-- Meta row -->
        <div class="row pb-35 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">Project Overview</h3>
          </div>
          <div class="col-lg-8">
            <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
              <div class="col">
                <h5>Company</h5>
                <p class="sub-title mb-20">{{ companyLabel }}</p>
              </div>
              <div class="col">
                <h5>Category</h5>
                <p class="sub-title mb-20">{{ project.category }}</p>
              </div>
              <div class="col">
                <h5>Period</h5>
                <p class="sub-title mb-20">
                  {{ experiencePhase?.period || "—" }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <!-- Description -->
        <div class="row pt-50 pb-40 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">About This Project</h3>
          </div>
          <div class="col-lg-8">
            <div class="big-letter text">
              {{ project.description }}
            </div>
          </div>
        </div>

        <!-- Key Highlights -->
        <div class="row pb-50 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">Key Highlights</h3>
          </div>
          <div class="col-lg-8">
            <ul class="list-style-three">
              <li v-for="h in project.highlights" :key="h">{{ h }}</li>
            </ul>
          </div>
        </div>
        <hr />

        <!-- Tech Stack -->
        <div class="row pt-50 pb-70 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">Tech Stack</h3>
          </div>
          <div class="col-lg-8">
            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="tech-badge"
                :style="{
                  borderColor: companyColor + '40',
                  color: companyColor,
                }"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>

    <!-- Prev / Next navigation -->
    <section class="next-prev-post-area">
      <div class="container container-1290">
        <div class="next-prev-post pt-80 rpt-60 pb-80 rpb-60">
          <div v-if="prevProject" class="prev-post wow fadeInLeft delay-0-2s">
            <div class="image" style="border-radius: 8px; overflow: hidden">
              <img :src="a(prevProject.image)" :alt="prevProject.title" />
            </div>
            <div class="content">
              <h4>
                <NuxtLink :href="`/project-details?slug=${prevProject.slug}`">{{
                  prevProject.title
                }}</NuxtLink>
              </h4>
              <NuxtLink
                class="read-more"
                :href="`/project-details?slug=${prevProject.slug}`"
                >Previous <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div v-else class="prev-post wow fadeInLeft delay-0-2s">
            <div class="content">
              <h4><NuxtLink href="/projects">All Projects</NuxtLink></h4>
              <NuxtLink class="read-more" href="/projects"
                >Back <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div v-if="nextProject" class="next-post wow fadeInRight delay-0-2s">
            <div class="content">
              <h4>
                <NuxtLink :href="`/project-details?slug=${nextProject.slug}`">{{
                  nextProject.title
                }}</NuxtLink>
              </h4>
              <NuxtLink
                class="read-more"
                :href="`/project-details?slug=${nextProject.slug}`"
                >Next <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
            <div class="image" style="border-radius: 8px; overflow: hidden">
              <img :src="a(nextProject.image)" :alt="nextProject.title" />
            </div>
          </div>
          <div v-else class="next-post wow fadeInRight delay-0-2s">
            <div class="content">
              <h4><NuxtLink href="/contact">Get in Touch</NuxtLink></h4>
              <NuxtLink class="read-more" href="/contact"
                >Contact <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import {
  allProjects,
  getProjectBySlug,
  getProjectIndex,
  experience,
} from "~/data/projects";

const a = useAssetUrl();
const route = useRoute();
const slug = computed(() => route.query.slug || allProjects[0].slug);
const project = computed(() => getProjectBySlug(slug.value) || allProjects[0]);

const experiencePhase = computed(() =>
  experience.find((e) => e.id === project.value.company),
);

const companyLabels = {
  siprc: "SIPRC",
  digitee: "Digitee",
  IDAAM: "IDAAM",
  freelance: "Freelance",
};
const companyColors = {
  siprc: "#00d4aa",
  digitee: "#7c6fff",
  IDAAM: "#ff9f43",
  freelance: "#ff6b6b",
};
const companyLabel = computed(
  () => companyLabels[project.value.company] || project.value.company,
);
const companyColor = computed(
  () => companyColors[project.value.company] || "#ffffff",
);

const currentIndex = computed(() => getProjectIndex(slug.value));
const prevProject = computed(() =>
  currentIndex.value > 0 ? allProjects[currentIndex.value - 1] : null,
);
const nextProject = computed(() =>
  currentIndex.value < allProjects.length - 1
    ? allProjects[currentIndex.value + 1]
    : null,
);

useHead({
  title: () => `${project.value.title} — Marwan Maher Mostafa`,
});

useSeoMeta({
  description: () => project.value.description?.slice(0, 160),
  ogTitle: () => `${project.value.title} — Marwan Maher Mostafa`,
  ogDescription: () => project.value.subtitle,
  ogImage: () => a(project.value.image),
  ogUrl: () => `https://marwanmaher.dev/project-details?slug=${slug.value}`,
  twitterTitle: () => `${project.value.title} — Marwan Maher Mostafa`,
  twitterDescription: () => project.value.subtitle,
  twitterImage: () => a(project.value.image),
});
</script>

<style scoped>
.tech-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
