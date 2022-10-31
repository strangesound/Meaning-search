<script setup>
import { gsap } from "gsap";

onMounted(() => {
    gsap.to('.gradient', {
        x: "random(-700, 0)",
        y: "random(0, 700)",
        duration: 3,
        repeat: -1,
        ease: "power4.out",
        repeatRefresh: true
    })
    gsap.to('.gradient2', {
        x: "random(-700, 350)",
        y: "random(-350, 350)",
        duration: 3,
        repeat: -1,
        ease: "power4.inOut",
        repeatRefresh: true
    })

})

</script>


<template>

    <div class="container">
        <div class="gradient"></div>
        <div class="gradient2"></div>
        <h1>Извлечем смысл из ваших документов понятным языком</h1>
        <p class="heroSbh">Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив внутренней документации в активную среду знаний
        </p>
    </div>
</template>

<style scoped>
h1 {
    font-size: max(22px, min(7.068vw, 95px));
    text-transform: uppercase;
    margin-left: -.45vw;
}

.gradient {
    position: fixed;
    right: -50vmax;
    top: -50vmax;
    width: 75vmax;
    aspect-ratio: 1/1;
    background: radial-gradient(50% 50% at 50% 50%, #36BBA6 0%, rgba(54, 187, 166, 0) 100%);
    z-index: -1;
    pointer-events: none;

}

.gradient2 {
    position: fixed;
    left: 0vw;
    bottom: 0vw;
    width: 100vmax;
    aspect-ratio: 1/1;
    background: radial-gradient(50% 50% at 50% 50%, #36BBA6 0%, rgba(54, 187, 166, 0) 100%);
    z-index: -1;

}

.heroSbh {
    font-size: max(16px, min(1.488vw, 20px));
    line-height: 120%;
    text-transform: uppercase;
    margin-top: 2.381vw;

}
</style>