<template>
  <div :class="['service-card']">
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <ul class="service-card__list">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  isEven: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.service-card {
  width: 100%;
  background-color: #f9f9f9; 
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px); 
}

.service-card--even {
  margin-left: auto; 
}

.service-card__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-card__description {
  margin-bottom: 10px;
}

.service-card__list {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
