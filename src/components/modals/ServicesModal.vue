<template>
    <BaseModal :isOpen="isOpen" :closeModal="closeModal">
      <div class="services-list">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :title="service.title"
          :description="service.description"
          :items="service.items"
          :isEven="index % 2 === 0"
        />
      </div>
    </BaseModal>
  </template>
  
  <script setup>
import { defineProps } from 'vue';

import BaseModal from '@/components/modals/base/BaseModal.vue';
import ServiceCard from '@/components/ServiceCard.vue';

const props = defineProps({
    services: {
      type: Array,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  });
  
</script>

<style scoped>
.services-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Выравнивание по левому краю */
}
</style>