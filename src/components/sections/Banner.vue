<template>
  <BaseSection background="var(--color-gray2)" :z-index="1">
    <h1 class="banner__title">Profit GROUP</h1>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue'
</script>

<style scoped>
.banner__title {
  font-size: 2.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
}

@media (min-width: 768px) {
  .banner__title {
    font-size: 3.25rem;
  }
}

@media (min-width: 1024px) {
  .banner__title {
    font-size: 4rem;
  }
}
</style>