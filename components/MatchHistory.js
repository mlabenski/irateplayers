import { useState, useEffect } from "react";
import ReportForm from "./ReportForm";

const Modal = ({ show, onClose, children }) => {
    // ... modal logic here ...
};

export default function MatchHistory({ summonerName }) {
    const [matches, setMatches] = useState([]);
    let [selectedMatchId, setSelectedMatchId] = useState(null);
    useEffect(() => {
        if (summonerName) {
            fetchMatchHistory();
        }
    }, [summonerName]);



    const fetchMatchHistory = async () => {
        try {
            // Run a test or two here ?
            const response = await fetch(`/api/match_history?summoner_name=${summonerName}`);
            const data = await response.json();
            setMatches(data);
        } catch (error) {
            console.error('Error fetching match history:', error);
        }
    };
    const handleReport = (gameId) => {
        // Implement the report feature logic here
        setSelectedMatchId(gameId);
        console.log(`Reporting match with ID: ${gameId}`);
    };

    const handleCloseModal = () => {
        onSelectedMatchId(null);
    }

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
                    <th className="px-4 py-2">Match ID</th>
                    <th className="px-4 py-2">Champion</th>
                    <th className="px-4 py-2">Result</th>
                    <th className="px-4 py-2">K</th>
                    <th className="px-4 py-2">D</th>
                    <th className="px-4 py-2">A</th>
                </tr>
                </thead>
                <tbody>
                {matches.map((match) => {
                    const { win, champion, kills, deaths, assists } = getMatchResult(match);

                    return (
                        <tr key={match.info.gameId} className="table-row cursor-pointer hover:bg-red-500"
                            onClick={() => handleReport(match.info.gameId)} >
                            <td className="px-4 py-2">{match.info.gameId}</td>
                            <td className="px-4 py-2">{champion}</td>
                            <td className="px-4 py-2">{win}</td>
                            <td className="px-4 py-2">{kills}</td>
                            <td className="px-4 py-2">{deaths}</td>
                            <td className="px-4 py-2">{assists}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {selectedMatchId && (
                <div className="mt-30">
                    <ReportForm matchId={selectedMatchId} playerName={summonerName} />
                </div>
            )}
        </div>
    );
}