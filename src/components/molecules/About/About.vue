<template>
  <section id="aboutUs" class="py-24 bg-white">
    <div class="flex flex-col">
      <Heading title="Remotely and at any time" :divider="true" />
      <div class="flex flex-col justify-between px-10 lg:px-60">
        <AboutUsOption
          iconURL="remotely.svg"
          imagePosition="left"
          linkTitle="Remote learning"
          class="pt-6 lg:pt-0"
        />
        <AboutUsOption
          iconURL="progress.svg"
          linkTitle="Control your progress"
          class="pt-6"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AboutUsOption from './AboutUsOption.vue';
import Heading from '../../atoms/Heading.vue';
</script>
