import { useState } from 'react';

const CurrentGame = () => {
    const [summonerName, setSummonerName] = useState('');
    const [currentGame, setCurrentGame] = useState(null);

    const fetchCurrentGame = async () => {
        try {
            const response = await fetch(`api/current_game/?summoner_name=${summonerName}`);
            const data = await response.json();
            setCurrentGame(data);
        } catch (error) {
            console.error('Error fetching current game:', error);
        }
    };

    const handleSummonerNameChange = (event) => {
        setSummonerName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchCurrentGame();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={summonerName}
                    onChange={handleSummonerNameChange}
                    placeholder="Enter summoner name"
                />
                <button type="submit">Search</button>
            </form>

            {currentGame ? (
                <div>
                    <h2>Current Game Information</h2>
                    <pre>{JSON.stringify(currentGame, null, 2)}</pre>
                </div>
            ) : null}
        </div>
    );
};

export default CurrentGame;
