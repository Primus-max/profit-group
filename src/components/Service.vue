<template>
    <div class="service" :class="{ 'service--active': isOpen }" @click="toggle">
        <div class="service__content">
            <h3 class="service__title">{{ service.title }}</h3>
            <p class="service__description" v-show="isOpen">
                {{ service.description }}
            </p>
        </div>

        <div class="service__toggle-container">
            <button class="service__toggle" @click.stop="toggleModal(service.id)">
                <span class="plus-icon"></span>
            </button>
        </div>

        <!-- Модальное окно для текущего сервиса -->
        <ServicesModal
            v-if="isModalOpen"
            :services="services"
            :isOpen="isModalOpen"
            :closeModal="closeModal"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

import ServicesModal from '@/components/modals/ServicesModal.vue';

const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})

const isOpen = ref(false)
const isModalOpen = ref(false)

const services = ref([
    {
        id: 1,
        title: 'Услуги по сопровождению налоговых проверок',
        description: 'Полное сопровождение налоговых проверок «под ключ»',
        items: [
            'Представительство в комиссиях (по НДС и проч.)',
            'Представительство при проведении камеральных (выездных) проверок',
            'Аудит налогового учёта',
            'Анализ налоговых рисков и совершенных сделок',
            'Консультирование по бухгалтерскому учёту и налогам',
            'Консультирование по налоговым спорам',
            'Анализ контрагентов',
            'Аналог выездной налоговой проверки',
            'Снижение налоговых рисков',
        ],
    },
    {
        id: 2,
        title: 'Услуги по сопровождению налоговых проверок',
        description: 'Отсутствие сопровождения налоговых проверок профессионалами очень часто влечет неоправданные расходы.',
        items: [
            'Наши налоговые консультанты окажут помощь как до начала налоговой проверки, так и на этапе ее проведения.',
            'Если государственный орган уже принял ненормативно-правовой акт по результатам окончания налоговой проверки с необоснованными, на Ваш взгляд, доначислениями, то мы обжалуем их (в досудебном порядке или через суд).',
        ],
    },
    {
        id: 3,
        title: 'Услуга сопровождения налоговых проверок',
        description: 'Обеспечивает:',
        items: [
            'Минимизацию сумм доначисленных налогов, штрафов и пеней',
            'Недопущение некорректных вопросов со стороны инспекторов на допросах в налоговых органах',
            'Отстаивание интересов в досудебном порядке — спор доводится до арбитражного Суда в исключительных случаях',
        ],
    },
    {
        id: 4,
        title: 'Аудит налогового учёта',
        description: 'Проведение налогового аудита.',
        items: [
            'Восстановление бухгалтерского и налогового учета.',
            'Разработка методических рекомендаций по ведению учета.',
            'Анализируя текущую систему учета, мы разрабатываем рекомендации по исправлению ключевых недочетов и стратегию оптимизации.',
        ],
    },
    {
        id: 5,
        title: 'Консультирование по налоговым спорам',
        description: 'Наши эксперты окажут квалифицированную юридическую поддержку на любом этапе спора.',
        items: [
            'Досудебное урегулирование споров.',
            'Представление интересов в налоговых органах.',
            'Консультирование по арбитражным разбирательствам.',
            'Подготовка исков и процессуальных документов.',
            'Представление интересов в суде и на стадии исполнительного производства.',
        ],
    },
    {
        id: 6,
        title: 'Анализ налоговых рисков и совершенных сделок',
        description: 'Анализ деятельности компании и прогнозирование налоговых рисков.',
        items: [
            'Консультирование по актуальным изменениям в налоговом законодательстве и судебной практике.',
            'Содействие в оптимизации налоговой политики.',
            'Организация документооборота и контроль исполнения налоговых обязательств.',
            'Оценка возможностей применения налоговых льгот и информирование о правилах их использования.',
        ],
    },
    {
        id: 7,
        title: 'Консультирование по бухгалтерскому учёту и налогам',
        description: 'Устные или письменные консультации по конкретным вопросам.',
        items: [
            'Подготовка информации обо всех изменениях в законодательстве и анализ их влияния на деятельность компании.',
            'Разработка рекомендаций по отражению операций в учете.',
            'Ознакомление с позицией фискальных органов и судебной практикой по интересующим вопросам.',
            'Анализ документов и сделок с точки зрения налоговых рисков и разработка рекомендаций по их снижению.',
            'Помощь в оформлении налоговых деклараций и расчетов.',
            'Сопровождение бизнеса в налоговых спорах.',
        ],
    },
]);

const toggle = () => {
    isOpen.value = !isOpen.value
}

const toggleModal = (id) => {
    isModalOpen.value = !isModalOpen.value
}

const closeModal = () => {
    isModalOpen.value = false
}
</script>

<style scoped>
.service {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 29px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service__content {
    flex: 1;
    margin-right: 1rem;
}

.service__title {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    font-weight: var(--fw-medium);
    color: var(--color-black);
    line-height: 1.4;
}

.service__toggle-container {
    flex-shrink: 0;
}

.service__toggle {
    width: 42px;
    height: 42px;
    padding: 0;
    position: relative;
    border-radius: 50%;
    background: var(--color-blue);
}

.plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19px;
    height: 2px;
    background: var(--color-white);
    transition: transform 0.3s ease;
}

.plus-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.service--active .plus-icon::after {
    transform: rotate(0);
}

.service__description {
    margin-top: 1rem;
    font-size: clamp(0.875rem, 2vw, 0.9rem);
    line-height: 1.5;
    color: var(--color-gray);
}

/* Планшет */
@media (min-width: 768px) {
    .service {
        padding: 2rem;
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .service__title {
        max-width: 80%;
    }
}
</style>
