export default async function handler(req, res) {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        res.status(400).json({ error: 'Missing "url" query parameter' });
        return;
    }

    try {
        const response = await fetch(targetUrl, { redirect: 'manual' });
        const location = response.headers.get('location');
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS
        res.json({ location });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}