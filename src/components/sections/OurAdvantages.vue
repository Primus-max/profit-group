<template>
    <BaseSection background="var(--color-white)" :height="dynamicHeight" :z-index="6" has-radius>
        <div class="advantages_container">

            <h2 class="advantages_header"> НАШИ ПРЕИМУЩЕСТВА</h2>

            <div class="advantages_content">
                <div v-for="(advanatage, index) in infos" :key="advanatage.id">
                    <Advantage :info="advanatage" :class="index % 2 === 0 ? 'blue_background' : 'black_background'" >
                        <component :is="advanatage.icon" :color="colorIcon" width="60px" height="60px" />
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
        return '1060px';
    } else if (width >= 600 && width < 1024) {
        return '1069px';
    } else {
        return '768px';
    }
});

const infos = [
    {
        id: 0,
        title: 'ПОЛНЫЙ СПЕКТР ЮРИДИЧЕСКИХ УСЛУГ',
        description: "Мы предлагаем комплексные юридические услуги, специализируясь на бизнесе, недвижимости и автомобильном праве",
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
/* мобильная */
.advantages_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.advantages_content {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.advantages_header {
    width: 100%;
    margin-top: 30px;
    display: flex;
    font-weight: var(--fw-medium);
    text-align: left;
    line-height: 2rem;
    font-size: 1.6rem;
    color: var(--color-black)
}

/* .conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--color-black);
    border-radius: 20px;
} */

/* .content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

} */

/* .track_record_conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--color-blue);
    border-radius: 20px;
}

.track_record_content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
} */

/* .specialized_expertise_conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--color-black);
    border-radius: 20px;
}

.specialized_expertise_content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
} */
/* 
.customer-oriented_approach_conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    background-color: var(--color-blue);
    flex-direction: row-reverse;
    border-radius: 20px;
} */

/* .customer-oriented_approach_content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
} */

/* .pricing_conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    background-color: var(--color-black);
    flex-direction: row-reverse;
    border-radius: 20px;
}

.pricing_content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
} */

.title {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    margin-top: 15px;
    display: flex;
    font-size: 1.3rem;
    font-weight: var(--fw-light);
    text-align: left;
    flex-direction: column;
}

/* .description {
    width: 90%;
    height: 100%;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: var(--fw-light);
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.3rem;
}

.icon {
    width: 60px;
    height: 60px;
    color: white;
    border-radius: 40%;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;
} */

.black_background {
    background-color: var(--color-black);
}

.blue_background {
    background-color: var(--color-blue);
}

/* для таблетки */
@media (min-width: 600px) and (max-width:1024px) {
    .advantages_container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;
    }

    .advantages_header {
        width: 100%;
        height: 100px;
        margin-top: 64px;
        display: flex;
        font-weight: var(--fw-medium);
        text-align: left;
        line-height: 2.4rem;
        font-size: 2rem;
        color: var(--color-black);

        align-items: center;
        justify-content: space-around;
    }

    .legal_services_conteiner {
        width: 100%;
        height: 235px;
        margin-block: 10px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-black);
        border-radius: 20px;
    }

    .legal_services_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .track_record_conteiner {
        width: 100%;
        height: 235px;
        margin-block: 10px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-blue);
        border-radius: 20px;
    }

    .track_record_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .specialized_expertise_conteiner {
        width: 100%;
        height: 235px;
        margin-block: 10px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-black);
        border-radius: 20px;
    }

    .specialized_expertise_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .customer-oriented_approach_conteiner {
        width: 100%;
        height: 235px;
        margin-block: 10px;
        display: flex;
        background-color: var(--color-blue);
        flex-direction: row-reverse;
        border-radius: 20px;
    }

    .customer-oriented_approach_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .pricing_conteiner {
        width: 100%;
        height: 235px;
        margin-block: 10px;
        display: flex;
        background-color: var(--color-black);
        flex-direction: row-reverse;
        border-radius: 20px;
    }

    .pricing_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .advantages-info_title {
        width: 90%;
        height: 50%;
        margin-bottom: 15px;
        display: flex;
        font-size: 1.5rem;
        font-weight: var(--fw-medium);
        text-align: left;
        flex-direction: column;
    }

    .advantages-info__description {
        width: 90%;
        height: 100%;
        margin-left: 20px;
        margin-bottom: 20px;
        font-weight: var(--fw-light);
        text-align: left;
        font-size: 1.3rem;
        line-height: 1.3rem;
    }

    .advantages-info_icon {
        width: 80px;
        height: 80px;
        color: white;
        border-radius: 40%;
        margin-top: 10px;
        margin-right: 20px;
        display: flex;
    }

}

/* настройки для десктопа */
@media (min-width: 1024px) {
    .advantages_container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        color: white;
        flex-wrap: wrap;
    }

    .advantages_header {
        width: 100%;
        height: 100px;
        margin-top: 30px;
        display: flex;
        font-weight: var(--fw-medium);
        text-align: left;
        line-height: 2.4rem;
        font-size: 3rem;
        color: var(--color-black);
        align-items: center;
        /* justify-content: flex-start; */
    }

    .legal_services_conteiner {
        width: 45%;
        height: 235px;
        margin-inline: 0px 15px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-black);
        border-radius: 20px;
    }

    .legal_services_content {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;

    }

    .track_record_conteiner {
        width: 45%;
        height: 235px;
        margin-inline: 0px 15px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-blue);
        border-radius: 20px;
    }

    .track_record_content {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .specialized_expertise_conteiner {
        width: 45%;
        height: 235px;
        margin-inline: 0px 15px;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--color-blue);
        border-radius: 20px;
    }

    .specialized_expertise_content {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .customer-oriented_approach_conteiner {
        width: 45%;
        height: 235px;
        margin-inline: 0px 15px;
        display: flex;
        background-color: var(--color-black);
        flex-direction: row-reverse;
        border-radius: 20px;
    }

    .customer-oriented_approach_content {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .pricing_conteiner {
        width: 45%;
        height: 235px;
        margin-inline: 0px 15px;
        display: flex;
        background-color: var(--color-black);
        flex-direction: row-reverse;
        border-radius: 20px;
    }

    .pricing_content {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .advantages-info_title {
        width: 90%;
        height: 50%;
        margin-bottom: 15px;
        display: flex;
        font-size: 1.6rem;
        font-weight: var(--fw-light);
        text-align: left;
        flex-direction: column;
    }

    .advantages-info__description {
        width: 90%;
        height: 100%;
        margin-left: 20px;
        margin-bottom: 20px;
        font-weight: var(--fw-light);
        text-align: left;
        font-size: 1.1rem;
        line-height: 1.3rem;
    }

    .advantages-info_icon {
        width: 80px;
        height: 80px;
        color: white;
        border-radius: 40%;
        margin-top: 18px;
        margin-right: 20px;
        display: flex;
    }
}

@media (min-width:1920px) {
    .advantages_content {
        width: 85%;
        justify-content: space-between;
    }
}
</style>
