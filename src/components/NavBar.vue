<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { id: 'home', label: 'Главная' },
      { id: 'about', label: 'О нас' },
      { id: 'services', label: 'Услуги' },
      { id: 'portfolio', label: 'Портфолио' },
      { id: 'contacts', label: 'Контакты' }
    ]
  }
})

const activeSection = ref('home')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const checkActiveSection = () => {
  const sections = props.menuItems.map(item => document.getElementById(item.id))
  const scrollPosition = window.scrollY + window.innerHeight / 3

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = props.menuItems[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkActiveSection)
  checkActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection)
})
</script>

<template>

  <div>
    <nav class="navbar">
      <span class="logo">Profit GROUP</span>
      <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`" :class="{ active: activeSection === item.id }"
        @click.prevent="scrollToSection(item.id)">
        {{ item.label }}
      </a>
    </nav>
  </div>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  position: absolute;
  top:22px;
  left: 50px;
  font-size: 1.5rem;
  font-weight: var(--fw-semibold);
}

.navbar a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

.navbar a:hover::after,
.navbar a.active::after {
  width: 80%;
}

.navbar a:hover {
  color: var(--color-blue);
}

.navbar a.active {
  color: var(--color-blue);
  font-weight: 500;
}
</style>
