<script setup>
import { gsap } from "gsap";

import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';

// const emit = defineEmits('open-modal')

const emit = defineEmits(['open-modal'])

const myModal = () => {
    emit('open-modal')
}

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

    //ball mouse follow

    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth, y: window.innerHeight };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.05;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.ticker.add(() => {

        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });


    //ball mouse follow end


    let form = document.getElementById('sheetdb-form');


    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
            // you can put any JS code here
            // window.open('page2.html', '_blank');
            // console.log('sucsess');
            myModal()
        });
    });


    // three

    let container, stats, clock;

    let camera, scene, renderer;

    let line;

    const segments = 50;
    const r = 1000;
    let t = 0;
    container = document.getElementById('container');
    let headerTextContainer = document.getElementById('header-text-container');
    let width3d = container.offsetWidth;
    let height3d = container.offsetHeight;


    init();
    animate();

    function init() {

        // console.log(container);
        //
        // console.log(width, height);

        camera = new THREE.PerspectiveCamera(27, width3d / height3d, 1, 4000);
        camera.position.z = 2750;
        camera.position.x = -500;
        camera.position.y = -200;

        scene = new THREE.Scene();

        clock = new THREE.Clock();

        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ vertexColors: true });

        const positions = [];
        const colors = [];

        for (let i = 0; i < segments; i++) {

            const x = Math.random() * r - r / 2;
            const y = Math.random() * r - r / 2;
            const z = Math.random() * r - r / 2;

            // positions

            positions.push(x, y, z);

            // colors

            colors.push((x / r) + 0.5);
            colors.push((y / r) + 0.5);
            colors.push((z / r) + 0.5);

        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        generateMorphTargets(geometry);

        geometry.computeBoundingSphere();

        line = new THREE.Line(geometry, material);
        scene.add(line);

        //

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width3d, height3d);
        renderer.outputEncoding = THREE.sRGBEncoding;

        container.appendChild(renderer.domElement);

        //

        // stats = new Stats();
        // container.appendChild(stats.dom);

        //

        window.addEventListener('resize', onWindowResize);

    }

    function onWindowResize() {
        width3d = container.offsetWidth;
        height3d = container.offsetHeight;
        camera.aspect = width3d / height3d;
        camera.updateProjectionMatrix();

        renderer.setSize(width3d, height3d);

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        // stats.update();

    }

    function render() {

        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        line.rotation.x = time * 0.25;
        line.rotation.y = time * 0.5;

        t += delta * 0.5;
        line.morphTargetInfluences[0] = Math.abs(Math.sin(t));

        renderer.render(scene, camera);

    }

    function generateMorphTargets(geometry) {

        const data = [];

        for (let i = 0; i < segments; i++) {

            const x = Math.random() * r - r / 2;
            const y = Math.random() * r - r / 2;
            const z = Math.random() * r - r / 2;

            data.push(x, y, z);

        }

        const morphTarget = new THREE.Float32BufferAttribute(data, 3);
        morphTarget.name = 'target1';

        geometry.morphAttributes.position = [morphTarget];

    }


})



</script>


<template>

    <div class="container">
        <div class="gradient"></div>
        <div class="gradient2"></div>
        <div class="ball"></div>
        <div class="header-text-container" id="header-text-container">
            <h1>Извлечем <span>смысл</span> из ваших документов понятным языком</h1>

            <p class="heroSbh">Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив
                внутренней документации в активную среду знаний
            </p>

            <div class="two-columns">
                <div class="cont">
                    <p class="bold">
                        Поиск через поисковую строку</p>
                    <p class="quote">
                        Семантический поисковик: выдача ответа на поисковый запрос в виде ссылки на документ и
                        выделенным
                        прямов нем наиболее совпадающим по смыслу абзацем
                    </p>
                </div>
                <div class="cont">
                    <p class="bold">
                        Поиск через диалог с чат-ботом</p>
                    <p class="quote">
                        Виртуальный консультант: генерация релевантного ответа в режиме диалога с чат-ботом без
                        галлюцинаций. Основан на RAG-подходе
                    </p>
                </div>
            </div>

        </div>





        <div class="container3d" id="container"></div>

        <form class="form-container" name="submit-to-google-sheet" action="https://sheetdb.io/api/v1/vkofd3m3hmdyu"
            method="post" id="sheetdb-form">
            <input class="input" name="email" type="data[email]" placeholder="Введите ваш email" required>
            <button class="button" type="submit">Получить консультацию</button>
        </form>




    </div>
</template>

<style scoped>
.bold {
    font-weight: 700;
}


.two-columns {
    margin: 5vw 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
}


h1 {
    font-size: max(22px, min(4.5vw, 51px));
    text-transform: uppercase;
    margin-left: -.45vw;
    max-width: 700px;
    line-height: 120%;
}

h1 span {
    font-weight: 700;
}

.gradient {
    position: fixed;
    right: -50vmax;
    top: -50vmax;
    width: 75vmax;
    aspect-ratio: 1/1;
    background: radial-gradient(50% 50% at 50% 50%, #36BBA6 0%, rgba(54, 187, 166, 0) 100%);
    z-index: -7;
    pointer-events: none;

}

.gradient2 {
    position: fixed;
    left: 0vw;
    bottom: 0vw;
    width: 100vmax;
    aspect-ratio: 1/1;
    background: radial-gradient(50% 50% at 50% 50%, #36BBA6 0%, rgba(54, 187, 166, 0) 100%);
    z-index: -7;

}

.heroSbh {
    font-size: max(16px, min(1.488vw, 20px));
    line-height: 120%;
    text-transform: uppercase;
    margin-top: 2.381vw;
    max-width: 700px;

}

.form-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
    margin-top: 32px;
    flex-wrap: wrap;
}

.ball {
    width: 50vmax;
    height: 50vmax;
    position: fixed;
    top: 0;
    left: 0;
    /* border: 3px solid dodgerblue; */
    background: radial-gradient(50% 50% at 50% 50%, rgba(54, 187, 166, .5) 0%, rgba(54, 187, 166, 0) 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;

}

#container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    left: 0;
    top: 0;
    mix-blend-mode: screen;

}

.container3d {
    overflow: hidden;
}
</style>