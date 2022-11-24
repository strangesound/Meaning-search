<script setup>
import howItWorks from '~/assets/static/howItWorks.json';

</script>



<template>
    <div id="contacts" class="container samples-container">
        <h2 class="subhead">
            Контакты
        </h2>

        <div class="contacts_container">
            <NuxtLink href="https://t.me/+79162625460" target="_blank">Telegram</NuxtLink>
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