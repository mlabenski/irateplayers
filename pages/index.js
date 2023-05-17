import Head from "next/head";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
//import CurrentGame from "@components/CurrentGame";
import MatchHistory from "@components/MatchHistory";
import { useState } from "react";
export default function Home() {
    const [showMatchHistory, setShowMatchHistory] = useState(false);
    const [summonerName, setSummonerName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [finalSummonerName, setFinalSummonerName] = useState('');
    const handleSummonerNameChange = (event) => {
        setSummonerName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalSummonerName(summonerName);
        setShowMatchHistory(true);
        // Handle form submission, such as fetching the match history based on the summonerName
    };

    return (
        <div>
            <Head className="w-full">
                <title>i Rate Players</title>
                <meta name='description' content='Search league of legend summoners and rate their performances.' />
                <link rel='icon' href='/smaller-irate-logo-only-img.png' />
            </Head>
            <NavBar></NavBar>

            <main className="w-full">
                <hr />
                <div className="bg-dark-theme min-h-screen flex flex-col items-center">
                    <div className="w-full mx-auto px-4">
                        {finalSummonerName === '' && (
                            <form onSubmit={handleSubmit} className="flex justify-center mt-10">
                                <input
                                    type="text"
                                    value={summonerName}
                                    onChange={(e) => setSummonerName(e.target.value)}
                                    placeholder="Enter summoner name"
                                    className="flex-grow rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
                            </form>
                        )}
                    </div>
                    <div className="w-full flex justify-center items-start">
                        {showMatchHistory && <MatchHistory summonerName={finalSummonerName} />}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );

}
