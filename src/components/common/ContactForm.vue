<template>
    <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
            <input 
                type="text" 
                v-model="formData.name" 
                placeholder="Ваше имя" 
                class="form-input"
                required
            >
        </div>
        <div class="form-group">
            <input 
                type="tel" 
                v-model="formData.phone" 
                placeholder="+7 (999)999-99-99" 
                class="form-input"
                required
            >
        </div>
        <div class="form-group" v-if="showDescription">
            <textarea 
                v-model="formData.description" 
                placeholder="Опишите ситуацию" 
                class="form-textarea"
                required
            ></textarea>
        </div>
        <Checkbox 
            class="check-box" 
            v-model="isChecked"
            :text="checkboxText" 
        />
        <button 
            type="submit" 
            class="form-submit" 
            :disabled="!isChecked || loading"
        >
            {{ loading ? 'Отправка...' : 'Отправить' }}
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

import Checkbox from '@/components/elemets/CheckBox.vue';
import { EmailService } from '@/services/emailService';

const props = defineProps({
    formType: {
        type: String,
        default: 'Заявка с сайта'
    },
    checkboxText: {
        type: String,
        default: 'Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности'
    },
    showDescription: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['success', 'error']);

const isChecked = ref(false);
const loading = ref(false);
const formData = ref({
    name: '',
    phone: '',
    type: props.formType
});

const handleSubmit = async () => {
    if (!isChecked.value) {
        alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
        return;
    }

    loading.value = true;
    try {
        const { success, error } = await EmailService.sendContactForm(formData.value);
        
        if (success) {
            // Очищаем форму после успешной отправки
            formData.value.name = '';
            formData.value.phone = '';
            isChecked.value = false;
            
            emit('success');
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        } else {
            throw new Error(error);
        }
    } catch (error) {
        console.error('Ошибка при отправке:', error);
        emit('error', error);
        alert(error.message || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.contact-form {
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
    width: 100%;
    min-height: 264px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid var(--color-gray1);
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-black);
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

.form-submit:disabled {
    background-color: var(--color-gray1);
    cursor: not-allowed;
}

.check-box {
    font-weight: var(--fw-light);
    font-size: 0.8rem;
    text-align: left;
}

@media (min-width: 768px) {
    .form-input {
        height: 56px;
    }
}
</style>