<template>
<transition name = 'manifesto'>
    <div v-show = 'showContent.includes("manifesto")' id = 'page2' ref = 'manifesto'>
        <div class = 'header' ref = 'manifestoHeader'>
            <div id = 'allYear'>
                <p>Black Artists.</p>
                <p>All Year. Every Year.</p>
            </div>

            <div id = 'buyBlack'>
                <p>Don’t Be Wack.</p>
                <p>#BUYBLACK</p>
            </div>
        </div>
        <div class = 'home container' ref = 'manifestoContent'>
            <transition name = 'when'>
                <div v-show = 'showContent.includes("when")'>
                    <p class = 'rideForYou' ><span class = 'one'>When platforms don’t ride for you,</span> <span class = 'two'>the culture creates one for themselves<br /></span></p>
                    <p :class = '{indicator: !showContent.includes("thisis")}' class = 'rideForYou arrow-center'>↓</p>
                </div>
            </transition>

            <transition name = 'thisis'>
                <p id = 'thisis' :class = '{hide: !showContent.includes("thisis")}' class = 'rideForYou'>This is <span id = 'arrow1' class = 'arrow'>→</span><span class = 'arrow one' id = 'arrow2'>↘</span></p>
            </transition>
        </div>
    </div>
</transition>

<transition name = 'header'>
    <Header ref = 'header' id = 'header' v-show = 'showContent.includes("header")' :class = '{scrollUp: showContent.includes("nft")}'></Header>
</transition>

<transition name = 'nft'>
    <div v-show = 'showContent.includes("nft")' id = 'nft' class = 'partition'>
        <Header></Header>

        <div class="home container main switch">
            <div class = 'body-text'>
                <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform.</p>

                <p>This is<br>CULTUREMEDIA.</p>

                <p class = 'subtitle'>Tap the "show me culture" button to load a new NFT</p>

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
            showContent: ['manifesto', 'when'],
            loadNFT: false,
            lastScrollEvent: null,
            touch: {
                initialY: null
            }
        }
    },
    methods: {
        handleScroll(event) {
            let now = new Date().getTime();
            if(!this.lastScrollEvent)
                this.lastScrollEvent = new Date().getTime();

            // let init = this.showContent;

            let docHeight = document.getElementById('app').scrollHeight;

            let scrolledToBottom = (window.innerHeight + window.scrollY >= docHeight);
            let scrolledToTop = window.scrollY === 0;

            let dy = event.deltaY || ( this.touch.initialY - event.changedTouches[0].clientY );

            // console.log('DIFFERENCE', now - this.lastScrollEvent);

            let timeDiff = now - this.lastScrollEvent;

            if(timeDiff > 250) {
                if(scrolledToBottom && dy > 5) {
                    if(!this.showContent.includes('thisis')) {
                        this.showContent = ['manifesto', 'thisis'];
                        console.log('MANIFESTO HEIGHT', this.$refs.manifesto.clientHeight);

                        if(!this.showContent.includes('header')) {
                            this.$refs.header.$el.style.top = parseInt(this.$refs.manifestoHeader.clientHeight + this.$refs.manifestoHeader.clientHeight) + 'px';
                            this.showContent.push('header');
                        }

                        this.lastScrollEvent = new Date().getTime();

                        let self = this;
                        setTimeout(function() {
                            self.showContent = ['nft', 'header', 'thisis'];
                        }, 2500);
                    }
                }
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

        document.addEventListener('wheel', this.handleScroll, true);
        document.addEventListener('touchstart', this.handleTouchStart, true);
        document.addEventListener('touchend', this.handleScroll, true);
    },
    components: { TokenEmbed, Header, Footer }
}
</script>

<style scoped src = '@/assets/styles/home.css'></style>
<style scoped src = '@/assets/styles/home-responsive.css'></style>
<style>
@keyframes fadein {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes arrow1 {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes arrow2 {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes bounce {
    50% { transform: translateY(10px); }
    100% { transform: translateY(30px); }
}
</style>
