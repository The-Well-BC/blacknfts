<template>
    <div id = 'page' :data-fitscreen = fitScreen>
    <h1 v-if = 'showHeader' class="culture-media"><router-link to = '/'>CULTUREMEDIA©</router-link></h1>
    <router-view/>

    <footer>
        <div class="container">
            <nav>
                <router-link :to = '{name: "Artists"}'>Artist List</router-link>
                <router-link :to = '{name: "About"}'>About</router-link>
                <router-link :to = '{name: "Home"}'>NFTs</router-link>
            </nav>
            <a target = '_blank' href = 'https://ownthewell.com' class="the-well">TheWell©</a>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    computed: {
        showHeader() {
            let route = this.$route.name != 'Home';

            return this.$store.getters.showHeader || route;
        },
        fitScreen() {
            let route = this.$route.name;

            if(route === 'Artists')
                return true;
            else return false;
        }
    }
}
</script>

<style src = '@/assets/styles/fonts.css'></style>
<style src = '@/assets/styles/buttons.css'></style>
<style src = '@/assets/styles/links.css'></style>
<style src = '@/assets/styles/main.css'></style>

<style src = '@/assets/styles/main-responsive.css'></style>

<style>
div#page[data-fitscreen=true] {
    height: 100vh;
}
div#page > * {
    width: 100%;
}
div#page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}


</style>
