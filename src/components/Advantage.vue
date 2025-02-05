<template>
    <div class="conteiner">
        <div class="content">
            <span class="title">{{ info.title }}</span>
            <p class="description">{{ info.description }}</p>
        </div>
        <div class="icon">
            <slot ></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    info: {
        type: Object,
        required: true
    }
})
</script>

<style lang="css" scoped>
.conteiner {
    width: 350px;
    height: 190px;
    /* margin-block: 10px; */
    display: flex;
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
    /* Переносить текс */
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: left;
}

.description {
    text-align: left;
    height: 100%;
    line-height: 1.2;
}


@media (min-width:768px) {
    .conteiner {
        width: 586px;
    }
}

@media (min-width:1920px) {
    .conteiner {
        width: 600px;
    }
}
</style>