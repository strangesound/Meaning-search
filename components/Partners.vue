<script setup>

</script>



<template>
    <div class="container samples-container">
        <h2 id="works" class="subhead">
            Партнеры
        </h2>

        <div class="logos">
            <img :src="`/partners/logo_0${logo}.jpg`" target="_blank" v-for="logo in 8" :key="logo" class="feature">
        </div>


    </div>
</template>

<style scoped>
.logos{
    display: flex;
    flex-wrap: wrap;
}

img{
    width: 100px;
    height: auto;
    object-fit: contain;
    max-width: 100%;
    border: 0;
    background: white;
    margin: 10px;
    aspect-ratio: 1/1;
    /* mix-blend-mode: multiply; */
}


</style>