<template>
    <div id = 'page' :data-fitscreen = fitScreen>
    <h1 class="container culture-media"><router-link to = '/'>CULTUREMEDIA©</router-link></h1>
    <router-view/>

    <footer class="container">
        <nav>
            <router-link :to = '{name: "Artists"}'>Artist List</router-link>
            <router-link :to = '{name: "About"}'>About</router-link>
            <router-link :to = '{name: "About"}'>NFTs</router-link>
        </nav>
        <p class="the-well">TheWell©</p>
    </footer>
</div>
</template>

<script>
export default {
    computed: {
        fitScreen() {
            let route = this.$route.name;

            if(route === 'Artists')
                return true;
            else return false;
        }
    }
}
</script>

<style src = '@/assets/styles/buttons.css'></style>
<style src = '@/assets/styles/links.css'></style>
<style src = '@/assets/styles/main.css'></style>
<style>
div#page[data-fitscreen=true] {
    height: 100vh;
}
div#page {
    display: flex;
    flex-direction: column;
}
</style>
