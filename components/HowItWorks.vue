<script setup>
import howItWorks from '~/assets/static/howItWorks.json';
const showModalSertificate = useState('showModalSertificate', () => false)

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

        <button @click="showModalSertificate = true" class="sertificate">
            <img src="../assets/images/sert-icon.png" width="100px" height="100px" alt="Иконка сертификата">
            Сертификат «Digital MedTech»
        </button>

        <div class="sertificate sertificate-reestr">
            <img src="../assets/images/sert-icon.png" width="100px" height="100px" alt="Иконка сертификата">
            РЕЕСТР российского ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ №19231 от 23.09.2023
        </div>



        <ModalSertificate v-show="showModalSertificate" @close-modal="showModalSertificate = false" />

    </div>
</template>

<style scoped>
.sertificate {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: var(--main-light-color);
    margin-top: 64px;
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 1s;
    text-align: left;


}

.sertificate-reestr{
    margin-top: 10px;
    padding: 6px;
}

.sertificate:hover {
    opacity: .8;
}
</style>