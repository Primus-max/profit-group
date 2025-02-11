<template>
    <BaseSection background="var(--color-gray3)" :z-index="5" :height="dynamicHeight" has-radius>
        <div class="services__container">
            <div class="services__header">
                <h2 class="services__title">Услуги</h2>
                <p class="services__description">

                </p>
            </div>
            <div class="services__content">
                <Service 
                    class="service-item" 
                    v-for="service in services" 
                    :key="service.id" 
                    :service="{
                        title: service.name,
                        description: service.description
                    }" 
                />
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
} from 'vue';

import BaseSection from '@/components/sections/base/BaseSection.vue';
import Service from '@/components/Service.vue';

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '900px';
    }else if (width >= 600 && width < 768){
        return '916px';
    } else if (width >= 768 && width < 1024) {
        return '800px';
    } else {
        return '710px';
    }
});

const services = [
    {
        id: 1,
        name: 'Налоговый консалтинг',
        description: ''

    },
    {
        id: 2,
        name: 'Тендерное сопровождение',
        description: ''
    },

    {
        id: 3,
        name: 'Юридическое сопровождение бизнес проектов. Арбитраж. Банкротство. Антикризисные меры',
        description: ''

    },
    {
        id: 4,
        name: 'Уголовно-правовая помощь. Антирейдерские мероприятия',
        description: ''

    },    
]
</script>

<style scoped>
.services__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
}

.services__header {
    width: 100%;
    margin-bottom: 2rem;
}

.services__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: var(--fw-medium);
    color: var(--color-white);
    margin-bottom: 1rem;
}

.services__description {
    font-size: 0.8rem;
    font-weight: var(--fw-medium);
    line-height: 19.04px;
    margin-bottom: 2rem;
}

.services__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.service-item {
    width: 100%;
    min-height: 145px;
    background: var(--color-white);
    border-radius: 29px;
    transition: all 0.3s ease;
}

.service-item__description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray);
}

/* Планшет */
@media (min-width: 768px) {
    .services__container {
        padding: 3rem 2rem;
    }

    .service-item {
        width: calc(50% - 0.5rem);
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .services__container {
        padding: 4rem 2rem;
    }

    .services__title {
        font-weight: var(--fw-light);
    }

    .service-item {
        width: calc(50% - 0.5rem);
        min-height: 150px;
    }
}
</style>
