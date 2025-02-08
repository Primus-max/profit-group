<script setup>
import { ref } from 'vue';

import LogoIcon from '@/components/icons/LogoIcon.vue';

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => []
  }
})

const isMenuOpen = ref(false)
const isLogoAnimate = ref(true);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="main__logo">
        <!-- <LogoIcon :animate="isLogoAnimate" /> -->
      </div>
      <!-- Десктопное меню -->
      <ul class="navbar__menu">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="`#${item.id}`">{{ item.label }}</a>
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
          <a :href="`#${item.id}`" @click="toggleMenu">{{ item.label }}</a>
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

.main__logo {
  width: 50px;
  height: 50px;
}

.navbar__content {
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navbar__logo {
  height: 40px;
}

/* Мобильное меню по умолчанию */
.navbar__menu {
  display: none;
}

.navbar__burger {
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

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .navbar__content {
    width: 85%;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .navbar__content {
    width: 80%;
  }

  .navbar__burger {
    display: none;
  }

  .navbar__mobile-menu {
    display: none;
  }

  .navbar__menu {
    display: flex;
    gap: 2rem;
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
