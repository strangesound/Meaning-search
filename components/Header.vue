<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                meaningsearch
            </div>
            <ul class="nav-container">
                <li class="nav-item">команда</li>
                <li class="nav-item">для кого</li>
                <li class="nav-item">пример</li>
                <li class="nav-item">контакты</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
}

.logo {
    text-transform: uppercase;
}

.nav-container {
    display: flex;
    margin-left: auto;
    gap: 16px;
    /* z-index: 1; */

}

.nav-item {
    white-space: nowrap;
    cursor: pointer;
}

</style>