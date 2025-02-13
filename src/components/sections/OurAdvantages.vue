<template>
    <BaseSection background="var(--color-gray1)" :height="dynamicHeight" :z-index="6" has-radius id="advantages">
        <div class="advantages_container">
            <h2 class="advantages_header">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div class="advantages_content">

                <div v-for="(advantage, index) in infos" :key="advantage.id">
                    <Advantage 
                        :info="advantage" 
                        :class="index % 2 === 0 ? 'blue_background' : 'black_background'"
                    >
                        <component 
                            :is="advantage.icon" 
                            :color="colorIcon" 
                            width="60px" 
                            height="60px" 
                        />
                    </Advantage>
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';

import Advantage from '@/components/Advantage.vue';
import FolderIcon from '@/components/icons/FolderIcon.vue';
import Gavelicon from '@/components/icons/GavelIcon.vue';
import Scalesicon from '@/components/icons/ScalesIcon.vue';
import Shieldicon from '@/components/icons/ShieldIcon.vue';
import StarCrownicon from '@/components/icons/StarCrownIcon.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

const colorIcon = 'white';

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '1320px';
    } else if (width >= 600 && width < 768) {
        return '1100px';
    } else if (width >= 768 && width < 1024) {
        return '1100px';
    } else {
        return '900px';
    }
});

const infos = [
    {
        id: 0,
        title: 'ПОЛНЫЙ СПЕКТР ЮРИДИЧЕСКИХ УСЛУГ',
        description: "Мы предлагаем комплексные правовые решения, следим за успехом и безопасностью бизнеса, комбинируя юридическую практику, уникальный опыт и индивидуальный подход.",
        icon: FolderIcon
    },
    {
        id: 1,
        title: 'ПОДТВЕРЖДЕННЫЙ ПОСЛУЖНОЙ СПИСОК',
        description: "Мы обеспечиваем клиентам значительные возмещения в спорах, связанных с недвижимостью и страхованием",
        icon: StarCrownicon
    },
    {
        id: 2,
        title: 'СПЕЦИАЛИЗИРОВАННАЯ ЭКСПЕРТИЗА',
        description: "Мы решаем сложные юридические вопросы на рынках, в строительстве и интеллектуальной собственности",
        icon: Gavelicon
    },
    {
        id: 3,
        title: 'КЛИЕНТООРИЕНТИРОВАННЫЙ ПОДХОД',
        description: "Мы стремимся к Вашему успеху, оказывая индивидуальную поддержку и достигая значимых результатов",
        icon: Scalesicon
    },
    {
        id: 4,
        title: 'ОТКРЫТОЕ И ЧЕСТНОЕ ЦЕНООБРАЗОВАНИЕ',
        description: "Мы верим в полную прозрачность: Вы не столкнетесь с какими-либо неожиданными сборами",
        icon: Shieldicon
    }
]
</script>

<style scoped>
.advantages_container {
    width: 100%;    
    padding: 2rem 1rem;   
    display: flex;
    flex-direction: column;    
}

.advantages_content {
    width: 100%;
    height: 100%;
    /* margin-top: 20px; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 20px;
}

.advantages_header {
    width: 100%;      
    margin-bottom: 2rem;
    display: flex;
    font-weight: var(--fw-bold);
    text-align: left;
    line-height: 2rem;
    font-size: 1.6rem;
    color: var(--color-white);
}


.black_background {
    background-color: var(--color-black);
}

.blue_background {
    background-color: var(--color-blue);
}

/* Планшет */
/* @media (min-width: 768px) {    

   
} */

/* Десктоп */
@media (min-width: 1024px) {
    .advantages_header {
        font-size: 3rem;
    }

    .advantages_content {
        gap: 30px;
    }
}

/* Большие экраны */
@media (min-width: 1920px) {
    .advantages_content {
        width: 85%;
        margin: 0 auto;
        justify-content: space-between;
    }
}
</style>
