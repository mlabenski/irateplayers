import React from 'react';
import 'tailwindcss/tailwind.css'

export default function MatchDetails({ match, summonerName }) {
    const getMatchResultDetails = (match, summonerName) => {
        const participant = match.info.participants.find(
            (participant) => participant.summonerName === summonerName
        );
        console.log(participant);
        return {
            abilityUses: participant.challenges.abilityUses,
            skillshotsHit: participant.challenges.skillshotsHit,
            championLevel: participant.championLevel,
            // add other fields from challenges as needed
        };
    };

    if (!match) return null;

    const { abilityUses, skillshotsHit, championLevel } = getMatchResultDetails(match, summonerName);

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th className="px-4 py-2">Ability Uses</th>
                    <th className="px-4 py-2">Skillshots Hit</th>
                    <th className="px-4 py-2">Champion Level</th>
                    {/* add other fields from challenges as needed */}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="px-4 py-2">{abilityUses}</td>
                    <td className="px-4 py-2">{skillshotsHit}</td>
                    <td className="px-4 py-2">{championLevel}</td>
                    {/* add other fields from challenges as needed */}
                </tr>
                </tbody>
            </table>
        </div>
    );
};