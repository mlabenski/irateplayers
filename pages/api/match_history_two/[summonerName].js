// pages/api/current_game/[summonerName].js

export default async function handler(req, res) {
    const { summonerName } = req.query;

    try {
        // Call the Flask API to fetch the match history
        const response = await fetch(
            `http://127.0.0.1:5000/match_history/${encodeURIComponent(summonerName)}`
        );
        const matchHistory = await response.json();

        // Extract necessary data for match result calculation
        const matches = matchHistory; // Adjust this based on the actual structure of the match history response
        const latestMatch = matches[0]; // Assuming the latest match is the first element in the array
        const participant = latestMatch.info.participants.find(
            (participant) => participant.summonerName === summonerName
        );
        const team = latestMatch.info.teams.find((team) => team.teamId === participant.teamId);

        // Determine match result based on team win/loss
        const matchResult = team.win ? 'Won' : 'Lost';

        // Respond with the match result
        res.status(200).json({ matchResult });
    } catch (error) {
        console.error('Error fetching current game:', error);
        res.status(500).json({ error: 'Error fetching current game' });
    }
}