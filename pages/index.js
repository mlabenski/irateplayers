import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
//import CurrentGame from "@components/CurrentGame";
import MatchHistory from "@components/MatchHistory";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import { useState } from "react";
import styles from './Home.module.css';
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
        setShowMatchHistory(true);;
        // Handle form submission, such as fetching the match history based on the summonerName
    };

    return (
        <div className="container">
      <Head>
          <title>i Rate Players</title>
          <meta name='description' content='Search league of legend summoners and rate their performances.' />
          <link rel='icon' href='/smaller-irate-logo-only-img.png' />
      </Head>

      <main>
        <hr />
          <div className="bg-dark-theme h-screen flex justify-center items-center">
              <div className="w-full max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex mx-auto mt-[22%] px-3">
                  <input
                      type="text"
                      value={summonerName}
                      onChange={(e) => setSummonerName(e.target.value)}
                      placeholder="Enter summoner name"
                      className="flex-grow rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
              </form>

              {showMatchHistory && <MatchHistory summonerName={finalSummonerName} />}
                </div>
              </div>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
