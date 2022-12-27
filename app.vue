<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const showModal = useState('showModal', () => false)

// log(showModal)
// <Modal v-show="showModal" @close-modal="showModal = false"/>
//   <button @click="showModal = true">show</button>
onMounted(() => {

 





  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(91359994, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

})

</script>

<template>
  <div>

        <Header />
        <Hero @open-modal="showModal = true" />
        <Features />
        <Samples />
        <Neural />
        <Team />
        <HowItWorks @open-modal="showModalSertificate = true"/>
        <Footer />
        <Modal v-show="showModal" @close-modal="showModal = false" />
      </div>
</template>

<style scoped>
#viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#content {
  overflow: visible;
  width: 100%;
}
</style>