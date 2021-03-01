<template>
<div class = 'list'>
    <div v-for = '(item, index) in artists' :key = 'index'>
        <p class="container"> → {{ item.name }}
            <a v-if = 'item.twitterProfile' target = '_blank' :href = 'item.twitterProfile'>twitter ↗</a>
        </p>
    </div>
</div>
</template>

<script>
export default { 
    data() {
        return {
            artists: [ ]
        }
    }, 
    methods: {
        fetchArtists: function() {
            return fetch('./artistCSVs/artistProfiles.csv')
            .then(res => {
                return res.text()
            }).then(csvs => {
                let artists = window.$.csv.toObjects(csvs);

                this.artists = artists.map(i => {
                    let twitterProfile;
                    let twitter = i.Twitter;

                    if( /^https:\/\/(www\.|m\.)?twitter\.com/i.test(twitter))
                        twitterProfile = twitter;
                    if( /^twitter\.com/i.test(twitter))
                        twitterProfile = 'https://' + twitter;
                    else if (/^@\w+/.test(twitter)) {
                        twitterProfile = 'https://twitter.com/' + twitter.replace(/^@/, '');
                    }

                    return {
                        name: i['Artist Name'],
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
