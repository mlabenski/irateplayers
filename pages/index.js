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
    <div>
      <Head>
          <title>i Rate Players</title>
          <meta name='description' content='Search league of legend summoners and rate their performances.' />
          <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
          <div className="container">
              <div className="bg-blue-500 h-10 w-10"></div>
        <Header title="Search to begin: Rate Players in LoL" />
        <hr />
              <div className={`${styles.container} bg-dark-theme`}>
                  <div className={`${styles.content} flex justify-center items-center h-screen`}>
              <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                      type="text"
                      value={summonerName}
                      onChange={(e) => setSummonerName(e.target.value)}
                      placeholder="Enter summoner name"
                      className={styles.input}
                  />
                  <button type="submit" className={styles.button}>Search</button>
              </form>

              {showMatchHistory && <MatchHistory summonerName={finalSummonerName} />}
                </div>
              </div>
        <FeedbackForm />
        <JokeBlock />
          </div>
      </main>
      <Footer />
    </div>
  );
}
