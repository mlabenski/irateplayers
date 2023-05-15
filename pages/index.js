import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
//import CurrentGame from "@components/CurrentGame";
import MatchHistory from "@components/MatchHistory";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
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
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
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

              {showMatchHistory && <MatchHistory summonerName={finalSummonerName} />}
          </div>
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
