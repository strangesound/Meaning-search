<script setup>
import docs from '~/assets/static/docs.json';
const showModalSertificate = useState('showModalSertificate', () => false)

</script>



<template>
    <div class="container samples-container">
        <h2 id="works" class="subhead">
            ДОКУМЕНТАЦИЯ Минч ИИ
        </h2>

        <div class="features">
            <a href="https://disk.yandex.ru/" target="_blank" v-for="feature in docs" :key="feature.feature" class="feature">
                <span v-html="feature.feature"></span>
            </a>
        </div>


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

.sertificate:hover {
    opacity: .8;
}
</style>