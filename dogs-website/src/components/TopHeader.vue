<template>
    <section class="header-top">
        <a href="#" class="header__logo">
            Cozy House <br>
            <span>Shelter for pets in Boston</span>
        </a>
        <nav class="header__menu menu">
            <ul class="menu__inner">
                <li class="menu__item">About the shelter</li>
                <li class="menu__item">
                    <router-link to="/pets">Our pets</router-link>
                </li>
                <li class="menu__item">To help the shelter</li>
                <li class="menu__item">Contact</li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
}
.menu__inner {
    display: flex;
}
.menu__item {
    list-style: none;
    margin-right: 35px;
    padding: 8px;
    border-bottom: 0.125rem solid transparent;
    cursor: pointer;
    color: var(--white)
}
.menu__item:last-child {
    margin-right: 0;
}
.menu__item:hover {
    border-bottom: 0.125rem solid var(--highlight);
}
.header__logo {
    font-size: 2em;
    color: var(--highlight);
    text-align: center;
}
.header__logo span {
    font-size: 0.4em;
    font-family: 'Arial', sans-serif;
    color: var(--white);
}
</style>
