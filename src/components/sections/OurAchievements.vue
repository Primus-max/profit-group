<template>
    <BaseSection 
        background="var(--color-gray4)" 
        :z-index="3"
        has-radius
    >
    <div class="our-achievements_conteiner">
    <h2 class="our-achievements__title">НАШИ ДОСТИЖЕНИЯ</h2>
    <div class="our-achievements-text">   
   <div class="floor-1"> 
        <div class="achievements-info" > <div><span class="achievements-info__title">8+</span><p class="achievements-info__description">лет на рынке услуг для бизнеса в сфере сопровождения торгов</p></div></div>
                <div class="vertical-line"></div>
        <div class="achievements-info"><div><span class="achievements-info__title">100%</span><p class="achievements-info__description">необоснованно отклоненных заявок успешно обжалуются в ФАС</p></div></div>
    </div>
                <hr width="100%" size="3" color="black" class="mobail-achievements__seporator">
    <div class="floor-2">
        <div class="achievements-info" > <div><span class="achievements-info__title" >100%</span><p class="achievements-info__description">квалифицированная команда лучших специалистов</p></div></div>
                <div class="vertical-line"></div>
        <div class="achievements-info"><div> <span class="achievements-info__title">МЫ</span> <p class="achievements-info__description">работаем со всеми банками по направлению банковских гарантий и займов</p></div></div>
    </div>
    </div>
    </div>
    </BaseSection>
</template>

<script setup>
import BaseSection from '@/components/sections/base/BaseSection.vue'
</script>

<style scoped>
/* мобильная */

.our-achievements_conteiner{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}


.our-achievements__title {
    width: 50%;
    line-height:40px;
    font-size: 2.5rem;
    font-weight: var(--fw-medium);
    color: var(--color-black);
    text-align:left;
    padding-bottom: 30px;

}

.our-achievements-text{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.floor-1{
    display: flex;
    justify-content: space-between;
}
.floor-2{
    display: flex;
    justify-content: space-between;
}
.achievements-info{
    width: 150px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}

.achievements-info__description{
    height: 100px;
    width: 200px;
    padding:0 8px;
    font-size: 0.9rem;
    line-height:1rem;
    text-justify: newspaper; 
   
    
}
.achievements-info__title{
    font-size: 3rem;
    font-weight: var(--fw-bold);
    letter-spacing: 1px;
}

.vertical-line{
    height: 185px;
    margin-top: 14px;
    border: 1px solid black;
}

.mobail-achievements__seporator{
    display: block;
}

/* планшет */
@media (min-width: 768px) {
    .our-achievements__title {
        font-size: 3rem;
    width: 100%;
    line-height:40px;
    font-size: 2.5rem;
    font-weight: var(--fw-medium);
    color: var(--color-black);
    text-align:left;
    padding-bottom: 30px;

    }
    .mobail-achievements__seporator{
    display: none;
}
.our-achievements-text{
    
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .our-achievements_conteiner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;

    }
}








/* десктоп */
@media (min-width: 1024px) {
    .our-achievements__title {
        font-size: 4rem;
    }
    .mobail-achievements__seporator{
    display: none;
}
}
</style>