<script setup>
defineProps({
  background: {
    type: String,
    default: 'var(--color-white)'
  },
  height: {
    type: String,
    default: '100vh'
  },
  zIndex: {
    type: Number,
    default: 1
  },
  hasRadius: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="base-section" :class="{ 'has-radius': hasRadius }" :style="{
    background,
    height,
    zIndex
  }">
    <div class="base-section__content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.base-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--section-margin-overlay);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.has-radius {
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}

/* .base-section__container {
  width: 92%;
  height: auto;
  base-section__container margin: 0 auto;
} */

.base-section__content {
  width: 100%;
  height: 100%;
  display: flex; 
}

@media (max-width: 600px) {
  .base-section {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

/* @media (min-width: 768px) {
  .base-section__container {    
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .base-section__container {    
    padding: 2rem;
  }
} */
</style>