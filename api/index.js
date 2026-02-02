const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    try {
        // Naya Alternate Link (Betgames ka dusra server)
        const gameUrl = "https://tpp.betgames.tv/ext/odr/test_iframe?game=7&partner=demo";
        
        const response = await axios.get(gameUrl, {
            timeout: 10000, // 10 second ka wait
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
            }
        });
        
        res.status(200).send(response.data);
    } catch (e) {
        // Agar ye bhi na chale toh humein error ka sahi pata chalega
        res.status(500).send("Server Busy. Please Refresh Screen.");
    }
};
