let randomNFT = function() {
    let rarible, superrare, foundation, zora;

    let promises = [
        fetch('../artistCSVs/artists-rarible.csv'),
        fetch('../artistCSVs/artists-superrare.csv'),
        fetch('../artistCSVs/artists-foundation.csv'),
        fetch('../artistCSVs/artists-zora.csv')
    ];

    return Promise.all(promises)
    .then(res => {
        let csvs = res.map(i => i.text());
        return Promise.all(csvs);
    }).then(csvs => {
        let [rarible, superrare, foundation, zora] = csvs.map(i => $.csv.toObjects(i));
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
        return tokens[randomIndex];
    });
}
