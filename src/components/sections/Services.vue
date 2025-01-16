<template>
    <BaseSection background="var(--color-gray3)" :z-index="4"  has-radius>
        <div class="services__container">
            <div class="services__header">
                <h2 class="services__title">Услуги</h2>
                <p class="services__description">
                 
                </p>
            </div>
            <div class="services__content">
                
                  
                    <Service class="service-item"
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
import {ref} from 'vue';
import BaseSection from '@/components/sections/base/BaseSection.vue'
import Service from '@/components/Service.vue'

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
/* .base-section__container {
    padding: 0 !important;
} */

.services__container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    /* background: var(--color-blue); */
    border-radius: 24px;
    color: var(--color-white);

}

.services__header {
    width: 100%;
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.services__title {
    font-size: 1.2rem;
    font-weight: var(--fw-light);
    color: var(--color-black);
}

.services__description {
    font-size: 0.8rem;
    font-weight: var(--fw-medium);
    line-height: 19.04px;
    margin-bottom: 2rem;
}

.services__content {
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
}

.service-item {
    width: 47%;
    height: 150px;
    margin-inline: 5px;
    margin-bottom: 10px;
    padding: 2%;
    background: var(--color-white);
    border-radius: 29px;
    color: var(--color-black);

}

.service-item__description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray);
}

@media (max-width: 400px){
    .services__content {
    flex-direction: column;
    }
}

@media (min-width: 768px) {
    .services__title {
     font-size: 3.25rem;
     color: white;
    }
}

@media (min-width: 1024px) {
    .services__title {   
      
       
    }
}
</style>
