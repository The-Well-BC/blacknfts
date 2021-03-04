<template>
    <div id = 'page' :data-fitscreen = fitScreen>
    <Header v-if = '$route.name != "Home"'></Header>

    <router-view/>

    <Footer v-if = '$route.name != "Home"'></Footer>
</div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
export default {
    components: { Header, Footer },
    computed: {
        showHeader() {
            let route = this.$route.name != 'Home';

            return this.$store.getters.showHeader || route;
        },
        showFooter() {
            return this.$store.getters.showFooter;
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
#app, #page {
    overflow: hidden;
}
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
