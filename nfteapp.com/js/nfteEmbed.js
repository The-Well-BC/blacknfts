(() => {
    return randomNFT()
    .then(tokenID => {
        console.log('TOKEN ID', tokenID);
        let randomTokenId = tokenID;

        let nfteURL = "https://nfte.app/api/embed.js?contract=0x60f80121c31a0d46b5279700f9df786054aa5ee5&tokenId=" + randomTokenId;

        let nfteEmbed = document.createElement('script');

        nfteEmbed.src = nfteURL;
        document.getElementById('nft-embed').firstElementChild.insertAdjacentElement('afterend', nfteEmbed);
    });
})();
