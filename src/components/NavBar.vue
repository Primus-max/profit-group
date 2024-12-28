<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="navbar">
    <a href="#home" @click.prevent="scrollToSection('home')">Главная</a>
    <a href="#about" @click.prevent="scrollToSection('about')">О нас</a>
    <a href="#services" @click.prevent="scrollToSection('services')">Услуги</a>
    <a href="#portfolio" @click.prevent="scrollToSection('portfolio')">Портфолио</a>
    <a href="#contacts" @click.prevent="scrollToSection('contacts')">Контакты</a>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 100;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.navbar a:hover {
  color: #42b883;
}
</style>
