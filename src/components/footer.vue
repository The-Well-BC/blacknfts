<template>
    <footer>
        <div class="container">
            <nav>
                <router-link :to = '{name: "Artists"}'>Artist List</router-link>
                <router-link :to = '{name: "About"}'>About</router-link>
                <router-link :to = '{name: "Home"}'>NFTs</router-link>
            </nav>
            <a target = '_blank' href = 'https://ownthewell.com' class="the-well">TheWell©</a>
        </div>
    </footer>
</template>

<style scoped src = '@/assets/styles/footer.css'></style>
