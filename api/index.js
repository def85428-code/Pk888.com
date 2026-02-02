const axios = require('axios');

module.exports = async (req, res) => {
    // Ye headers black screen khatam karne ke liye zaroori hain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    try {
        const url = "https://demo.betgames.tv/ext/odr/test_iframe?game=7";
        const response = await axios.get(url, {
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        // Seedha HTML bhej rahe hain
        res.status(200).send(response.data);
    } catch (e) {
        res.status(500).send("Proxy Error: " + e.message);
    }
};
