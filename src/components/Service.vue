<template>
    <div class="service" :class="{ 'service--active': isOpen }" @click="toggle">
        <div class="service__content">
            <h3 class="service__title">{{ service.title }}</h3>
            <p class="service__description" v-show="isOpen">
                {{ service.description }}
            </p>
        </div>
        <div class="service__toggle-container">
            <button class="service__toggle">
                <span class="plus-icon"></span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.service {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 29px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service__content {
    flex: 1;
    margin-right: 1rem;
}

.service__title {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    font-weight: var(--fw-medium);
    color: var(--color-black);
    line-height: 1.4;
}

.service__toggle-container {
    flex-shrink: 0;
}

.service__toggle {
    width: 42px;
    height: 42px;
    padding: 0;
    position: relative;
    border-radius: 50%;
    background: var(--color-blue);
}

.plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19px;
    height: 2px;
    background: var(--color-white);
    transition: transform 0.3s ease;
}

.plus-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.service--active .plus-icon::after {
    transform: rotate(0);
}

.service__description {
    margin-top: 1rem;
    font-size: clamp(0.875rem, 2vw, 0.9rem);
    line-height: 1.5;
    color: var(--color-gray);
}

/* Планшет */
@media (min-width: 768px) {
    .service {
        padding: 2rem;
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .service__title {
        max-width: 80%;
    }
}
</style>
