<template>
  <div class="achievement-item">
    <div class="info-text">
      <span class="achievement-title" ref="counterRef">
        <template v-if="isNumeric">{{ displayValue }}</template>
        <template v-else>
          <span v-for="(char, index) in finalValue" :key="index" 
                :style="{ animationDelay: `${index * 0.1}s` }" 
                class="char-animate">
            {{ char }}
          </span>
        </template>
      </span>
      <p class="achievement-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const counterRef = ref(null);
const displayValue = ref('0');
const isNumeric = computed(() => !isNaN(parseInt(props.value)));
const finalValue = computed(() => props.value.replace('+', ''));

const animateValue = (start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start));
    displayValue.value = currentValue + (props.value.includes('+') ? '+' : '%');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const { stop } = useIntersectionObserver(
  counterRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (isNumeric.value) {
        const endValue = parseInt(finalValue.value);
        animateValue(0, endValue, 2000);
      }
      stop();
    }
  },
);
</script>

<style scoped>
.achievement-item {
  padding: 1rem;
  display: flex;
  flex-direction: column;  
  text-align: center;
}

.achievement-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--fw-bold);
  margin-bottom: 1rem;
}

.achievement-description {
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.4;
  max-width: 250px;
  margin: 0 auto;
}

.char-animate {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
