import React, { useState } from "react";
import styles from "./FeedbackForm.module.css";

export default function ReportForm({ matchId, playerName }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Submit form data to Netlify form backend

        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <p>Thank you for your report !</p>;
    }

    return (
        <form
            className={styles.form}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="feedback"
            method="POST"
            action="/success"
        >
            <input type="hidden" name="form-name" value="feedback" />
            <p className={styles.hidden}>
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            <label htmlFor="matchId">Match Id</label>
            <input
                id="matchId"
                className={styles["form-field"]}
                type="number"
                name="text"
                value={matchId}
            />
            <label htmlFor="name">Player Name</label>
            <input
                id="name"
                className={styles["form-field"]}
                name="name"
                type="text"
                value={playerName}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                className={styles["form-field"]}
                type="email"
                name="email"
                required
            />
            <label htmlFor="feedback">What is your feedback?</label>
            <textarea
                id="feedback"
                className={styles["form-field"]}
                wrap="soft"
                name="feedback"
                required
            ></textarea>

            <button type="submit" className={styles.button} >Submit Report</button>
        </form>
    );
}
