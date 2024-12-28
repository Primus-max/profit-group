<template>
  <BaseSection 
    background="var(--color-white)" 
    :z-index="2"
    has-radius
  >
    <h2 class="about-us__title">Profit <br> GROUP</h2>
    <p class="about-us__description">
      We are a team of passionate developers who are dedicated to creating high-quality software solutions.
    </p>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue'
</script>

<style scoped>
.about-us__title {
  font-size: 2.5rem;
  font-weight: var(--fw-bold);
  margin-bottom: 1.5rem;
  color: var(--color-black);
}

.about-us__description {
  font-size: 1rem;
  color: var(--color-gray1);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-us__title {
    font-size: 3.25rem;
  }

  .about-us__description {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .about-us__title {
    font-size: 4rem;
  }

  .about-us__description {
    font-size: 1.25rem;
  }
}
</style>