export default async function handler(req, res) {
    const { summoner_name } = req.query;

    try {
        console.log('this ran atleast ')
        const response = await fetch(
            // Can we switch this endpoint depending on netlify dev vs the live environment?
            `/.netlify/functions/get-match-history/${summoner_name}/`
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