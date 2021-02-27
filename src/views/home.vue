<template>
<div class="home container main">
    <div class = 'body-text'>
        <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform.</p>

        <p>This is<br>CULTUREMEDIA.</p>
    </div>

    <TokenEmbed></TokenEmbed>
</div>
</template>

<style scoped src = '@/assets/styles/home.css'></style>

<script>
import TokenEmbed from '@/components/nfteEmbed.vue';

export default {
    name: 'Home',
    components: { TokenEmbed }
}
</script>
