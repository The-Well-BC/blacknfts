<template>
<div id = 'app'>
    <h1 class="container culture-media">CULTUREMEDIA©</h1>
    <router-view/>

    <footer class="container">
        <nav>
            <router-link :to = '{name: "Artists"}'>Artist List</router-link>
            <a href="" class="about"> About</a>
            <a href="" class="NFTs"> NFTs</a>
        </nav>
        <p class="the-well">TheWell©</p>
    </footer>
</div>
</template>

<style src = '@/assets/styles/main.css'></style>
<style src = '@/assets/styles/buttons.css'></style>
<style>
div#app {
    display: flex;
    flex-direction: column;
}
</style>
