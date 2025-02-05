<template>
    <div class="media-item">
        <video :src="video.url" controls></video>
        <span class="media-title">{{ video.title }}</span>
        <span class="media-description">{{ video.description }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    video: {
        type: Object,
        required: true
    }
})
</script>

<style lang="css" scoped>
.media-item {
    width: 379px;
    height: 213px;
    display: block;
    border-radius: 10px;    
}

.media-title {
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    font-size: 1.2rem;
    font-weight: var(--fw-bold);
    color: var(--color-gray3);
}

.media-description {
    width: 100%;
    margin-left: 20px;
    margin-bottom: 40px;
    display: flex;
    font-size: 0.9rem;
    font-weight: var(--fw-light);
    color: var(--color-gray2);
}
</style>
