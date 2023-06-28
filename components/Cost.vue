<script setup>
import howItWorks from '~/assets/static/howItWorks.json';
const showModalSertificate = useState('showModalSertificate', () => false)

</script>



<template>
    <div class="container samples-container">
        <h2 id="works" class="subhead">
            СТОИМОСТЬ Минч ИИ
        </h2>


        <div class="cost-features-wrapper">
            <div class="cost-features">
                <h4 class="cost-feautures-header">Базовый</h4>
                <p class="feature">
                    • On-Premise <br>
                    • Поиск по документам форматов: DOCX, RTF, XLSX, CSV, ODS, PPTX, ODT, TXT, XML, PDF (с текстовым слоем)
                    <br>
                    • Аналитика
                </p>
                <a class="button" href="mailto:info@meanch.com" >Запросить стоимость</a>

            </div>


            <div class="cost-features">
                <h4 class="cost-feautures-header">Enterprise</h4>
                <p class="feature">
                    • On-Premise <br>
                    • Поиск по документам форматов: DOCX, RTF, XLSX, CSV, ODS, PPTX, ODT, TXT, XML, PDF (с текстовым слоем)
                    <br>
                    • Поиск по сканированным документам <br>
                    • Поиск по конструкторской документации <br>
                    • Ролевая модель <br>
                    • Виртуальный ассистент а-ля «ChatGPT» <br>
                    • Аналитика
                </p>
                <a class="button" href="mailto:info@meanch.com" >Запросить стоимость</a>

            </div>
        </div>
    </div>
</template>

<style scoped>
.cost-features-wrapper {
    display: flex;
    flex-direction: row;
    gap: 3vw;
}

@media (max-width: 768px) {
    .cost-features-wrapper {
        flex-direction: column;

    }
}

.cost-feautures-header {
    font-size: max(18px, min(2vw, 25px));
    line-height: 120%;
    text-transform: uppercase;
    margin-bottom: 1vw;
}

.button{
    margin-top: 15px;
    display: inline-block;
}


</style>