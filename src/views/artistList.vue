<template>
<div class = 'list'>
    <div :class = '{hasBio: item.bio || item.links, noBio: !(item.bio && item.links)  }' v-for = '(item, index) in artists' :key = 'index' @click = 'updateVisibleBios(index)'>
        <p class="container name"><span v-if = 'showArtistBios.includes(index)'>↓</span><span v-else>→</span> {{ item.name }}
            <a v-if = 'item.twitterProfile' target = '_blank' :href = 'item.twitterProfile'>twitter ↗</a>
        </p>

        <div v-if = '(item.bio || item.links) && showArtistBios.includes(index)' class = 'extra'>
            <div class = 'container'>
                <img :src = 'item.avatar' />
                <div>
                    <p class = 'title'>Bio</p>
                    <p v-html = 'highlightHashtags(item.bio)'></p>
                </div>

                <div v-if = 'item.links'>
                    <p class = 'title'>NFT Links</p>
                    <p v-for = '(url, name, index) in item.links' :key = 'index'><a :href = 'url' target = '_blank'>{{ name }}</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default { 
    data() {
        return {
            artists: [ ],
            showArtistBios: []
        }
    }, 
    methods: {
        highlightHashtags: function(text) {
            console.log('TEXT', text);
            return text.replace(/(#\w+)/g, '<span class = "highlight">$1</span>');
        },
        updateVisibleBios: function(artistNo) {
            let i = this.showArtistBios.indexOf(artistNo)

            if(i > -1)
                this.showArtistBios.splice(i, 1)
            else
                this.showArtistBios.push(artistNo);

            return true;
        },
        fetchArtists: function() {
            return fetch('./artistCSVs/artistProfiles.csv')
            .then(res => {
                return res.text()
            }).then(csvs => {
                let artists = window.$.csv.toObjects(csvs);

                this.artists = artists.map(i => {
                    let twitterProfile;
                    let twitter = i.Twitter;
                    let bio = i.Bio;
                    let links = {};
                    let linkText = i.Links;

                    let raribleRegex = /rarible\s?\((.+?)\)/i;
                    let srRegex = /super\s?rare\s?\((.+?)\)/i;
                    let zoraRegex = /zora\s?\((.+?)\)/i;
                    let foundationRegex = /foundation\s?\((.+?)\)/i;

                    if(raribleRegex.test(linkText))
                        links['Rarible'] = linkText.match(raribleRegex)[1];
                    if(srRegex.test(linkText))
                        links['SuperRare'] = linkText.match(srRegex)[1];
                    if(zoraRegex.test(linkText))
                        links['Zora'] = linkText.match(zoraRegex)[1];
                    if(foundationRegex.test(linkText))
                        links['Foundation'] = linkText.match(foundationRegex)[1];

                    if( /^https:\/\/(www\.|m\.)?twitter\.com/i.test(twitter))
                        twitterProfile = twitter;
                    if( /^twitter\.com/i.test(twitter))
                        twitterProfile = 'https://' + twitter;
                    else if (/^@\w+/.test(twitter)) {
                        twitterProfile = 'https://twitter.com/' + twitter.replace(/^@/, '');
                    }

                    return {
                        name: i['Artist Name'],
                        ...bio && { bio },
                        ...(Object.keys(links).length > 0) && {links},
                        twitterProfile
                    }
                });
            });
        }
    },
    mounted() {
        return this.fetchArtists();
    }
}
</script>

<style scoped src = '@/assets/styles/artistList.css'></style>
<style scoped src = '@/assets/styles/artistList-responsive.css'></style>
