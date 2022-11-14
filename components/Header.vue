<script setup>
import navItem from '~/assets/static/nav.json';

// const menuOpen = ref(false);
const menuOpen = useState('menuOpen', () => false)



// const menuOpen = () => useState(false)

// console.log(menuOpen);

</script>

<template>
    <div class="container">
        <div class="header" id="top">
            <NuxtLink :to="{ path: '/', hash: '#top' }" class="logo">
                <div class="logo-balls"></div>
                <p class="">meaningsearch</p>
            </NuxtLink>
            <div class="nav-container-burger">
                <ul class="nav-container">
                    <li class="nav-item" v-for="nav in navItem">
                        <NuxtLink :to="{ path: '/', hash: nav.path }">{{ nav.name }}</NuxtLink>
                    </li>
                </ul>
                <div class="burger-btn" @click="menuOpen = !menuOpen" :class="[menuOpen ? 'burger-btn-opened' : '']">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="nav-container-mob" :class="[menuOpen ? 'open' : '']">

                <ul class="">
                    <li class="mob-nav-item" v-for="nav in navItem">
                        <NuxtLink @click="menuOpen = !menuOpen" :to="{ path: '/', hash: nav.path }">{{ nav.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    margin: 32px 0;
    z-index: 9999;
}

.logo {
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: opacity .3s;
}

.logo:hover {
    opacity: .8;
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

@media (max-width: 768px) {
    .nav-container {
        display: none;
    }
}

.nav-item {
    white-space: nowrap;
    cursor: pointer;
}

.nav-container-burger {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}

.burger-btn {
    /* margin: 20px auto; */
    width: 20px;
    height: 14px;
    cursor: pointer;
    position: relative;
    z-index: 1000;
}

@media (min-width: 769px) {
    .burger-btn {
        display: none;
    }
}

/* burger */
.burger-btn span {
    background-color: var(--main-light-color);
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.3s ease;
}

.burger-btn span:first-child {
    top: 0;
}

.burger-btn span:nth-child(2) {
    top: 6px;
}

.burger-btn span:last-child {
    top: 12px;
}


.burger-btn.burger-btn-opened span:nth-child(2) {
    opacity: 0;
}

.burger-btn.burger-btn-opened span:first-child,
.burger-btn.burger-btn-opened span:last-child {
    top: 6px;
    background-color: var(--main-green-color);
}

.burger-btn.burger-btn-opened span:first-child {
    transform: rotate(45deg);
}

.burger-btn.burger-btn-opened span:last-child {
    transform: rotate(-45deg);
}


.nav-container-mob {
    background-color: var(--main-blue-color);
    /* width: 100vw;
    height: 100vh; */
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    transition: transform 1s;
    transform: translateX(105%);
    padding: 20vmin 10vmin;
    /* overflow-x: hidden; */
    pointer-events: none;
    /* visibility: hidden; */
    display: flex;
    flex-direction: column;

}

.open {
    transition: all 1s;
    transform: translateX(0);
    pointer-events: all;
    visibility: initial;
    overflow: hidden;

}

.mob-nav-item {
    font-size: 10vw;
    margin-bottom: 5vmin;
    color: var(--main-light-color);
}
</style>