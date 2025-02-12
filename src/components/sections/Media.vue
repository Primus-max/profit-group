<template>
    <BaseSection background="var(--color-white)" :z-index="10" :height="dynamicHeight" has-radius>
        <div class="media-section__container"  id="portfolio">            
            <h2 class="media-section__title">МЫ В МЕДИА</h2>
            <VideoCarousel 
                title="Подкасты"
                :videos="podcasts"
            />
            <VideoCarousel 
                title="Видео-ролики"
                :videos="videoClips"
            />
        </div>
    </BaseSection>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';

import BaseSection from '@/components/sections/base/BaseSection.vue';
import VideoCarousel from '@/components/VideoCarousel.vue';

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '1100px';
    } else if (width >= 600 && width < 768) {
        return '1580px';
    } else if (width >= 768 && width < 1024) {
        return '1545px';
    } else {
        return '2600px';
    }

});

const podcasts = ref([
    {
        id: 0,
        title: 'Название подкаста',
        url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ',
        description: 'Доп информация'
    },
    // {
    //     id: 1,
    //     title: 'Название подкаста',
    //     url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ',
    //     description: 'Доп информация'
    // },
    // {
    //     id: 2,
    //     title: 'Название подкаста',
    //     url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ',
    //     description: 'Доп информация'
    // },
    // {
    //     id: 3,
    //     title: 'Название подкаста',
    //     url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ',
    //     description: 'Доп информация'
    // },
]);

const videoClips = ref([
    {
        id: 0,
        title: 'Название видео',
        url: 'https://vk.com/wall-227355630_3',
        description: 'Доп информация'
    },
    {
        id: 1,
        title: 'Название видео',
        url: 'https://vk.com/wall-227355630_3',
        description: 'Доп информация'
    },   
    {
        id: 2,
        title: 'Название видео',
        url: 'https://vk.com/wall-227355630_3',
        description: 'Доп информация'
    },
    {
        id: 3,
        title: 'Название видео',
        url: 'https://vk.com/wall-227355630_3',
        description: 'Доп информация'
    },
]);
</script>

<style scoped>
.media-section__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.media-section__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: var(--fw-medium);
    margin-bottom: 2rem;
    color: var(--color-black);
}

/* Планшет */
@media (min-width: 768px) {
    .media-section__container {
        padding: 3rem 2rem;
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .media-section__container {
        padding: 4rem 2rem;
    }
}
</style>