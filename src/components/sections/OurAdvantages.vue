<template>
    <BaseSection background="var(--color-white)" height="152vh" :z-index="6" has-radius>
        <div class="advantages_container">
            <div class="advantages_header">
                <h2 class="advantages_title"> НАШИ ПРЕИМУЩЕСТВА</h2>
            </div>
            <div v-for="(advanatage, index) in infos" :key="advanatage.id" >
                <Advantage :info="advanatage" :class="index % 2 === 0 ? 'blue_background' : 'black_background'">
                    <component :is="advanatage.icon" :color="'white'"/>
                </Advantage>
            </div>
            <!-- <div class="legal_services_conteiner">
                    <div class="advantages-info_icon"> <FolderIcon :color="'white'"/></div>
                    <div class="legal_services_content">
                        <span class="advantages-info_title">ПОЛНЫЙ СПЕКТР ЮРИДИЧЕСКИХ УСЛУГ</span>
                        <p class="advantages-info__description">Мы предлагаем комплексные юридические услуги,
                            специализируясь на бизнесе, недвижимости и
                            автомобильном праве</p>
                    </div>
                </div>
                <div class="track_record_conteiner">
                    <div class="advantages-info_icon"> <StarCrownicon style="filter: invert(100%)"/></div>
                    <div class="track_record_content">
                        <span class="advantages-info_title">ПОДТВЕРЖДЕННЫЙ ПОСЛУЖНОЙ СПИСОК</span>
                        <p class="advantages-info__description">Мы обеспечиваем клиентам значительные возмещения в
                            спорах, связанных с недвижимостью и
                            страхованием</p>
                    </div>
                </div>
                <div class="specialized_expertise_conteiner">
                    <div class="advantages-info_icon"> <Gavelicon style="filter: invert(100%)" /></div>
                    <div class="specialized_expertise_content">
                        <span class="advantages-info_title">СПЕЦИАЛИЗИРОВАННАЯ ЭКСПЕРТИЗА </span>
                        <p class="advantages-info__description">Мы решаем сложные юридические вопросы на рынках, в
                            строительстве и интеллектуальной
                            собственности</p>
                    </div>
                </div>
                <div class="customer-oriented_approach_conteiner">
                    <div class="advantages-info_icon"> <Scalesicon style="filter: invert(100%)"/></div>
                    <div class="customer-oriented_approach_content">
                        <span class="advantages-info_title">КЛИЕНТООРИЕНТИРОВАННЫЙ ПОДХОД</span>
                        
                        <p class="advantages-info__description">Мы стремимся к Вашему успеху, оказывая индивидуальную
                            поддержку и достигая значимых
                            результатов</p>
                    </div>
                </div>
                <div class="pricing_conteiner">
                    <div class="advantages-info_icon"> <Shieldicon style="filter: invert(100%)"/></div>
                    <div class="pricing_content">
                        <span class="advantages-info_title">ОТКРЫТОЕ И ЧЕСТНОЕ ЦЕНООБРАЗОВАНИЕ </span>
                        <p class="advantages-info__description">Мы верим в полную прозрачность: Вы не столкнетесь с
                            какими-либо неожиданными сборами</p>
                    </div>
                </div> -->
        </div>

    </BaseSection>
</template>

<script setup>
import Advantage from '@/components/Advantage.vue';
import FolderIcon from '@/components/icons/FolderIcon.vue';
import Gavelicon from '@/components/icons/GavelIcon.vue';
import Scalesicon from '@/components/icons/ScalesIcon.vue';
import Shieldicon from '@/components/icons/ShieldIcon.vue';
import StarCrownicon from '@/components/icons/StarCrownIcon.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

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
    color: white;
}

.advantages_header {
    width: 70%;
    height: 100px;
    margin-top: 30px;
    display: flex;
    font-weight: var(--fw-medium);
    text-align: left;
    line-height: 2.4rem;
    font-size: 2rem;
    color: var(--color-black)
}

.conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--color-black);
    border-radius: 20px;
}

.content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;

}

.track_record_conteiner {
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
}

.specialized_expertise_conteiner {
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
}

.customer-oriented_approach_conteiner {
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    background-color: var(--color-blue);
    flex-direction: row-reverse;
    border-radius: 20px;
}

.customer-oriented_approach_content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.pricing_conteiner {
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
}

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

.description {
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
}

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
        margin-top: 30px;
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
</style>
