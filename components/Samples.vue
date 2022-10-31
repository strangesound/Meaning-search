<script setup>
import features from '~/assets/static/features.json';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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


    tl.from('.question1', {
        autoAlpha: 0, duration: 0.1
    })
    tl.from('.question1', {
        width: 0, duration: 2, ease: "steps(20)"
    })
    tl.from('.answer1', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.answer2', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.question2', {
        autoAlpha: 0, duration: 0.1
    })
    tl.from('.question2', {
        width: 0, duration: 2, ease: "steps(20)"
    })
    tl.from('.answer3', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.answer4', {
        autoAlpha: 0, duration: 1, ease: "power1.out"
    })
    tl.from('.question3', {
        autoAlpha: 0, duration: 0.1
    })
    tl.from('.question3', {
        width: 0, duration: 2, ease: "steps(20)"
    })
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
        <h2 class="subhead">
            Отраслевая специфика: Фарма
        </h2>
        <div class="answers-container">
            <p class="question question1 blinking-cursor"><span>запрос </span>Как получить спецодежду?</p>
            <p class="answer answer1">ИД -П02-0 0-006 В3 Обращение технологической и одноразовой одежды и обуви</p>
            <p class="answer answer2">Выдача и учет технологической одежды
                Потребность комплектов одежды и принадлежностей для одного работника в год устанавливают с учетом
                периодичности смены одежды и вида выполняемой работы.</p>
            <p class="question question2 blinking-cursor"><span>запрос </span>Что делать, если отравился аламинолом?</p>
            <p class="answer answer3">СпДС-П03-0 1-115 В3 Аламинол</p>
            <p class="answer answer4">Меры первой помощи при случайном отравлении: При случайном попадании средства в желудок необходимо выпить несколько стаканов воды, с 10–20 измельчёнными таблетками активированного угля. При необходимости обратиться к врачу.
            </p>
            <p class="question question3 blinking-cursor"><span>запрос </span>Кто обеспечивает безопасность котельной?</p>
            <p class="answer answer5">П Л-П05-0 5-001 В1 Положение о газовой службе БМК НАНОЛЕК
            </p>
            <p class="answer answer6">Газовая служба котельной БМК &laquo;НАНОЛЕК&raquo; предназначена для проведения комплекса мероприятий, обеспечивающих содержание опасных производственных объектов систем газового хозяйства в&nbsp;исправном и&nbsp;безопасном состоянии...
            </p>
        </div>

        <p class="sub2">В ответе нет точного соответствия запросу. Поиск был по смыслу!
        </p>
        <p class="subhead">Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив
            внутренней документации в активную среду знаний
        </p>
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
    display: flex;
    align-items: center;
    transition: background-color 2s;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 32px;


}

.question span{ 
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
    max-width: fit-content;
    max-width: 600px;

}


.subhead {
    /* margin-bottom: 32px; */
}

.answers-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
}

.blinking-cursor {
    color: #fff;
    border-right: 2px solid var(--main-light-color);
    animation: 1s blinkTextCursor infinite;
}
</style>