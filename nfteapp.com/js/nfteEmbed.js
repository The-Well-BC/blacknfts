(() => {
    return randomNFT()
    .then(randomToken => {
        console.log('TOKEN ID', randomToken);
        let nfteURL = `https://nfte.app/api/embed.js?contract=${randomToken.contractAddr}&tokenId=` + randomToken.id;

        let nfteEmbed = document.createElement('script');

        nfteEmbed.src = nfteURL;
        document.getElementById('nft-embed').firstElementChild.insertAdjacentElement('afterend', nfteEmbed);
    });
})();
