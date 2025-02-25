<template>
    <div class="video-carousel">
        <h3 class="video-carousel__title">{{ title }}</h3>
        <div class="video-carousel__container">
            <div class="video-carousel__content" ref="carouselContent">
                <div v-for="video in videos" :key="video.id" class="video-item">
                    <div class="video-wrapper">
                        <div class="vk-wrap">
                            <iframe 
                                :src="getEmbedUrl(video.url)" 
                                width="853"
                                height="480"
                                allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                                frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <h4 class="video-item__title">{{ video.title }}</h4>
                    <p class="video-item__description">{{ video.description }}</p>
                </div>
            </div>
        </div>
        <div class="carousel-controls" v-if="videos.length > 1">
            <button class="carousel-btn" @click="prevSlide">
                <span class="arrow-left"></span>
            </button>
            <button class="carousel-btn" @click="nextSlide">
                <span class="arrow-right"></span>
            </button>
        </div>
        <!-- <hr class="separator"> -->
    </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
} from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    videos: {
        type: Array,
        required: true
    }
});

const carouselContent = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const checkScroll = () => {
    if (!carouselContent.value) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselContent.value;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth;
};

const nextSlide = () => {
    if (!carouselContent.value) return;
    carouselContent.value.scrollBy({ left: 300, behavior: 'smooth' });
};

const prevSlide = () => {
    if (!carouselContent.value) return;
    carouselContent.value.scrollBy({ left: -300, behavior: 'smooth' });
};

const isVKVideo = (url) => {
    return url.includes('vk.ru') || url.includes('vk.com');
};

const getEmbedUrl = (url) => {
    if (url.includes('youtube.com')) {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0$showinfo=0$modestbranding=1`;
    }
    if (url.includes('vk.')) {
        const match = url.match(/wall-(\d+)_(\d+)/);
        if (match) {
            const [, groupId, postId] = match;
            return `https://vk.ru/video_ext.php?oid=-${groupId}&id=456239018&hd=2&autoplay=0`;
        }
    }
    return url;
};

onMounted(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    carouselContent.value?.addEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.vk-wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.2500%;
    padding-bottom: 0;
    overflow: hidden;
}

.vk-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    margin: 0;
}

.video-carousel {
    width: 100%;
    margin-bottom: 2rem;
}

.video-carousel__title {
    font-size: clamp(1.3rem, 3vw, 1.5rem);
    font-weight: var(--fw-medium);
    color: var(--color-white);
    background-color: var(--color-blue);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
}

.video-carousel__container {
    position: relative;
    width: 100%;
}

.video-carousel__content {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 1rem 0;
}

.video-carousel__content::-webkit-scrollbar {
    display: none;
}

.video-item {
    flex: 0 0 100%;
    scroll-snap-align: start;
    width: 100%;
}

.video-wrapper {
    position: relative;
    width: 100%;
    /* padding-top: 56.25%; */
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-item__title {
    font-size: 1.2rem;
    font-weight: var(--fw-bold);
    color: var(--color-gray3);
    margin: 1rem 0 0.5rem;
}

.video-item__description {
    font-size: 0.9rem;
    color: var(--color-gray2);
}

.carousel-controls {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin: 2rem 0;
}

.carousel-btn {
    width: 50px;
    height: 50px;
    background-color: var(--color-blue);
    border: none;
    border-radius: 50%;
    color: var(--color-white);
    cursor: pointer;
    transition: transform 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-btn:hover {
    transform: scale(1.1);
}

.arrow-left::before {
    content: '←';
    font-size: 24px;
    line-height: 1;
}

.arrow-right::before {
    content: '→';
    font-size: 24px;
    line-height: 1;
}

.separator {
    width: 100%;
    height: 2px;
    background-color: var(--color-gray1);
    margin: 2rem 0;
    border: none;
}

/* Планшет */
@media (min-width: 768px) {
    .video-carousel__container {
        max-width: 700px;
        margin: 0 auto;
    }

    .video-item {
        flex: 0 0 100%;
    }

    .video-wrapper {
        /* padding-top: 65%; */
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .video-carousel__container {
        max-width: 900px;
        margin: 0 auto;
    }

    .video-item {
        flex: 0 0 100%;
    }

    .video-wrapper {
        /* padding-top: 70%; */
    }
}

/* Большие экраны */
@media (min-width: 1440px) {
    .video-carousel__container {
        max-width: 1100px;
    }

    .video-wrapper {
        padding-top: 75%;
    }
}
</style>
