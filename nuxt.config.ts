// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  modules: ["nuxt-swiper"],
  devtools: { enabled: process.env.NODE_ENV !== "production" },

  runtimeConfig: {
    public: {
      emailjsServiceId: "",
      emailjsTemplateId: "",
      emailjsPublicKey: "",
      siteUrl: "https://marwanmaher.dev",
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/about": { prerender: true },
    "/projects": { prerender: true },
    "/contact": { prerender: true },
    "/project-details": { prerender: true },
  },

  app: {
    baseURL: "/marwan-portfolio/",
    head: {
      title: "Marwan Maher Mostafa | Developer & Project Manager",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Marwan Maher Mostafa — Developer & Project Manager. Built 15+ production apps at SIPRC, Digitee, IDAAM, and as a freelancer. Vue.js, React, TypeScript, AR/AI, enterprise dashboards.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#0b0b0f" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Marwan Maher Mostafa" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@MElg3fre" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/assets/images/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "canonical",
          href: "https://marwanmaher.dev",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: "/assets/css/flaticon.min.css" },
        { rel: "stylesheet", href: "/assets/css/fontawesome-5.14.0.min.css" },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/assets/css/custom.css" },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },

  nitro: {
    compressPublicAssets: true,
    preset: "github-pages",
    prerender: {
      failOnError: false,
      ignore: ["/manifest.json"],
    },
  },
});
