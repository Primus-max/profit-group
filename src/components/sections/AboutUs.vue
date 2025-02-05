<template>
  <BaseSection 
    background="var(--color-white)" 
    :z-index="2"
    :height="'600px'"
    has-radius
  >
  <div class="container">
    <h2 class="title">О НАС </h2>
    <p class="description">
      Молодая и прогрессивная компания, образованная несколькими партнерами – практиками, имеющими многолетний опыт работы в государственных органах на руководящих должностях, в судебных органах и крупных корпорациях и решения самых разнообразных юридических, налоговых, финансовых и управленческих задач внутри крупнейших российских и зарубежных компаний: налоговые споры и консультирование, юридическая экспертиза договоров, разработка положений и регламентов, претензионная и судебная работа, банкротство, тендерное сопровождение, аудит, уголовно-правовое консультирование и т.д.
Знание внутренней специфики  правовой работы поможет решить любой возникший теоретический и практический вопрос.
    </p>
  </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue'
import { onMounted } from 'vue';

</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 2.3rem;
  font-weight: var(--fw-light);
  padding: 16px 8px;

  /* padding-top:50px; */
  color: var(--color-black);
  text-align: left;
}

.description {
  font-size: 1.4  rem;
  color: var(--color-gray1);
  line-height: 1.6;
  max-width: 95%;
  height: 100%;
  margin: 0 auto;
  text-align: left;
}

@media (min-width: 768px) {
  /* .title {
    font-size: 3.25rem;
  }

  .description {
    font-size: 1.125rem;
  } */
}

@media (min-width: 1024px) {
  /* .title {
    font-size: 4rem;
  }

  .description {
    font-size: 1.25rem;
  } */
}
</style>