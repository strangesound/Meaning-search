<script setup>

</script>

<template>
    <div class="container">
        <div class="container3d" id="container"></div>

        <p class="quote">
            Meanch AI. Searching for the meaning<br>
            Минч ИИ – это поисковая система на основе глубоких нейронных сетей, преобразующая массив
            внутренней документации в активную среду знаний
        </p>
        <p class="quote">
            Поиск через поисковую строку<br>
            Семантический поисковик: выдача ответа на поисковый запрос в виде ссылки на документ и выделенным прямов нем наиболее совпадающим по смыслу абзацем
        </p>
        <p class="quote">
            Поиск через диалог с чат-ботом<br>
            Виртуальный консультант: генерация релевантного ответа в режиме диалога с чат-ботом без галлюцинаций. Основан на RAG-подходе
        </p>





    </div>
</template>

<style scoped>

.quote{
    margin: 5vw 0 0 0;
    font-size: max(18px, min(2.976vw, 40px));
    line-height: 120%;
    color: var(--main-green-color);

}

#container {
    /* width: 100vw;
    height: 100vh; */
    z-index: 999;
}
</style>