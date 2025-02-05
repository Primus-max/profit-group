<script setup>
import NavBar from '@/components/NavBar.vue';
import AboutUs from '@/components/sections/AboutUs.vue';
import Banner from '@/components/sections/Banner.vue';
import GetConsultation from '@/components/sections/GetConsultation.vue';
import Media from '@/components/sections/Media.vue';
import OurAchievements from '@/components/sections/OurAchievements.vue';
import OurAdvantages from '@/components/sections/OurAdvantages.vue';
import Services from '@/components/sections/Services.vue';
</script>

<template>
  <div class="main-view">
    <header>
      <NavBar :menuItems="[
        { id: 'home', label: 'Главная' },
        { id: 'about', label: 'О нас' },
        { id: 'services', label: 'Услуги' },
        { id: 'portfolio', label: 'Портфолио' },
        { id: 'contacts', label: 'Контакты' }
      ]" />
    </header>
    <main class="main-view__container">
      <Banner />
      <AboutUs />
      <OurAchievements />
      <GetConsultation />
      <Services />
      <OurAdvantages/>
      <!-- <Media/> -->
    </main>
    <footer>

    </footer>
  </div>
</template>

<style lang="css" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
}


.main-view__container {
  padding: 0;
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  width: 100%;
}

main {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .main-view__container {
    width: 85%;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .main-view__container {
    width: 80%;
  }
}
</style>
