<script setup>
import forWho from '~/assets/static/forWho.json';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

onMounted(() => {
    let tl = gsap.timeline({
        repeat: 0, repeatDelay: 2, yoyo: false,

        scrollTrigger: {
            trigger: ".answers-container",
            start: "top 80%", // when the top of the trigger hits the top of the viewport
            end: "bottom+=100 bottom", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
            // markers: true

        }
    }
    );

    // cursor
    gsap.fromTo('#cursor', { autoAlpha: 0, x: 0 }, { autoAlpha: 1, duration: 0.5, repeat: -1, ease: "steps(1)" });

    //tween
    // Как получить спецодежду?
    // let tween = gsap.to('.question1', { text: { value: "this is a custom text written to show my easy approaches to make the typewriting easy!" }, duration: 5, delay: 1, ease: "none" })



    //tween2


    tl.from('.question1', {
        autoAlpha: 0, duration: 0.1
    })
    tl.to(".question1 #text", { text: { value: "Как получить спецодежду?" }, delay: 1, ease: "none" })
    tl.from('.answer1', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.answer2', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.question2', {
        autoAlpha: 0, duration: 0.1
    })
    tl.to(".question2 #text", { text: { value: "Что делать, если отравился аламинолом?" }, delay: 1, ease: "none" })
    tl.from('.answer3', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.answer4', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.question3', {
        autoAlpha: 0, duration: 0.1
    })
    tl.to(".question3 #text", { text: { value: "Кто обеспечивает безопасность котельной?" }, delay: 1, ease: "none" })
    tl.from('.answer5', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.answer6', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })



})

</script>



<template>
    <div class="container samples-container">
        <h2 id="who" class="subhead">
            Для кого решение Минч&nbsp;ИИ
        </h2>

        <div class="features">
            <p v-for="feature in forWho" :key="feature.feature" class="feature">
                <span v-html="feature.feature"></span>
            </p>
        </div>

        <h3 class="subhead2">
            Отраслевой кейс: фарма
        </h3>

        <p>В&nbsp;рамках проекта было реализовано как решение по&nbsp;цифровизации базы данных фармацевтической системы качества, так и&nbsp;функционал семантического поисковика. Охват составил несколько тысяч инструкций и&nbsp;СОПов. Активное число пользователей системы более 100. Срок реализации&nbsp;&mdash; 4&nbsp;месяца.</p>

        <div class="grid-container">
            <div class="answers-container">
                <div class="question question1">
                    <span>запрос </span>
                    <span id="text"></span>
                    <span id="cursor">|</span>
                </div>
                <p class="answer answer1 green-back">ИД -П02-0 0-006 В3 Обращение технологической и одноразовой одежды и обуви</p>
                <p class="answer answer2">Выдача и учет технологической одежды. Потребность комплектов одежды и принадлежностей для одного работника в год устанавливают с учетом периодичности смены одежды и вида выполняемой работы.</p>
                <p class="question question2">
                    <span>запрос </span>
                    <span id="text"></span>
                    <span id="cursor">|</span>

                </p>
                <p class="answer answer3 green-back">СпДС-П03-0 1-115 В3 Аламинол</p>
                <p class="answer answer4">Меры первой помощи при случайном отравлении: При случайном попадании средства
                    в желудок необходимо выпить несколько стаканов воды, с 10–20 измельчёнными таблетками
                    активированного угля. При необходимости обратиться к врачу.
                </p>
                <p class="question question3">
                    <span>запрос </span>
                    <span id="text"></span>
                    <span id="cursor">|</span>

                </p>
                <p class="answer answer5 green-back">П Л-П05-0 5-001 В1 Положение о газовой службе
                </p>
                <p class="answer answer6">Газовая служба котельной предназначена для проведения комплекса мероприятий, обеспечивающих содержание опасных производственных объектов систем газового хозяйства в&nbsp;исправном и&nbsp;безопасном состоянии...
                </p>
            </div>

            <p class="sub2">В ответе нет точного соответствия. Нейросеть понимает смысл запроса
            </p>


        </div>
    </div>
</template>

<style scoped>
@keyframes blinkTextCursor {
    from {
        border-right-color: rgba(255, 255, 255, .75);
    }

    to {
        border-right-color: transparent;
    }
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #fff;
    }
}




.question {
    /* border: 1px solid var(--main-light-color); */
    /* border-radius: 15px; */
    padding: 0px 8px 0 16px;
    /* display: flex; */
    /* align-items: center; */
    transition: background-color 2s;
    /* white-space: nowrap; */
    overflow: hidden;
    margin-top: 32px;


}

.question span:nth-child(1) {
    text-transform: uppercase;
    color: var(--main-green-color);
    margin-right: 8px;
    font-weight: 700;
    font-size: 14px;
}

.answer {
    border: 1px solid var(--main-green-color);
    border-radius: 15px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    transition: background-color 2s;
    /* max-width: fit-content; */
    /* max-width: 600px; */

}


.subhead {
    /* margin-bottom: 32px; */
}

.answers-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    /* width: 100%; */
}

.blinking-cursor {
    /* color: #fff; */
    /* border-right: 2px solid var(--main-light-color); */
    /* animation: 1s blinkTextCursor infinite; */
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 32px;
}

.green-back {
    background: var(--main-green-color);
    /* border-color: #fff; */
}

#cursor {
    margin: 0;
    display: inline-block;
}


</style>