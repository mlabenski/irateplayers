// functions/get-match-history.js
const axios = require('axios');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const summoner_name = event.path.split('/').pop();
    const api_key = 'RGAPI-64501d4c-b154-4f36-b7e8-9a830ded955d'; // Replace with your actual API key
    const region = 'na1'; // Replace with the desired region (e.g., 'na1' for North America)

    try {
        // Get summoner ID by summoner name
        const summoner_url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}`;
        const summoner_response = await axios.get(summoner_url, { params: { api_key: api_key }});

        const puuid = summoner_response.data.puuid;

        // Get match IDs by PUUID
        const match_ids_url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`;
        const match_ids_response = await axios.get(match_ids_url, { headers: { 'X-Riot-Token': api_key }});

        const match_ids = match_ids_response.data.slice(0, 5); // Retrieve the first 5 match IDs

        const detailed_matches = [];
        for (const match_id of match_ids) {
            // Get detailed match information by match ID
            const match_url = `https://americas.api.riotgames.com/lol/match/v5/matches/${match_id}`;
            const match_response = await axios.get(match_url, { headers: { 'X-Riot-Token': api_key }});

            detailed_matches.push(match_response.data);
        }

        return { statusCode: 200, body: JSON.stringify(detailed_matches) };

    } catch (error) {
        console.error('Error:', error);
        if (error.response && error.response.status === 404) {
            return { statusCode: 404, body: JSON.stringify({ error: 'Summoner not found.' }) };
        } else {
            return { statusCode: 500, body: JSON.stringify({ error: 'Failed to retrieve match history :(' }) };
        }
    }
};



