<template>
  <BaseSection background="var(--color-white)" :z-index="2" has-radius>
    <div class="about-us__container">
      <h2 class="about-us__title">О НАС </h2>
      <p class="about-us__description">

        Молодая и прогрессивная компания, образованная несколькими партнерами – практиками, имеющими многолетний опыт
        работы в государственных органах на руководящих должностях, в судебных органах и крупных корпорациях и решения
        самых разнообразных юридических, налоговых, финансовых и управленческих задач внутри крупнейших российских и
        зарубежных компаний: налоговые споры и консультирование, юридическая экспертиза договоров, разработка положений
        и регламентов, претензионная и судебная работа, банкротство, тендерное сопровождение, аудит, уголовно-правовое
        консультирование и т.д.
        Знание внутренней специфики правовой работы поможет решить любой возникший теоретический и практический вопрос.
      </p>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue';
</script>

<style scoped>
.about-us__container {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;  
}
.about-us__title {
  font-size: 2.5rem;
  font-weight: var(--fw-bold);    
  color: var(--color-black);
  text-align: left;
}

.about-us__description {
  font-size: 1rem;
  color: var(--color-gray1);
  line-height: 1.6;  
}

@media (min-width: 768px) {
  .about-us__title {
    font-size: 3.25rem;
  }

  .about-us__description {
    font-size: 1.125rem;
  }
}

@media (min-width: 1920px) {
  .about-us__container {
    padding: 10px 100px;
  }
  .about-us__title {
    font-size: 4rem;
  }


  .about-us__description {
    font-size: 1.6rem;
  }
}
</style>