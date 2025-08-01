<template>
    <BaseSection background="var(--color-white)" :z-index="4" :height="dynamicHeight" has-radius id="order-call">
        <div class="wrapper">
        <div class="get-consultation__container">
            <div class="get-consultation__header">

                <h2 class="get-consultation__title">Заказать обратный звонок</h2>
                <p class="get-consultation__description">
                    Укажите свои контактные данные, и наши специалисты свяжутся с Вами в ближайшее время
                </p>
            </div>
            <div class="get-consultation__content">
                <ContactForm 
                    class="get-consultation__form"
                    formType="Заказ обратного звонка"
                    @success="handleFormSuccess"
                    @error="handleFormError"
                />
            </div>
        </div>
    </div>
    </BaseSection>
</template>

<script setup>
import { computed } from 'vue';

import ContactForm from '@/components/common/ContactForm.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';
import { scrollToAnchor } from '@/utils/scrollUtils';

const dynamicHeight = computed(() => 'auto');

const handleFormSuccess = () => {
    // Дополнительные действия при успешной отправке
    console.log('Форма успешно отправлена');
};

const handleFormError = (error) => {
    // Дополнительная обработка ошибок
    console.error('Ошибка при отправке формы:', error);
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 768px) {
    .wrapper {
        padding: 2rem;
    }
}

.get-consultation__container {
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    background: var(--color-blue);
    border-radius: 24px;
    color: var(--color-white);
}

.get-consultation__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.get-consultation__title {
    font-size: clamp(2rem, 5vw, 2.6rem);
    font-weight: var(--fw-bold);
    margin-bottom: 1.5rem;
    line-height: 1.4;
}

.get-consultation__description {
    font-size: clamp(1rem, 3vw, 1.1rem);
    line-height: 1.4;
    margin-bottom: 2rem;
    font-weight: var(--fw-medium);
    max-width: 300px;
}

.get-consultation__content {
    max-width: 600px;
    margin: 0 auto;
}

.get-consultation__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    width: 100%;
}

.form-input {
    width: 100%;
    height: 46px;
    padding: 1rem;
    border: 1px solid var(--color-gray1);
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-black);
}

.background_img_input {
    background-image: url(src\components\icons\flag.png);
    padding-left: 35px;
    width: 20px;
    height: 20px;
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.form-submit {
    width: 100%;
    max-width: 245px;
    height: 69px;
    padding: 1rem;
    background: var(--color-black);
    color: var(--color-white);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: var(--fw-medium);
    transition: background-color 0.7s ease;
    align-self: center;
}

.form-submit:hover {
    background-color: var(--color-black);
}

.check-box {
    font-weight: var(--fw-light);
    font-size: 0.8rem;
    text-align: left;
}

/* Планшет */
@media (min-width: 768px) {
    .get-consultation__container {
        width: 600px;
        max-width: 100%;
        height: auto;
        padding: 3rem;
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .get-consultation__container {
        width: 80%;
        max-width: 1200px;
        height: auto;
        display: flex;
        gap: 1rem;
    }

    .get-consultation__header {
        flex: 1;
        align-items: flex-start;
        text-align: left;
        padding-right: 2rem;
    }

    .get-consultation__content {
        flex: 1;
    }

    .get-consultation__title {
        max-width: 400px;
    }

    .get-consultation__description {
        max-width: 400px;
    }

    .get-consultation__form {
        width: 100%;
        max-width: 500px;
    }

    .form-input {
        height: 56px;
    }
}
</style>