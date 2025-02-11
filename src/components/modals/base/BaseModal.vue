<template>
  <div class="modal-overlay" v-if="isOpen" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <slot></slot> <!-- Здесь будет вставляться содержимое модального окна -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 40px 20px 20px 20px;
  border-radius: 8px;
  max-width: 800px;
  height: 100%;
  max-height: 90vh;
  width: 90%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-content::-webkit-scrollbar {
  width: 6px; 
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: #888; 
  border-radius: 4px; 
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}

.close-button {
  position: absolute;  
  top: 10px; 
  right: 20px; 
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  z-index: 1; 
}
</style>