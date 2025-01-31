<template>
    <div class="service" :class="{ 'service--active': isOpen }" @click="toggle">
        <div class="service__header">
            <h3 class="service__title">{{ service.title }}</h3>
         </div>   
         <div class="service_toggle_conteiner">
            <button class="service__toggle">
                <span class="plus-icon"></span>
            </button>
        </div>
        <p class="service__description" v-show="isOpen">
            {{ service.description }}
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.service {
    display: flex;
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.service_toggle_conteiner{
    width: 50px;
    display: flex;

}

.service__title {
    width: 50%;
    padding-left: 10px;
    font-size: 1.1rem;
    text-align: left;
    font-weight: var(--fw-medium);
    color: var(--color-black);
}

.service__toggle {
    width: 42px;
    height: 42px;
    padding: 16px;
    position: relative;
    border-radius: 21px;
    background: var(--color-blue);
}

.plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19px;
    height: 2px;
    background: var(--color-white);
    transition: transform 0.3s ease;
}

.plus-icon::after {
    left:0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.service--active .plus-icon::after {
position: fixed;
    transform: rotate(0);
}

.service__description {
    margin-top: 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray);
}

/* decktop */
@media  (min-width: 1024px){
    .service__title {
    width: 100%;
    padding-left: 10px;
    font-size: 1.1rem;
    text-align: left;
    font-weight: var(--fw-medium);
    color: var(--color-black);
}
}
    

</style>
