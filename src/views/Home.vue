<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <WhyUs />
    <Companies />
    <Numbers />
    <JoinUs />
    <ActionSection />
    <!-- <Pricing /> -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/basic/Navbar.vue";
import Hero from "../components/molecules/Hero/Hero.vue";
import About from "../components/molecules/About/About.vue";
// import Pricing from "../components/Pricing.vue";
import ActionSection from "../components/molecules/Ratings/ActionSection.vue";
import Footer from "../components/basic/Footer.vue";
import JoinUs from "../components/atoms/JoinUs.vue";
import WhyUs from "../components/molecules/WhyUs/WhyUs.vue";
import Companies from "../components/molecules/Companies/Companies.vue";
import Numbers from "../components/molecules/WhyUs/Numbers.vue";
</script>