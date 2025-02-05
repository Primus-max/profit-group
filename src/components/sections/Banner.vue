<template>
  <BaseSection background="var(--color-gray2)" :z-index="1">
    <div class="baner-info">
    <h1 class="banner__title"><span style="color: var(--color-black);">Profit</span> GROUP</h1>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue';
</script>

<style scoped>
.baner-info{
  width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
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