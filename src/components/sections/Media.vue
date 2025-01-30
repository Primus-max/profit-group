<template>
    <BaseSection background="var(--color-white)" :z-index="4" has-radius>
        <div class="media-section__container">
            <div class="media-section__header">
                <h2 class="media-section__title">Мы в медиа</h2>
                <p class="media-section__description">
                    Примеры наших последних проектов и разработок
                </p>
            </div>
            <div class="media__content">
                <div class="media-item" v-for="(video, index) in mediaItems" :key="index">
                    <span class="media-title">{{ video.title }}</span>
                    <video :src="video.url" controls></video>
                    <span class="media-description">{{video.description}}</span>
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import { ref } from 'vue';

import BaseSection from '@/components/sections/base/BaseSection.vue';

const mediaItems = ref([
    {
        id: 1,
        title: 'Pro nalog',
        url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ&feature=youtu.be',
        description: 'Передача и подкаст про налог'
    },

    {
        id: 2,
        title: 'Проект 2',
        url: '',
        description: 'Описание'
    },
])

const toggle = (item) => {
    item.isOpen = !item.isOpen
}

const nextSlide = (item) => {
    item.currentSlide = (item.currentSlide + 1) % item.videos.length
}

const prevSlide = (item) => {
    item.currentSlide = item.currentSlide === 0
        ? item.videos.length - 1
        : item.currentSlide - 1
}
</script>

<style scoped>
.base-section {
    align-items: flex-start !important;
}

.media-section__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.media-section__header {
    width: 67%;
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;    
}

.media-section__title {
    font-size: 1.7rem;
    font-weight: var(--fw-bold);
    line-height: 33.6px;
    margin-bottom: 1.5rem;
}

.media-section__description {
    font-size: 0.8rem;
    font-weight: var(--fw-medium);
    line-height: 19.04px;
    margin-bottom: 2rem;
}


/* .media-section__content {
    max-width: 600px;
    margin: 0 auto;
} */

.media-section__grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.media {
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.media__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.media__title {
    font-size: 1.2rem;
    font-weight: var(--fw-bold);
    color: var(--color-black);
}

.media__toggle {
    width: 24px;
    height: 24px;
    position: relative;
    background: transparent;
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
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.media--active .plus-icon {
    transform: translate(-50%, -50%) rotate(180deg);
}

.media--active .plus-icon::after {
    transform: rotate(0deg);
}

.media__content {
    margin-top: 1rem;
}

.media__carousel {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
}

.carousel-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    border-radius: 8px;
}

.carousel-container video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.carousel-container video.active {
    opacity: 1;
}

.carousel-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-white);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

.arrow-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-left: 2px solid var(--color-black);
    border-bottom: 2px solid var(--color-black);
}

.carousel-btn--prev .arrow-icon {
    transform: translate(-25%, -50%) rotate(45deg);
}

.carousel-btn--next .arrow-icon {
    transform: translate(-75%, -50%) rotate(225deg);
}

@media (min-width: 768px) {
    .media-section__title {
        font-size: 3.25rem;
    }
}

@media (min-width: 1024px) {
    .media-section__title {
        font-size: 4rem;
    }
}
</style>