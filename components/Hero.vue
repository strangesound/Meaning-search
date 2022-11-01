<script setup>
import { gsap } from "gsap";
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

gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
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

    // const scriptURL = 'https://script.google.com/macros/s/AKfycbwSnyk3-OSnZ6uWE67UPBztjqb-g-xb9MMYouzZKm0LCDCbcP5H3uBv6DiYy_9h3rdr/exec'
    // const form = document.forms['submit-to-google-sheet']

    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    //         .then(response => console.log('Success!', response))
    //         .catch(error => console.error('Error!', error.message))
    // })
})



</script>


<template>

    <div class="container">
        <div class="gradient"></div>
        <div class="gradient2"></div>
        <div class="ball"></div>

        <h1>Извлечем смысл из ваших документов понятным языком</h1>
        <p class="heroSbh">Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив
            внутренней документации в активную среду знаний
        </p>


        <form class="form-container" name="submit-to-google-sheet" action="https://sheetdb.io/api/v1/vkofd3m3hmdyu" method="post" id="sheetdb-form">
            <input class="input" name="email" type="data[email]" placeholder="Введите ваш email" required>
            <button class="button" type="submit">Получить консультацию</button>
        </form>




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

.form-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
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

</style>