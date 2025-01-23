<template>
    <BaseSection 
        background="var(--color-gray2)" 
        :z-index="3"
        has-radius
    >
        <h2 class="our-achievements__title">Our Achievements</h2>
    </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue'
</script>

<style scoped>
.our-achievements__title {
    font-size: 2.5rem;
    font-weight: var(--fw-bold);
    color: var(--color-white);
}

@media (min-width: 768px) {
    .our-achievements__title {
        font-size: 3.25rem;
    }
}

@media (min-width: 1024px) {
    .our-achievements__title {
        font-size: 4rem;
    }
}
</style>