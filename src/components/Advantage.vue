<template>
    <div class="container">
        <div class="content">
            <h3 class="title">{{ info.title }}</h3>
            <p class="description">{{ info.description }}</p>
        </div>
        <div class="icon">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    info: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.container {
    height: 190px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 20px;
}

.content {
    width: 100%;
    height: 100%;
    padding: 16px 8px 8px 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.icon {
    width: 70px;
    display: flex;
    align-items: start;
    padding: 16px 6px 0 0;
}

.title {
    font-size: 1.3rem;
    font-weight: var(--fw-light);
    line-height: 1.2;
    display: block;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: left;
    color: var(--color-white);
}

.description {
    text-align: left;
    height: 100%;
    line-height: 1.2;
    color: var(--color-white);
}

/* Планшет */
@media (min-width: 768px) {
    .container {
        width: 586px;
        height: 235px;
    }

    .icon {
        width: 80px;
        padding: 18px 20px 0 0;
    }

    .title {
        font-size: 1.5rem;
    }

    .description {
        font-size: 1.1rem;
        line-height: 1.3;
    }
}

/* Большие экраны */
@media (min-width: 1920px) {
    .container {
        width: 600px;
    }
}
</style>