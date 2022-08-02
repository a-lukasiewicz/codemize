<template>
  <div class="relative text-center text-white header">
    <Navbar />
    <div class="flex flex-col inner-header">
      <h1
        class="my-4 text-3xl font-bold leading-tight text-center md:text-6xl lg:text-left"
      >
        Master your skills easiest way possible.
      </h1>
      <p class="pt-6 text-xl font-normal leading-normal md:text-2xl">
        Codemize is for you all that want to start your carrer in IT.
      </p>
      <p class="py-3 mb-8 text-xl font-normal leading-normal md:text-2xl">
        It's platform that gives oppurtunity to learn most important concepts to
        be job ready.
      </p>
      <div class="flex justify-center w-full md:justify-end">
        <router-link to="/pricing">
          <Button class="text-white bg-main-1">Join us!</Button>
        </router-link>
      </div>
    </div>
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Navbar from '@/components/basic/Navbar.vue';
</script>
<style scoped>
.header {
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
}

.inner-header {
  height: 65vh;
  width: 100vw;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
