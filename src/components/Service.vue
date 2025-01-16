<template>
    <div class="service" :class="{ 'service--active': isOpen }" @click="toggle">
        <div class="service__header">
            <h3 class="service__title">{{ service.title }}</h3>
            <button class="service__toggle">
                <span class="plus-icon"></span>
            </button>
        </div>
        <p class="service__description" v-show="isOpen">
            {{ service.description }}
        </p>
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
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.service__title {
    font-size: 1.2rem;
    font-weight: var(--fw-light);
    color: var(--color-black);
}

.service__toggle {
    width: 24px;
    height: 24px;
    padding: 16px;
    position: relative;
    border-radius: 20px;
    background: var(--color-blue);
}

.plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 2px;
    background: var(--color-black);
    transition: transform 0.3s ease;
}

.plus-icon::after {
    left:0;
    content: '';
    position: absolute;
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
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray);
}
</style>
