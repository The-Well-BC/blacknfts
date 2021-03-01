<template>
<div class = 'container'>
    <p class = 'rideForYou' id = 'big'>When platforms don’t ride for you, the culture creates one for themselves → </p>

    <div id = 'flex'>
        <div>
            <p>Consider Supporting:</p>

            <p class = 'support' v-for = '(item, index) in support' :key = 'index'>→ <a :href = 'item.url'>{{ item.name }}</a></p>
        </div>

        <div>
            <p>We celebrate black history all day everyday. If platforms don’t highlight us, then the culture makes a platform. Discover black crypto creatives, share their works, collect them and be part of their ever growing legend.</p>

            <p>This is CULTUREMEDIA.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() { 
        return {
            support: [{
                name: 'MintFund',
                url: 'https://mint.af'
            }, {
                name: 'One/OFF',
                url: 'https://xx1off.art'
            }, {
                name: 'Buying Black Art'
            }]
        }
    }
}
</script>

<style scoped src = '@/assets/styles/about.css'></style>
<style scoped src = '@/assets/styles/about-responsive.css'></style>
