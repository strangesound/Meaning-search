<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <div class="logo-balls"></div>
                <p class="">meaningsearch</p>
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
    margin: 32px 0;
}

.logo {
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.logo-balls {
    background-image: url('./assets/images/logo-balls.svg');
    width: 70px;
    height: 24px;
    margin-right: 10px;
    object-fit: scale-down;
}

.nav-container {
    display: flex;
    margin-left: auto;
    gap: 16px;
}

.nav-item {
    white-space: nowrap;
    cursor: pointer;
}

</style>