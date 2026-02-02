const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    try {
        // Purana working link lekin correct parameters ke saath
        const gameUrl = "https://demo.betgames.tv/ext/odr/test_iframe?game=7";
        
        const response = await axios.get(gameUrl, {
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
            }
        });
        
        res.status(200).send(response.data);
    } catch (e) {
        // Agar ab bhi error aaye toh humein exact wajah pata chalegi
        res.status(500).send("Game Link Connection Error. Try refreshing in 10 seconds.");
    }
};
