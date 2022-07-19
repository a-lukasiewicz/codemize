<template>
  <div class="my-4">
    <div
      class="px-4 py-8 text-white card bg-main-2"
      @click="flipped = !flipped"
    >
      <transition name="flip">
        <div v-show="!flipped">
          <h2 class="text-sm">
            {{ frontText }}
          </h2>
        </div>
      </transition>

      <transition name="flip">
        <div v-show="flipped">
          <h2 class="text-sm">
            {{ backText }}
          </h2>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  frontText: { type: String, default: '' },
  backText: { type: String, default: '' },
});

let flipped = ref(false);
</script>
<style scoped>
.card {
  transition: transform 0.5s;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  border-radius: 5px;
  margin: 0 1rem;
}

.card:hover {
  transform: scale(1.1);
}

.flip-enter-active {
  transition: all 0.4s ease-in;
}

.flip-enter-from {
  transform: rotateX(90deg);
  opacity: 0;
}

.flip-leave {
  display: none;
}
</style>
