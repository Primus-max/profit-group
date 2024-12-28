<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <label class="checkbox">
        <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
        <svg class="checkbox-icon" viewBox="0 0 24 24">
            <!-- Квадратик -->
            <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" />
            <!-- Галочка -->
            <path class="checkmark" d="M20 6.42L8.83 17.59 4 12.76l1.41-1.41 3.42 3.42L18.59 5z" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <span class="checkbox-label">{{ text }}</span>
    </label>
</template>

<style scoped>
.checkbox {
    margin-left: 10px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.checkbox input {
    display: none;
}

.checkbox-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.checkbox-icon rect {
    stroke: currentColor;
}

.checkbox-icon .checkmark {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    opacity: 0;
}

.checkbox input:checked+.checkbox-icon .checkmark {
    opacity: 1;
}

.checkbox-label {
    user-select: none;
}
</style>
