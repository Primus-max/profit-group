<template>
    <BaseSection background="var(--color-white)" :z-index="9" :height="dynamicHeight" has-radius>
        <div class="wrapper">
            <div class="get-consultation__header">
                <h2 class="get-consultation__title">Нужна юридическая консультация эксперта?</h2>
                <p class="get-consultation__description">
                    Поделитесь своей ситуацией, и мы свяжем вас с нужным профессионалом
                </p>
            </div>
            <div class="get-consultation__container">
                <div class="get-consultation__content">
                    <form class="get-consultation__form">
                        <div class="form-group">
                            <input type="text" placeholder="Ваше имя" class="form-input">
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="+7 (999)999-99-99" class="form-input">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Опишите ситуацию" class="form-textarea"></textarea>
                        </div>
                        <Checkbox class="check-box" v-model="isChecked"
                            text="Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности" />
                        <button type="submit" @click.prevent class="form-submit">Отправить заявку</button>
                    </form>
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

import Checkbox from '@/components/elemets/CheckBox.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '103 0px';
    } else if (width >= 600 && width < 768) {
        return '1000px';
    } else if (width >= 600 && width < 1024) {
        return '1064px';
    } else {
        return '1100px';
    }
});
const isChecked = ref(false)
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    padding: 60px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.get-consultation__container {
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    background: var(--color-gray1);
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
    max-width: 360px;
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
    width: 100%;
    min-height: 264px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    resize: none;
    line-height: 1.2;
}

.form-textarea::placeholder {
    color: #999;
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
        width: 100%;               
        padding-right: 2rem;
    }

    /* .get-consultation__content {
        flex: 1;
    } */

    .get-consultation__title {
        max-width: 800px;
    }

    .get-consultation__description {
       width: 800px;
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