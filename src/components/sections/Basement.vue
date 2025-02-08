<template>
    <BaseSection background="var(--color-black)" :height="dynamicHeight" :z-index="12">
        <footer class="footer">
            <div class="footer-top">
                <img src="" alt="Логотип" class="logo" />

                <button class="call-button" @click="startCall">{{ phoneNumber }}</button>
            </div>
            <div class="footer-bottom">
                <p class="email">email@example.com</p>
                <div class="contact-info">
                    <p class="address">г. Москва, ул. Старокачаловская, д. 1, корпус 1</p>
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

import BaseSection from '@/components/sections/base/BaseSection.vue';

const phoneNumber = '+7 (999) 999 99 99';

const startCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
};

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '355px';
    } else {
        return '435px';
    }
});
</script>

<style scoped>
.footer {
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
    align-items: center;
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

.contact-info {
    height: 168px;
    display: flex;
    flex-direction: column;
}

.footer-rights {
    width: 100%;
    text-align: center;
}

.email {
    margin-bottom: 20px;
}

.address {
    margin-bottom: 12px;
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