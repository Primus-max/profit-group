<template>
    <BaseSection background="var(--color-white)" :z-index="10" :height="dynamicHeight" has-radius id="media">
        <div class="media-section__container" id="portfolio">
            <h2 class="media-section__title">МЫ В МЕДИА</h2>
            
            <!-- Форма обратной связи -->
            <!-- <div class="contact-form">
                <form @submit.prevent="sendEmail">
                    <div class="form-group">
                        <input 
                            type="text" 
                            v-model="formData.name" 
                            placeholder="Ваше имя" 
                            required
                        >
                    </div>
                    <div class="form-group">
                        <input 
                            type="tel" 
                            v-model="formData.phone" 
                            placeholder="Ваш телефон" 
                            required
                        >
                    </div>
                    <button type="submit" :disabled="loading">
                        {{ loading ? 'Отправка...' : 'Отправить' }}
                    </button>
                </form>
            </div> -->

            <VideoCarousel title="Подкасты" :videos="podcasts" />
            <!-- <VideoCarousel 
                title="Видео-ролики"
                :videos="videoClips"
            /> -->
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
import emailjs from '@emailjs/browser';

const dynamicHeight = computed(() => 'auto');

const loading = ref(false);
const formData = ref({
    name: '',
    phone: ''
});

const sendEmail = () => {
    const subject = 'Новая заявка с сайта';
    const body = `Имя: ${formData.value.name}%0D%0AТелефон: ${formData.value.phone}`;
    const mailtoLink = `mailto:your-email@your-domain.ru?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Очищаем форму
    formData.value.name = '';
    formData.value.phone = '';
    
    // Показываем уведомление
    alert('Спасибо! Сейчас откроется почтовый клиент для отправки данных.');
};

const podcasts = ref([
    {
        id: 0,
        title: 'PRO налоги',
        url: 'https://vk.com/wall-227355630_3',
        description: ''
    },
    {
        id: 1,
        title: 'PRO налоги',
        url: 'https://www.youtube.com/watch?v=ZRBtquAn1CQ',
        description: 'Рассказываем о налогах и сборах'
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

// const videoClips = ref([
//     {
//         id: 0,
//         title: 'Название видео',
//         url: 'https://vk.com/wall-227355630_3',
//         description: 'Доп информация'
//     },
//     {
//         id: 1,
//         title: 'Название видео',
//         url: 'https://vk.com/wall-227355630_3',
//         description: 'Доп информация'
//     },
//     {
//         id: 2,
//         title: 'Название видео',
//         url: 'https://vk.com/wall-227355630_3',
//         description: 'Доп информация'
//     },
//     {
//         id: 3,
//         title: 'Название видео',
//         url: 'https://vk.com/wall-227355630_3',
//         description: 'Доп информация'
//     },
// ]);
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

.contact-form {
    max-width: 400px;
    margin: 0 auto 3rem auto;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 1rem;
    background: var(--color-primary, #007bff);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: var(--color-primary-dark, #0056b3);
}

button:disabled {
    background: #cccccc;
    cursor: not-allowed;
}
</style>