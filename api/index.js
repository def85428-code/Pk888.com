const axios = require('axios');

module.exports = async (req, res) => {
    // Ye headers browser ko game dikhane mein madad karenge
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    try {
        <iframe src="https://pk888-com.vercel.app/api" 
        style="width:100%; height:100vh; border:none;"
        allow="autoplay; fullscreen"
        referrerpolicy="no-referrer">
</iframe>
;
        const response = await axios.get(gameUrl, {
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        
        // Agar response mil jaye toh bhej do
        res.status(200).send(response.data);
    } catch (e) {
        // Agar error aaye toh screen par dikhao taake pata chale kya masla hai
        res.status(500).send("Proxy Connect Nahi Ho Rahi: " + e.message);
    }
};
