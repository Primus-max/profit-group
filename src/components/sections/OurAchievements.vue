<template>
    <BaseSection background="var(--color-gray4)" :z-index="3" :height="dynamicHeight" has-radius>
        <div class="our-achievements_container">
            <div class="our-achievements_content">
                <h2 class="our-achievements__title">НАШИ ДОСТИЖЕНИЯ</h2>
                <div class="our-achievements-wrapper">
                    <Achievement
                        v-for="(achievement, index) in achievements"
                        :key="index"
                        :value="achievement.value"
                        :description="achievement.description"
                        class="achievement-item"
                    />
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<script setup>
import { computed } from 'vue';

import Achievement from '@/components/Achievement.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

const dynamicHeight = computed(() => {
    const width = window.innerWidth;
    if (width < 600) {
        return '760px';
    } else if (width >= 600 && width < 768) {
        return '500px';
    } else if (width >= 768 && width < 1024) {
        return '700px';
    } else {
        return '680px';
    }

});

const achievements = [
    {
        value: '8+',
        description: 'лет на рынке услуг для бизнеса в сфере сопровождения торгов'
    },
    {
        value: '100',
        description: 'необоснованно отклоненных заявок успешно обжалуются в ФАС'
    },
    {
        value: '100',
        description: 'квалифицированная команда лучших специалистов'
    },
    {
        value: 'МЫ',
        description: 'работаем со всеми банками по направлению банковских гарантий и займов'
    }
]
</script>

<style scoped>
.our-achievements_container {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.our-achievements_content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.our-achievements__title {
    font-size: 2.5rem;
    font-weight: var(--fw-medium);
    color: var(--color-black);
    margin-bottom: 2rem;
    text-align: center;
}

.our-achievements-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.achievement-item {
    flex: 0 1 calc(50% - 1rem);
    position: relative;
    min-width: 140px;
}

/* Вертикальная линия */
.achievement-item:nth-child(odd)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1rem;
    width: 1px;
    height: 100%;
    background-color: black;
}

/* Горизонтальная линия */
.achievement-item:nth-child(-n+2)::before {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: black;
}

@media (min-width: 600px) {
    .achievement-item {
        flex: 0 1 calc(50% - 1rem);
    }

    .achievement-item:nth-child(-n+2)::before {
        display: none;
    }

    .achievement-item:not(:last-child)::after {
        right: -1rem;
        top: 0;
        width: 1px;
        height: 100%;
        left: auto;
    }
}

@media (min-width: 1024px) {
    .our-achievements__title {
        font-size: 4rem;
    }

    .achievement-item {
        flex: 0 1 calc(25% - 1.5rem);
    }

    /* Сброс стилей для разделителей */
    .achievement-item:nth-child(-n+2)::before,
    .achievement-item:nth-child(odd)::after {
        display: none;
    }

    /* Добавление вертикальных линий */
    .achievement-item:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 0;
        right: -1rem;
        width: 1px;
        height: 100%;
        background-color: black;
        display: block;
    }
}
</style>