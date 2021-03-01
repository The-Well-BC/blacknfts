<template>
<div id = "nft-embed" ref = 'nft-embed'>
    <div></div>

    <div v-if = 'loading' class = 'loading'>
    </div>

    <div class = 'buttons'>
        <!--
        <button @click = 'placeEmbed' class="show-me-culture">show me culture</button>
        <button class="throw-some-heat">throw some heat</button>
        -->
    </div>
</div>
</template>

<script>
export default {
    props: ['loadNFT', 'eventBus'],
    data() {
        return {
            token: null,
            loading: true
        }
    },

    watch: {
        loadNFT: function(newValue) {
            console.log('NEW LOADnft VALUE', newValue);

            if(newValue === true)
                return this.placeEmbed();
        },
    },

    methods: {
        placeEmbed() {
            this.loading = true;
            if(this.token !== null) {
                let child = this.$refs['nft-embed'].firstElementChild;
                child.innerHTML = '';
            }

            this.token = null;

            return this.randomNFT()
            .then(randomToken => {
                let nfteURL = `https://nfte.app/api/embed.js?contract=${randomToken.contractAddr}&tokenId=` + randomToken.id;

                let nfteEmbed = document.createElement('script');

                nfteEmbed.src = nfteURL;
                let self = this;
                nfteEmbed.onload = function() {
                    self.loading = false;
                    console.log('LOADED NFT EMED');
                }

                this.$refs['nft-embed'].firstElementChild.insertAdjacentElement('afterend', nfteEmbed);
                // this.loading = false;
            });
        },
        randomNFT() {
            let promises = [
                fetch('./artistCSVs/artists-rarible.csv'),
                fetch('./artistCSVs/artists-superrare.csv'),
                fetch('./artistCSVs/artists-foundation.csv'),
                fetch('./artistCSVs/artists-zora.csv')
            ];

            return Promise.all(promises)
            .then(res => {
                let csvs = res.map(i => i.text());
                return Promise.all(csvs);
            }).then(csvs => {
                let [rarible, superrare, foundation, zora] = csvs.map(i => window.$.csv.toObjects(i));
                let tokens = [
                    rarible.map(a => { 
                        return { ...a, 
                            contractAddr: '0x60f80121c31a0d46b5279700f9df786054aa5ee5'
                        }
                    }),
                    superrare.map(a => { 
                        return { ...a, 
                            contractAddr: '0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0'
                        }
                    }),
                    foundation.map(a => { 
                        return { ...a, 
                            contractAddr: '0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405'
                        }
                    }),
                    zora.map(a => { 
                        return { ...a, 
                            contractAddr: '0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7'
                        }
                    }),
                ].flat();

                tokens = tokens.map(a => {
                    return {
                        contractAddr: a.contractAddr,
                        id: a["TOKEN ID"]
                    }
                }).filter(t => t.id != undefined && t.id != '');

                let randomIndex = Math.floor(Math.random() * tokens.length);
                this.token = tokens[randomIndex];
                return tokens[randomIndex];
            });
        }
    },

    mounted() {
        // this.eventBus.$on('loadNFT', this.placeEmbed);
        return this.placeEmbed();
    }
}
</script>

<style scoped src = '@/assets/styles/nfteEmbed.css'></style>
<style scoped src = '@/assets/styles/nfteEmbed-responsive.css'></style>
