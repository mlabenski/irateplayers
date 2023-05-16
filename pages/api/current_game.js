export default async function handler(req, res) {
    const { summoner_name } = req.query;

    try {
        const response = await fetch(
            `https://tranquil-oasis-93890.herokuapp.com/current_game/${encodeURIComponent(summoner_name)}`
        );
        const data = await response.json();
        console.log(`The Data submitted was ${data}`)
        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json({ error: data.error });
        }
    } catch (error) {
        console.error('Error fetching current game:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
