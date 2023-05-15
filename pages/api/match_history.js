export default async function handler(req, res) {
    const { summoner_name } = req.query;

    try {
        const response = await fetch(
            `http://127.0.0.1:5000/match_history/${encodeURIComponent(summoner_name)}`
        );
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json({ error: data.error });
        }
    } catch (error) {
        console.error('Error fetching match history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}