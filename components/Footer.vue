<script setup>
// import howItWorks from '~/assets/static/howItWorks.json';

</script>



<template>
    <div id="contacts" class="container samples-container">
        <h2 class="subhead">
            Контакты
        </h2>

        <p class="">119234, Москва, тер. Ленинские горы, д. 1, стр. 77 </p>
        <br>        <br>

        <div class="contacts_container">
            <NuxtLink class="button" href="https://t.me/+79162625460" target="_blank">Telegram</NuxtLink>
            <NuxtLink class="button" href="mailto:info@meanch.com" target="_blank">E-mail</NuxtLink>
        </div>
        <br>
        <p class="">© ООО «Минч ИИ», 2023</p>

        <br>
        <br>


    </div>
</template>

<style scoped>
.contacts_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* flex-direction: column; */
    gap: 16px;
    margin-bottom: 32px;
}
</style>