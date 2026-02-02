const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    try {
        // Asli game link jo proxy ke zariye chalega
        const gameUrl = "https://iframe.betgames.tv/ext/odr/test_iframe?game=7&partner=demo";
        const response = await axios.get(gameUrl, {
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        res.status(200).send(response.data);
    } catch (e) {
        res.status(500).send("Proxy Connect Nahi Ho Rahi: " + e.message);
    }
};
