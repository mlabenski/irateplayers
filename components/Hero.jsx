import React, { useState } from 'react';

const Hero = ({ onSearch }) => {
    const [summonerName, setSummonerName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(summonerName);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={summonerName}
                    onChange={(e) => setSummonerName(e.target.value)}
                    placeholder="Enter summoner name"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Hero;