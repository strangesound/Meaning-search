<script setup>
  // const showModal = useState(false);
  const showModal = useState('showModal', () => false)

  // log(showModal)
  // <Modal v-show="showModal" @close-modal="showModal = false"/>
  //   <button @click="showModal = true">show</button>
  onMounted(() => {
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(91359994, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });

  })

</script>

<template>
  <div>
    <Header />
    <Hero @open-modal="showModal = true"/>
    <Features />
    <Samples />
    <Neural />
    <Team />
    <HowItWorks />
    <Footer />
    <Modal v-show="showModal" @close-modal="showModal = false"/>
  </div>
</template>
