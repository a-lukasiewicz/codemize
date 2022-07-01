<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <WhyUs />
    <Companies />
    <!-- <About /> -->
    <JoinUs />
    <ActionSection />
    <!-- <Pricing /> -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
// import Pricing from "../components/Pricing.vue";
import ActionSection from "../components/ActionSection.vue";
import Footer from "../components/Footer.vue";
import JoinUs from "../components/JoinUs.vue";
import WhyUs from "../components/WhyUs.vue";
import Companies from "../components/Companies.vue";
</script>