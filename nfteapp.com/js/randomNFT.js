let randomNFT = function() {
    return fetch('../artists-rarible.csv'
    ).then(res => {
        return res.text();
    }).then(csv => {
        let artists = $.csv.toObjects(csv);
        let tokenIDs = artists.map(a => a["TOKEN ID"]).filter(t => t != undefined && t != '');

        let randomIndex = Math.floor(Math.random() * tokenIDs.length);
        return tokenIDs[randomIndex];
    });
}
