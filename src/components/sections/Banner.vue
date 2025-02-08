<template>
  <BaseSection background="var(--color-gray2)" :height="dynamicHeight" :z-index="1">
    <div class="banner-container">
      <LogoIcon class="logo" :class="{ 'sticky': isLogoSticky }" :animate="false" />
      <div class="banner-info" :class="{ 'hidden': isLogoSticky }">
        <h1 class="banner__title"><span style="color: var(--color-black);">Profit</span> GROUP</h1>
        <p class="banner__description">Ваш надёжный партнёр</p>
      </div>
    </div>
  </BaseSection>
</template>

<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import BaseSection from '@/components/sections/base/BaseSection.vue';

const dynamicHeight = computed(() => {
  const width = window.innerWidth;
  if (width < 600) {
    return '850px';
  } else if (width >= 600 && width < 1024) {
    return '1069px';
  } else {
    return '900px';
  }
});

const isLogoSticky = ref(false);
const lastScrollY = ref(0);

const handleScroll = () => {
  const logo = document.querySelector('.logo');
  const navbar = document.querySelector('.navbar');

  if (logo && navbar) {
    const currentScrollY = window.scrollY;
    const logoRect = logo.getBoundingClientRect();
    const navbarRect = navbar.getBoundingClientRect();

    // Проверяем, скрывается ли логотип под навбаром
    if (logoRect.bottom < navbarRect.top) {
      isLogoSticky.value = true; // Логотип прилип
    } else if (navbarRect.bottom > logoRect.top) {
      isLogoSticky.value = false; // Логотип возвращается на место
    }

    lastScrollY.value = currentScrollY; // Обновляем последнее значение прокрутки
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.logo {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.logo.sticky {
  position: fixed;
  top: 10px; /* Отрегулируйте по необходимости */
  left: 20px; /* Перемещаем логотип влево */
  width: 100px; /* Уменьшаем размер логотипа */
  height: 100px; /* Уменьшаем размер логотипа */
  z-index: 100; /* Убедитесь, что логотип выше других элементов */
}

.banner-container {
  width: 100%;
  height: 100%;
  display: flex;  
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;  
}

.banner-info {
  transition: opacity 0.3s ease; /* Плавный переход для текста */
}

.banner-info.hidden {
  display: none; /* Скрываем текст при прилипании логотипа */
}

.banner__title {
  font-size: 2.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin: 10px 0;
}

.banner__description {
  font-size: 1.25rem;
  color: var(--color-white);
  margin-top: 5px;
}

@media (min-width: 768px) {
  .banner__title {
    font-size: 3.25rem;
  }
  .banner__description {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .banner-container {
    flex-direction: row;
  }
  .logo {
    width: 400px;
    height: 400px;

  }
  .banner__title {
    font-size: 4rem;
  }

  .banner__description {
    font-size: 1.75rem;
  }
}
</style>