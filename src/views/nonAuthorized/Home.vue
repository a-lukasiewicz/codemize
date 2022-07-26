<template>
  <div id="container">
    <LoadingText />

    <Navbar />
    <Hero />
    <About />
    <WhyUs experience />
    <Companies />
    <WhyUs />
    <JoinUs />

    <Suspense>
      <template #default>
        <ActionSection />
      </template>
      <template #fallback>
        <div class="absolute hidden -ml-6 top-1/2 left-1/2">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '../../components/basic/Navbar.vue';
import Hero from '../../components/molecules/Hero/Hero.vue';
import About from '../../components/molecules/About/About.vue';
import ActionSection from '../../components/molecules/Ratings/ActionSection.vue';
import Footer from '../../components/basic/Footer.vue';
import JoinUs from '../../components/atoms/JoinUs.vue';
import WhyUs from '../../components/molecules/WhyUs/WhyUs.vue';
import Companies from '../../components/molecules/Companies/Companies.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
import LoadingText from '@/components/atoms/LoadingText.vue';
</script>
