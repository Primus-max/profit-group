<template>
    <BaseSection background="var(--color-black)" :height="dynamicHeight" :z-index="12" id="contacts">
        <footer class="footer">
            <div class="footer-top">
                <LogoIcon class="logo" />
                <!-- <img src="" alt="Логотип" class="logo" /> -->

                <div class="contacts-container">
                    <button class="call-button" @click="startCall">{{ phoneNumber }}</button>
                    <a :href="'mailto:natarzam@yandex.ru'" class="email">natarzam@yandex.ru</a>
                </div>
            </div>
            <p class="footer-rights director">Генеральный директор:
                <br>
                Золототрубова Наталья Алексеевна,
                <br>
                государственный
                советник РФ 3 класса,
                <br>
                Аттестованный преподаватель налогового права
                <br>
                Палаты Налоговых Консультантов
            </p>
            <div class="footer-bottom">
                <div class="contact-info">
                    <p class="address">г. Москва, ул. Нагатинская, д. 2, офис 210</p>
                    <p class="inn">ИНН: 9724206002</p>
                    <p class="ogrn">ОГРН: 124770069047</p>
                </div>
            </div>
            <div class="footer-rights">Все права защищены</div>
        </footer>
    </BaseSection>
</template>

<script setup>
import { computed } from 'vue';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

const phoneNumber = '+7 (916) 538 13 67';

const startCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
};

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '520px';
    } else {
        return '435px';
    }
});
</script>

<style scoped>
.footer {
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: clamp(1rem, 2vw, 2rem);
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.call-button {
    background-color: var(--color-blue);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

.footer-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.logo {
    width: 56px;
    height: 56px;
}

.contact-info {
    /* height: 168px; */
    display: flex;
    flex-direction: column;
}

.contacts-container {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.footer-rights {
    width: 100%;
    text-align: center;
}

/* .email {
    margin-bottom: 20px;
} */

.address {
    margin-bottom: 12px;
}

.director {
    width: 100%;
    align-self: flex-start;
    text-align: left;
    font-size: 0.8rem;
}

@media (max-width: 590px) {
    /* .footer-top {
        margin-bottom: 30px;
    } */
}


@media (min-width: 600px) {
    .footer {
        padding: 2rem;
    }

    .contact-info {
        height: 120px;
    }

    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
    }

    .email {
        order: 2;
        margin-bottom: 0;
    }
}

@media (min-width: 1024px) {
    .base-section {
        width: 80% !important;
        height: 100%;
    }
}
</style>