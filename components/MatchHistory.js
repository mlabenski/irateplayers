import { useState, useEffect } from "react";

export default function MatchHistory({ summonerName }) {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        if (summonerName) {
            fetchMatchHistory();
        }
    }, [summonerName]);

    const fetchMatchHistory = async () => {
        try {
            console.log(`Searching for the summoner name of: ${summonerName} `)
            const response = await fetch(`/api/match_history?summoner_name=${summonerName}`);
            const data = await response.json();
            setMatches(data);
        } catch (error) {
            console.error('Error fetching match history:', error);
        }
    };

    const getMatchResult = (match) => {
        const participant = match.info.participants.find(
            (participant) => participant.summonerName === summonerName
        );
        console.log(participant);
        return {
            win: participant.win === true ? 'True' : 'False',
            champion: participant.championName,
            kills: participant.kills,
            deaths: participant.deaths,
            assists: participant.assists,
        };
    };

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th>Match ID</th>
                    <th>Champion</th>
                    <th>Result</th>
                    <th>K</th>
                    <th>D</th>
                    <th>A</th>
                </tr>
                </thead>
                <tbody>
                {matches.map((match) => {
                    const { win, champion, kills, deaths, assists } = getMatchResult(match);

                    return (
                        <tr key={match.info.gameId}>
                            <td>{match.info.gameId}</td>
                            <td>{champion}</td>
                            <td>{win}</td>
                            <td>{kills}</td>
                            <td>{deaths}</td>
                            <td>{assists}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
