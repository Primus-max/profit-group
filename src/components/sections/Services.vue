<template>
    <BaseSection background="var(--color-gray3)" :z-index="5" :height="`${heightServices}+px`" has-radius>
        <div class="services__container">
            <div class="services__header">
                <h2 class="services__title">Услуги</h2>
                <p class="services__description">
                 
                </p>
            </div>
            <div class="services__content">
                
                  
                    <Service class="service-item"
                        ref="service"
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
import {ref,onMounted} from 'vue';
import BaseSection from '@/components/sections/base/BaseSection.vue'
import Service from '@/components/Service.vue'  

const heightServices = ref(0)
// onMounted(()=>{
//     calcHeightServices()
// })
const calcHeightServices = ()=>{
    for (const service in services ){
        const trgdf = service.name;
    }
} 
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
/* все настройки для мобильной верстки */
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
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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
@media (min-width: 1024px){
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
    .services__title{
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
