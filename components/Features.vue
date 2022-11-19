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
    <div id="benefits" class="container">
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
