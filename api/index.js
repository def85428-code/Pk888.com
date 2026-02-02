const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    // Betgames ka stable demo link
    const targetUrl = "https://demo.betgames.tv/ext/odr/test_iframe?game=7&partner=demo";

    try {
        const response = await axios.get(targetUrl, {
            headers: { 
                'Referer': 'https://betgames.tv/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            timeout: 5000
        });
        
        // Game ka pura HTML code bhej rahe hain
        res.status(200).send(response.data);
    } catch (e) {
        // Agar Betgames block kare, toh hum backup text dikhayenge
        res.status(200).send(`
            <div style="color:gold; text-align:center; padding-top:50px; background:#000; height:100vh;">
                <h3>Game is Loading...</h3>
                <p>Please wait 5 seconds and refresh.</p>
                <script>setTimeout(() => { location.reload(); }, 5000);</script>
            </div>
        `);
    }
};
