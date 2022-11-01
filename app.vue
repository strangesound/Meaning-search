<script setup>
  // const showModal = useState(false);
  const showModal = useState('showModal', () => false)

  // log(showModal)
  // <Modal v-show="showModal" @close-modal="showModal = false"/>
  //   <button @click="showModal = true">show</button>
</script>

<template>
  <div>
    <Header />
    <Hero @open-modal="showModal = true"/>
    <Features />
    <Samples />
    <Neural />
    <Modal v-show="showModal" @close-modal="showModal = false"/>
  </div>
</template>
