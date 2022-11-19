<script setup>
import howItWorks from '~/assets/static/howItWorks.json';

</script>



<template>
    <div id="contacts" class="container samples-container">
        <h2 class="subhead">
            Контакты
        </h2>

        <div class="contacts_container">
            <a href="tel:+79999999999">+7 999 999-99-99</a>

            <a href="tel:+79999999999">Whatsapp</a>

            <a href="tel:+79999999999">Telegram</a>
        </div>



    </div>
</template>

<style scoped>
.contacts_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
}
</style>