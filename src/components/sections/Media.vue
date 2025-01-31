<template>
    <BaseSection background="var(--color-white)" height="700px" :z-index="7" has-radius>
        <div class="media-section__container">
            <div class="media-section__header">
                <h2 class="media-section__title">МЫ В МЕДИА</h2>
            </div>
            <p class="media-section__description"> Подкасты </p>
            <div class="media__content">
                <div class="media-item" v-for="(video, index) in podcasts" :key="index">
                    <video :src="video.url" controls></video>
                    <span class="media-title">{{ video.title }}</span>
                    <span class="media-description">{{ video.description }}</span>
                </div>
                <hr width="100%" size="2" color="gray" class="seporator">
                <!-- стрелки -->
                <div class="buttons">
                    <button class="button arrow-left"></button>
                    <button class="button arrow-right"></button>
                </div>
                <!--  -->
                <p class="media-section__description-two"> Видео-ролики </p>
                <div class="media-item" v-for="(video, index) in videoClips" :key="index">
                    <video :src="video.url" controls></video>
                    <span class="media-title">{{ video.title }}</span>
                    <span class="media-description">{{ video.description }}</span>
                </div>
                <hr width="100%" size="2" color="gray" class="seporator">
                 <!-- стрелки -->
                 <div class="buttons">
                    <button class="button arrow-left"></button>
                    <button class="button arrow-right"></button>
                </div>
                <!--  -->
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import { ref } from 'vue';

import BaseSection from '@/components/sections/base/BaseSection.vue';

const podcasts = ref([
    {
        id: 1,
        title: 'Название подкаста',
        url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ&feature=youtu.be',
        description: 'Доп информация'
    },


])

const videoClips = ref([
    {
        id: 1,
        title: 'Название видео',
        url: 'https://vk.com/wall-227355630_3',
        description: 'Доп информация'
    },
])

// слайдер 
// const toggle = (item) => {
//     item.isOpen = !item.isOpen
// }

// const nextSlide = (item) => {
//     item.currentSlide = (item.currentSlide + 1) % item.videos.length
// }

// const prevSlide = (item) => {
//     item.currentSlide = item.currentSlide === 0
//         ? item.videos.length - 1
//         : item.currentSlide - 1
// }
</script>

<style scoped>
/* Мобильная */
.base-section {
    align-items: flex-start !important;
}

.media-section__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

}

.media-section__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.media-section__title {
    font-size: 2.5rem;
    font-weight: var(--fw-medium);
    line-height: 33.6px;
    margin-bottom: 1.5rem;
}

.media-section__description {
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    background-color: var(--color-blue);
    border-radius: 10px;
    color: white;
    font-size: 1.3rem;
    line-height: 42.6px;
    font-weight: var(--fw-light);
}

.media-section__description-two {
    width: 100%;
    height: 45px;
    margin-bottom: 30px;
    background-color: var(--color-blue);
    border-radius: 10px;
    color: white;
    font-size: 1.3rem;
    line-height: 42.6px;
    font-weight: var(--fw-light);
}

.media {
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

video {
    border-radius: 20px;
}

.media__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.media-title {
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    font-size: 1.2rem;
    font-weight: var(--fw-bold);
    color: var(--color-gray3);
}

.media-description {
    width: 100%;
    margin-left: 20px;
    margin-bottom: 40px;
    display: flex;
    font-size: 0.9rem;
    font-weight: var(--fw-light);
    color: var(--color-gray2);
}

.media__toggle {
    width: 24px;
    height: 24px;
    position: relative;
    background: transparent;
}

.media-item {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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

.seporator {
    display: none;
}


/* для таблетки */
@media (min-width: 600px) and (max-width:1024px) {
    .button {
            width: 50px;
            height: 50px;
            background-color:var(--color-blue);
            border: none;
            border-radius: 50%;
            color: #ffffff;
            font-size: 35px;
            cursor: pointer;
            transition: transform 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .button:hover {
            transform: scale(1.1); /* Увеличение кнопки при наведении */
        }

        .arrow-left::before {
            content: '←'; /* Стрелка влево */
            margin-bottom: 15px;
        }

        .arrow-right::before {
            content: '→'; /* Стрелка вправо */
            margin-bottom: 15px;
        }

        .buttons {
            display: flex;
            gap: 100px; /* Расстояние между кнопками */
            justify-content:center;
        }


    .media-section__title {
        font-size: 3.25rem;
    }

    .seporator {
        margin-block: 20px;
        display: block;
    }

    .base-section {
        align-items: flex-start !important;
    }

    .media-section__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .media-section__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .media-section__title {
        font-size: 2.5rem;
        font-weight: var(--fw-medium);
        line-height: 33.6px;
        margin-bottom: 1.5rem;
    }

    .media-section__description {
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        background-color: var(--color-blue);
        border-radius: 10px;
        color: white;
        font-size: 1.3rem;
        line-height: 42.6px;
        font-weight: var(--fw-light);
    }

    .media-section__description-two {
        width: 100%;
        height: 45px;
        margin-top: 20px;
        margin-bottom: 30px;
        background-color: var(--color-blue);
        border-radius: 10px;
        color: white;
        font-size: 1.3rem;
        line-height: 42.6px;
        font-weight: var(--fw-light);
    }

    .media {
        padding: 1.5rem;
        background: var(--color-white);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    video {
        border-radius: 20px;
    }

    .media__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .media-title {
        width: 100%;
        margin-left: 20px;
        margin-top: 10px;
        display: flex;
        font-size: 1.2rem;
        font-weight: var(--fw-bold);
        color: var(--color-gray3);
    }

    .media-description {
        width: 100%;
        margin-left: 20px;
        margin-bottom: 40px;
        display: flex;
        font-size: 0.9rem;
        font-weight: var(--fw-light);
        color: var(--color-gray2);
    }

    .media__toggle {
        width: 24px;
        height: 24px;
        position: relative;
        background: transparent;
    }

    .media-item {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex-wrap: nowrap;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
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
}

@media (min-width: 1024px) {
    .media-section__title {
        font-size: 4rem;
    }
    .button {
            width: 50px;
            height: 50px;
            background-color:var(--color-blue);
            border: none;
            border-radius: 50%;
            color: #ffffff;
            font-size: 35px;
            cursor: pointer;
            transition: transform 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .button:hover {
            transform: scale(1.1); /* Увеличение кнопки при наведении */
        }

        .arrow-left::before {
            content: '←'; /* Стрелка влево */
            margin-bottom: 15px;
        }

        .arrow-right::before {
            content: '→'; /* Стрелка вправо */
            margin-bottom: 15px;
        }

        .buttons {
            display: flex;
            gap: 100px; /* Расстояние между кнопками */
            justify-content:center;
        }

    .seporator {
        margin-block: 20px;
        display: block;
    }

    .base-section {
        align-items: flex-start !important;
    }

    .media-section__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .media-section__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .media-section__title {
        font-size: 2.5rem;
        font-weight: var(--fw-medium);
        line-height: 33.6px;
        margin-bottom: 1.5rem;
    }

    .media-section__description {
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        background-color: var(--color-blue);
        border-radius: 10px;
        color: white;
        font-size: 1.3rem;
        line-height: 42.6px;
        font-weight: var(--fw-light);
    }

    .media-section__description-two {
        width: 100%;
        height: 45px;
        margin-top: 20px;
        margin-bottom: 30px;
        background-color: var(--color-blue);
        border-radius: 10px;
        color: white;
        font-size: 1.3rem;
        line-height: 42.6px;
        font-weight: var(--fw-light);
    }

    .media {
        padding: 1.5rem;
        background: var(--color-white);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    video {
        width: 60%;
        height: 100%;
        justify-content: center;
        border-radius: 20px;
    }

    .media__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .media-title {
        width: 100%;
        margin-left: 20px;
        margin-top: 10px;
        display: flex;
        font-size: 1.2rem;
        font-weight: var(--fw-bold);
        color: var(--color-gray3);
    }

    .media-description {
        width: 100%;
        margin-left: 20px;
        margin-bottom: 40px;
        display: flex;
        font-size: 0.9rem;
        font-weight: var(--fw-light);
        color: var(--color-gray2);
    }

    .media__toggle {
        width: 24px;
        height: 24px;
        position: relative;
        background: transparent;
    }

    .media-item {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex-wrap: nowrap;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
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
}
</style>