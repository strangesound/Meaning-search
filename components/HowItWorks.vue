<script setup>
import howItWorks from '~/assets/static/howItWorks.json';

</script>



<template>
    <div class="container samples-container">
        <h2 id="works" class="subhead">
            Как работает Минч ИИ
        </h2>

        <div class="features">
            <p v-for="feature in howItWorks" :key="feature.feature" class="feature">
                <span v-html="feature.feature"></span>
            </p>
        </div>




       
    </div>
</template>

<style scoped>



</style>