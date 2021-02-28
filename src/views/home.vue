<template>
<transition name = 'switch'>
    <div v-show = 'showHome === true' class="home container main">
        <div class = 'body-text'>
            <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform.</p>

            <p>This is<br>CULTUREMEDIA.</p>
        </div>

        <TokenEmbed></TokenEmbed>
    </div>
</transition>

<transition name = 'switch'>
    <div v-show = 'showHome == false'>
        <div class = 'header'>
            <div id = 'allYear'>
                <p>Black Artists.</p>
                <p>All Year. Every Year.</p>
            </div>

            <div id = 'buyBlack'>
                <p>Don’t Be Wack.</p>
                <p>#BUYBLACK</p>
            </div>
        </div>
        <div class = 'home container'>
            <p class = 'rideForYou'>When platforms don’t ride for you, the culture creates one for themselves<br />↓</p>

            <p class = 'rideForYou'>  This is →↘</p>
            <p class = 'culturemedia'>CultureMedia©</p>
        </div>
    </div>
</transition>
</template>

<style scoped src = '@/assets/styles/home.css'></style>

<script>
import TokenEmbed from '@/components/nfteEmbed.vue';

export default {
    name: 'Home',
    data() {
        return {
            showHome: false
        }
    },
    methods: {
        handleScroll(event) {
            let docHeight = document.getElementById('app').scrollHeight;

            let scrolledToBottom = (window.innerHeight + window.scrollY === docHeight);
            let scrolledToTop = window.scrollY === 0;

            // console.log({ scrolledToBottom, scrolledToTop });

            if(scrolledToBottom && event.deltaY > 10)
                this.showHome = true;
            else if(scrolledToTop && event.deltaY < -150)
                this.showHome = false;

            this.$store.state.showHeader = this.showHome;
        }
    },
    unmounted() {
        document.removeEventListener('wheel', this.handleScroll, true);
    },
    mounted() {
        let self = this;
        self.$store.state.showHeader = false;

        document.addEventListener('wheel', this.handleScroll, true);
    },
    components: { TokenEmbed }
}
</script>
