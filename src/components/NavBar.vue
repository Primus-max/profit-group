<script setup>
import {
  computed,
  ref,
  watch,
} from 'vue';

import LogoIcon from '@/components/icons/LogoIcon.vue';
import { useLogoStore } from '@/stores/logoStore';
import { scrollToAnchor } from '@/utils/scrollUtils';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  }
});

const logoStore = useLogoStore();
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const scrollToSection = (id) => {
  scrollToAnchor(id, 100);
};

</script>

<template>
  <nav class="navbar">
    <div class="navbar__content" :class="{ 'centered': !logoStore.isVisible }">
      <div class="main__logo">
        <LogoIcon v-if="logoStore.isVisible" />
      </div>
      <div class="banner__title-container">
        <h1 class="banner__title" v-if="logoStore.isVisible"><span style="color: var(--color-black);">Profit</span><span
            style="color: gray"> GROUP</span></h1>
      </div>

      <!-- Десктопное меню -->
      <ul class="navbar__menu">
        <li v-for="item in menuItems" :key="item.id">
          <a href="#" @click.prevent="scrollToSection(item.id)">{{ item.label }}</a>
        </li>
      </ul>
      <!-- Мобильная кнопка бургер -->
      <button class="navbar__burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <!-- Мобильное меню -->
    <div class="navbar__mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <a href="#" @click.prevent="scrollToSection(item.id)" @click="toggleMenu">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar__content {
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  transition: justify-content 0.3s ease;
}

.centered {
  justify-content: center;
}

.main__logo {
  width: 50px;
  height: 50px;
}

.navbar__logo {
  height: 40px;
}

.banner__title-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner__title {
  font-size: 1.9rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  /* height: 50px; */
  /* margin: 10px 0; */
}

.logo-container {
  width: 24%;
  display: flex;
  justify-content: space-between;
}

/* Мобильное меню по умолчанию */
.navbar__menu {
  display: none;
}

.navbar__burger {
  position: fixed;
  top: 20px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: manipulation;
}

.navbar__burger:active,
.navbar__burger:focus {
  background-color: transparent;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.navbar__burger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--color-black);
  transition: all 0.3s ease;
}

.navbar__mobile-menu {
  position: fixed;
  top: -10px;
  /* Высота навбара */
  left: 0;
  width: 100%;
  background: white;
  padding: 1rem 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 99;
}

.navbar__mobile-menu.is-open {
  transform: translateY(0);
  top: 72px;
}

.navbar__mobile-menu ul {
  width: 92%;
  margin: 0 auto;
}

.navbar__mobile-menu li {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar__mobile-menu a {
  display: block;
  font-size: 1.1rem;
  color: var(--color-black);
}

@media (max-width: 767px) {
  .navbar__content {
    width: 62%;
    margin-right: 30%;
  }

  .centered {
    justify-content: center;
  }
}

/* Tablet (768px and up) */

@media (min-width: 768px) {
  .banner__title {
    font-size: 2.5rem;
  }

  .navbar__content {
    width: 85%;
    align-items: flex-start
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .navbar__content {
    width: 96%;
    align-items: center;
    font-size: 0.8rem;
    gap: 1rem;
  }

  .navbar__burger {
    display: none;
  }

  .navbar__mobile-menu {
    display: none;
  }

  .navbar__menu {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .navbar__menu a {
    color: var(--color-black);
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .navbar__menu a:hover {
    color: var(--color-blue);
  }
}

/* Добавим также общий стиль для всех кнопок в приложении */
button {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: manipulation;
}
</style>
