<template>
    <BaseSection background="var(--color-gray3)" :z-index="5" :height="dynamicHeight" has-radius>
        <div class="services__container">
            <div class="services__header">
                <h2 class="services__title">Услуги</h2>
                <p class="services__description">

                </p>
            </div>
            <div class="services__content">
                <Service class="service-item" ref="service" v-for="service in services" :key="service.id" :service="{
                    title: service.name,
                    description: service.description
                }" />
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
        return '987px';
    } else if (width >= 600 && width < 1024) {
        return '1069px';
    } else {
        return '768px';
    }
});

const services = [
    {
        id: 1,
        name: 'ЮРИДИЧЕСКОЕ СОПРОВОЖДЕНИЕ БИЗНЕС-ПРОЕКТОВ',
        description: ''
    },
    {
        id: 2,
        name: 'РАБОТА С МАРКЕТПЛЕЙСАМИ',
        description: ''
    },
    {
        id: 3,
        name: 'ЮРИДИЧЕСКИЕ УСЛУГИ В СФЕРЕ НЕДВИЖИМОСТИ',
        description: ''

    },
    {
        id: 4,
        name: 'ЗАЩИТА ПРАВ АВТОВЛАДЕЛЬЦЕВ',
        description: ''

    },
    {
        id: 5,
        name: 'СЕМЕЙНЫЕ ДЕЛА',
        description: ''

    }
]
</script>

<style scoped>
.services__container {
    width: 100%;    
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.services__header {
    width: 100%;
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.services__title {
    font-size: 2.5rem;
    font-weight: var(--fw-medium);
    color: var(--color-white);
}

.services__description {
    font-size: 0.8rem;
    font-weight: var(--fw-medium);
    line-height: 19.04px;
    margin-bottom: 2rem;
}

.services__content {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;    
    align-content: flex-start;
    justify-content: flex-start;
}

.service-item {
    width: 100%;
    height: 145px;
    margin-inline: 5px;
    margin-bottom: 10px;
    padding: 2%;
    background: var(--color-white);
    border-radius: 29px;
    color: var(--color-black);
    display: flex;
    justify-content: space-between;
}

.service-item__description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray);
}

/* настройки для десктопа */
@media (min-width: 1024px) {
    .service-item {
        flex-direction: row;
        width: 47%;
        height: 150px;
        margin-inline: 5px;
        margin-bottom: 10px;
        padding: 2%;
        background: var(--color-white);
        border-radius: 29px;
        color: var(--color-black);
        display: flex;
    }

    .services__title {
        font-size: 4rem;
        color: var(--color-white);
        font-weight: var(--fw-light);
    }

    .services__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

}
</style>
