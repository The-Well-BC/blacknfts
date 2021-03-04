<template>
<transition name = 'manifesto'>
    <div v-show = 'showHome == false' id = 'page2' ref = 'manifesto'>
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
            <p class = 'rideForYou'><span class = 'one'>When platforms don’t ride for you,</span> <span class = 'two'>the culture creates one for themselves<br /><span class = 'indicator arrow'>↓</span></span></p>

            <p class = 'rideForYou'>This is <span id = 'arrow1'>→</span><span id = 'arrow2'>↘</span></p>
        </div>
    </div>
</transition>

<Header ref = 'header' id = 'header' :class = '{scrollUp: showHome}'></Header>

<transition name = 'nft'>
    <div v-show = 'showHome === true' id = 'nft' class = 'partition'>
        <Header></Header>

        <div class="home container main switch">
            <div class = 'body-text'>
                <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform.</p>

                <p>This is<br>CULTUREMEDIA.</p>

                <div class = 'buttons'>
                    <button @click = 'loadNFT = true' class="show-me-culture">show me culture</button>
                </div>
            </div>

            <TokenEmbed :loadNFT = loadNFT></TokenEmbed>
        </div>
        <Footer></Footer>
    </div>
</transition>
</template>

<style scoped src = '@/assets/styles/home.css'></style>
<style scoped src = '@/assets/styles/home-responsive.css'></style>

<script>
import TokenEmbed from '@/components/nfteEmbed.vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'Home',
    watch: {
        loadNFT(newValue) {
            // console.log('OLD VALUE', oldValue);
            let self = this;

            if(newValue === true) {
                setTimeout(() => {
                    self.loadNFT = false;
                });
            }
        }
    },
    data() {
        return {
            showHome: false,
            loadNFT: false,
            touch: {
                initialY: null
            }
        }
    },
    methods: {
        handleScroll(event) {
            let init = this.showHome;

            let docHeight = document.getElementById('app').scrollHeight;

            let scrolledToBottom = (window.innerHeight + window.scrollY >= docHeight);
            let scrolledToTop = window.scrollY === 0;

            let dy = event.deltaY || ( this.touch.initialY - event.changedTouches[0].clientY );

            if(scrolledToBottom && dy > 10)
                this.showHome = true;
            else if(scrolledToTop && dy < -150)
                this.showHome = false;

            console.log('SHOW HOME:', this.showHome, '\nINITIAL VALUE:', init);

            if(this.showHome !== init) {
                window.scrollTo(0,0);
                console.log('WINDOW', window.scrollTo);
            }

            this.$store.state.showHeader = this.showHome;
            this.$store.state.showFooter = this.showHome;
        },

        handleTouchStart(event) {
            this.touch.initialY = event.changedTouches[0].clientY;
        }
    },
    unmounted() {
        document.removeEventListener('wheel', this.handleScroll, true);
        document.removeEventListener('touchstart', this.handleTouchStart, true);
        document.removeEventListener('touchend', this.handleScroll, true);
    },
    mounted() {
        let self = this;
        self.$store.state.showHeader = false;

        console.log('HEADER', this.$refs.header.$el);
        console.log('MAINFESTOR', this.$refs.manifesto);
        this.$refs.header.$el.style.top = this.$refs.manifesto.clientHeight + 'px';
        document.addEventListener('wheel', this.handleScroll, true);
        document.addEventListener('touchstart', this.handleTouchStart, true);
        document.addEventListener('touchend', this.handleScroll, true);
    },
    components: { TokenEmbed, Header, Footer }
}
</script>
