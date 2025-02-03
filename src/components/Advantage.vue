<template>
    <div class="conteiner">
        <div class="icon">
            <slot></slot>
        </div>
        <div class="content">
            <span class="title">{{ info.title }}</span>
            <p class="description">{{ info.description }}</p>
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
    width: 100%;
    height: 190px;
    margin-block: 10px;
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--color-black);
    border-radius: 20px;
}

.icon {
    width: 60px;
    height: 60px;
    color: white;
    border-radius: 40%;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

}

.title {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    margin-top: 15px;
    display: flex;
    font-size: 1.3rem;
    font-weight: var(--fw-light);
    text-align: left;
    flex-direction: column;
}

.description {
    width: 90%;
    height: 100%;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: var(--fw-light);
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.3rem;
}
</style>