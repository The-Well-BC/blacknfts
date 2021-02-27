<template>
    <p v-if = 'showHome'>TEST</p>
<div v-if = 'showHome === true' class="home container main">
    <div class = 'body-text'>
        <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform.</p>

        <p>This is<br>CULTUREMEDIA.</p>
    </div>

    <TokenEmbed></TokenEmbed>
</div>

<div v-else>
    <div>
        <div>
            <p>Black Artists.</p>
            <p>All Year. Every Year.</p>
        </div>

        <div>
            <p>Don’t Be Wack.</p>
            <p>#BUYBLACK</p>
        </div>
    </div>
    <div class = 'home container main body-text'>
        <p>When platforms don’t ride for you, the culture creates one for themselves ↓ </p>

        <p>This is →↘</p>
        <p class = 'culturemedia'>CultureMedia</p>
    </div>
</div>
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
    mounted() {
        let scroll = this.showHome;

        document.addEventListener('wheel', function(event) {
            console.log('THIS SCROSSL', scroll);

            if(event.deltaY > 0)
                scroll = true;
            else scroll = false;
        }, true);
    },
    components: { TokenEmbed }
}
</script>
