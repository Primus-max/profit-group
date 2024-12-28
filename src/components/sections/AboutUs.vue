<template>
    <div class="about-us">
        <div class="about-us__container">
            <div class="about-us__content">
                <h2 class="about-us__title">Profit <br> GROUP</h2>
                <p class="about-us__description">We are a team of passionate developers who are dedicated to creating
                    high-quality software solutions.</p>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>


<style lang="css" scoped>
.about-us {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    background: var(--color-white);
    margin-top: var(--section-margin-overlay);
}

.about-us__container {
    width: 100%;
    padding: 1rem;
}

.about-us__content {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
}

.about-us__title {
    font-size: 2.5rem;
    font-weight: var(--fw-bold);
    margin-bottom: 1.5rem;
    color: var(--color-black);
}

.about-us__description {
    font-size: 1rem;
    color: var(--color-gray1);
    line-height: 1.6;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .about-us__container {
        padding: 1.5rem;
    }

    .about-us__title {
        font-size: 3.25rem;
    }

    .about-us__description {
        font-size: 1.125rem;
    }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
    .about-us__container {
        padding: 2rem;
    }

    .about-us__content {
        max-width: 800px;
    }

    .about-us__title {
        font-size: 4rem;
    }

    .about-us__description {
        font-size: 1.25rem;
    }
}
</style>