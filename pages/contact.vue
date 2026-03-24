<template>
  <NuxtLayout name="portfolio" :header="2" :footer="4">
    <PageBanner :pageName="'Contact'" />

    <section class="contact-page-area py-130 rpy-100 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div class="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div class="row">
                <div class="col-xl-10">
                  <div class="section-title mb-60">
                    <span class="sub-title mb-15">Let's Talk</span>
                    <h2>Have a project in mind? Let's make it happen.</h2>
                  </div>
                </div>
              </div>
              <p class="pb-30">
                Whether you need a developer, a project manager, or a technical
                partner — I'm always open to discussing new opportunities and
                collaborations.
              </p>
              <div class="row gap-80 pb-30">
                <div class="col-sm-6">
                  <div class="our-location-address mb-40">
                    <h5>Email &amp; Phone</h5>
                    <p>Reach out directly for projects and collaboration.</p>
                    <a class="mailto" href="mailto:Marwanmaher635@gmail.com">Marwanmaher635@gmail.com</a><br />
                    <a class="callto" href="tel:+201025027019"><i class="fas fa-phone"></i> +20 102 502 7019</a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="our-location-address mb-40">
                    <h5>Location</h5>
                    <p>Assiut, Egypt</p>
                    <p class="mt-10">Available for remote work worldwide and on-site in Saudi Arabia.</p>
                  </div>
                </div>
              </div>
              <h4>Follow Me</h4>
              <div class="social-style-two pt-15">
                <a href="https://www.linkedin.com/in/marwan-maher-b11628227/" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/marwan.maher.50746" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/MElg3fre" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/marwan_elg3fre/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
                <a href="mailto:Marwanmaher635@gmail.com"><i class="far fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="contact-page-form form-style-one wow fadeInUp delay-0-2s">
              <div class="section-title mb-35">
                <span class="sub-title mb-15">Project Inquiry</span>
                <h3>Send a message</h3>
              </div>

              <div v-if="formStatus === 'success'" class="alert" style="background: rgba(0, 212, 170, 0.15); border: 1px solid #00d4aa; color: #00d4aa; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
                <i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
              </div>
              <div v-if="formStatus === 'error'" class="alert" style="background: rgba(255, 107, 107, 0.15); border: 1px solid #ff6b6b; color: #ff6b6b; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
                <i class="fas fa-exclamation-circle"></i> Something went wrong. Please try again or email me directly.
              </div>

              <form
                @submit.prevent="submitForm"
                id="contactForm"
                class="contactForm"
                aria-label="Contact form"
              >
                <div class="row gap-60 pt-15">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="name"><i class="far fa-user"></i></label>
                      <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="email"><i class="far fa-envelope"></i></label>
                      <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="subject"><i class="far fa-briefcase"></i></label>
                      <input type="text" id="subject" v-model="form.subject" class="form-control" placeholder="Project Type" required />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message"><i class="far fa-pencil"></i></label>
                      <textarea id="message" v-model="form.message" class="form-control" rows="3" placeholder="Tell me about your project" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group pt-5 mb-0">
                      <button type="submit" class="theme-btn style-two w-100" :disabled="sending">
                        <span v-if="sending"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
                        <span v-else>Send Message <i class="far fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
      <div class="container-fluid">
        <div class="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76941809893!2d31.12256!3d27.18096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450bab47a4c035%3A0x2168804b1c2cabb5!2sAssiut%2C%20Assiut%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
            style="border: 0; width: 100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contact",
  setup() {
    useHead({
      title: "Contact — Marwan Maher Mostafa",
    });

    useSeoMeta({
      description:
        "Get in touch with Marwan Maher Mostafa for projects, collaboration, or opportunities. Based in Assiut, Egypt — available for remote work worldwide.",
      ogTitle: "Contact — Marwan Maher Mostafa",
      ogDescription:
        "Get in touch for projects, collaboration, or opportunities. Available for remote work worldwide.",
      ogUrl: "https://marwanmaher.dev/contact",
      twitterTitle: "Contact — Marwan Maher Mostafa",
      twitterDescription:
        "Get in touch for projects, collaboration, or opportunities. Available for remote work worldwide.",
    });

    const config = useRuntimeConfig();
    return { config };
  },
  data() {
    return {
      formStatus: null,
      sending: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.sending = true;
      this.formStatus = null;
      try {
        await emailjs.send(
          this.config.public.emailjsServiceId,
          this.config.public.emailjsTemplateId,
          {
            from_name: this.form.name,
            from_email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
          },
          this.config.public.emailjsPublicKey
        );
        this.formStatus = "success";
        this.form = { name: "", email: "", subject: "", message: "" };
        setTimeout(() => { this.formStatus = null; }, 6000);
      } catch (err) {
        this.formStatus = "error";
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>
