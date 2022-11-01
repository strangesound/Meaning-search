<script setup>

import { Application } from '@splinetool/runtime';


onMounted(() => {

    // // make sure you have a canvas in the body
    // const canvas = document.getElementById('canvas3d');

    // // start the application and load the scene
    // const spline = new Application(canvas);
    // // spline.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode');
    // spline.load('../assets/images/scene.splinecode');


})
</script>

<template>
    <div class="container">
        <canvas class="container3d" id="canvas3d"></canvas>
        <p class="subhead">Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив
            внутренней документации в активную среду знаний
        </p>

        <div class="sketchfab-embed-wrapper"> <iframe src="https://sketchfab.com/models/e392fc2d7d61449b9b20bfb997171b7b/embed"> </iframe>
        </div>

    </div>
</template>

<style scoped>
.sketchfab-embed-wrapper {
    mix-blend-mode: screen;
    width: 100vw;
    height: 100vh;

}

.container3d {
    width: 100vw;
    height: 100vh;
}

</style>