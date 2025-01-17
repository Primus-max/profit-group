<template>
    <BaseSection background="var(--color-white)" :z-index="4" has-radius>
        <div class="get-consultation__container">
            <div class="get-consultation__header">
                <h2 class="get-consultation__title">Получитe консультацию</h2>
                <p class="get-consultation__description">
                    Укажите свои контактные данные, и наши специалисты свяжутся с Вамии в ближайшее время
                </p>
            </div>
            <div class="get-consultation__content">
                
                    <form class="get-consultation__form">
                        <div class="form-group">
                        <input type="text" placeholder="Ваше имя" class="form-input">
                        </div>
                        <div class="form-group">
                        <input type="tel" placeholder="Ваш телефон" class="form-input">
                        </div>
                        <Checkbox class="Checkbox" v-model="isChecked" text="Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности" />
                        <button type="submit" @click.prevent class="form-submit">Получить консультацию</button>
                    </form>
                 
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import { ref } from 'vue'

import BaseSection from '@/components/sections/base/BaseSection.vue'
import Checkbox from '@/components/elemets/CheckBox.vue'

const isChecked = ref(false)
</script>

<style scoped>
.base-section__container {
    padding: 0 !important;
}

.get-consultation__container {
    width: 100%;
    padding: 1rem;
    background: var(--color-blue);
    border-radius: 24px;
    color: var(--color-white);
}

.get-consultation__header {
    width: 67%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.get-consultation__title {
    font-size: 1.7rem;
    font-weight: var(--fw-bold);
    line-height: 33.6px;
    margin-bottom: 1.5rem;
}

.get-consultation__description {
    font-size: 0.8rem;
    font-weight: var(--fw-medium);
    line-height: 19.04px;
    margin-bottom: 2rem;
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

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.form-submit {
    width: 245px;
    height: 49px;
    padding: 1rem 2rem;
    background: var(--color-blue);
    color: var(--color-white);
    border-radius: 8px;
    font-weight: var(--fw-medium);
    background: var(--color-black);
    transition: background-color 0.7s ease;
    align-self: center;
}

.form-submit:hover {
    background-color: var(--color-black);
}

.Checkbox{
    font-weight: var(--fw-light);
    font-size: 0.8rem;
    text-align: left;
}

@media (min-width: 768px) {
    .get-consultation__title {
        font-size: 3.25rem;
    }
}

@media (min-width: 1024px) {
    .get-consultation__content{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .get-consultation__header{
        height: 100%;
        width: 50%;
        padding-top: 70px;
        padding-left: 90px;
        display: flex;
        text-align: left;
        
    
    }
    .get-consultation__form{
        width: 100%;
        padding-top: 50px;
        padding-inline: 10px;
        padding-block-end: 50px;
        display: flex;
        font-size:1rem;
    }

    .form-input{
    height: 90%;
    }

    .get-consultation__title {
        width: 40%;
        font-size: 2.6rem;
        font-weight: var(--fw-light);
        text-align: left;
    }

    .get-consultation__description{
        width: 67%;
        font-size: 1.2rem;
        font-weight:var(--fw-light)
    }
    .get-consultation__container{
        width: 100%;
        height: 100%;
        display: flex;
    }
}
</style>