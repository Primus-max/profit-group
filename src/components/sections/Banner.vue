<template>
  <BaseSection style="background-image: url('/banner.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :height="dynamicHeight" :z-index="1" id="home">
    <div class="banner-container">
      <LogoIcon class="logo" v-if="isLogoVisibleInBanner" />
      <div class="banner-info" :class="{ 'hidden': !isLogoVisibleInBanner }">
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
import { useLogoStore } from '@/stores/logoStore';

const logoStore = useLogoStore();
const isLogoVisibleInBanner = ref(true); // Логотип виден в баннере по умолчанию

const dynamicHeight = computed(() => {
  const width = window.innerWidth;
  if (width < 600) {
    return '120vh';
  } else if (width >= 600 && width < 1024) {
    return '130vh';
  } else {
    return '140vh';
  }
});

const handleScroll = () => {
  const navbar = document.querySelector('.navbar');
  const bannerContainer = document.querySelector('.banner-container');

  if (navbar && bannerContainer) {
    const navbarRect = navbar.getBoundingClientRect();
    const bannerRect = bannerContainer.getBoundingClientRect();

    // Проверяем, нужно ли показывать логотип в навбаре
    const shouldShowLogoInNavbar = bannerRect.bottom <= navbarRect.top;

    if (shouldShowLogoInNavbar && isLogoVisibleInBanner.value) {
      isLogoVisibleInBanner.value = false; // Скрываем логотип в баннере
      logoStore.setVisibility(true); // Показываем логотип в навбаре
    } else if (!shouldShowLogoInNavbar && !isLogoVisibleInBanner.value) {
      isLogoVisibleInBanner.value = true; // Показываем логотип в баннере
      logoStore.setVisibility(false); // Скрываем логотип в навбаре
    }
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
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;
}

.banner-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  padding-top: 60px;
  background-size: cover;
  background-position: center;
}

.banner-info {
  transition: opacity 0.3s ease;
}

.banner-info.hidden {
  display: none;
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