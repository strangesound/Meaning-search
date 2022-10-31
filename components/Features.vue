<script setup>
import features from '~/assets/static/features.json';

import { gsap } from "gsap";

onMounted(() => {
    gsap.to('.feature', {
        x: "random(-5, 5)",
        y: "random(-7, 7)",
        ease: "power1.inOut",
        duration: 5,
        repeat: -1,
        repeatRefresh: true,
        // stagger: 0.5
    })

})

</script>



<template>
    <div class="container">
        <h2 class="subhead">
            преимущества системы
        </h2>
        <div class="features">
            <p v-for="feature in features" :key="feature.feature" class="feature">
                <span v-html="feature.feature"></span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.features {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    /* grid-template-columns: repeat(auto-fit, minmax(304px, 1fr)); */
    justify-items: start;

}

.feature {
    /* max-width: 250px; */
    border: 1px solid var(--main-light-color);
    border-radius: 15px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    transition: background-color 2s;
    justify-content: flex-start;
    /* width: min-content; */
}

.feature:hover {
    background-color: var(--main-green-color);
    cursor: pointer;
}

.feature span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

}

.subhead {
    margin-bottom: 32px;
}
</style>