const axios = require('axios');

module.exports = async (req, res) => {
    // Ye allow karega ke aapki site is proxy se data le sake
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
        const url = "https://demo.betgames.tv/ext/odr/test_iframe?game=7";
        const response = await axios.get(url, {
            headers: { 'Referer': 'https://betgames.tv/' }
        });
        // Asli game ka content bhej raha hai
        res.status(200).send(response.data);
    } catch (e) {
        res.status(500).send("Proxy Error: Connection Failed");
    }
};

