const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors()); // Ye sab security blocks khol dega

app.get('/game', async (req, res) => {
    // Fortune Wheel ka asli server link
    const targetUrl = "https://demo.betgames.tv/ext/odr/test_iframe?game=7";
    
    try {
        const response = await axios.get(targetUrl, {
            headers: { 'Referer': 'https://betgames.tv/' }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Proxy Error: " + error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
