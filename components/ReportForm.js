import React, { useState } from "react";
import styles from "@components/FeedbackForm.module.css";

const ReportForm = ({ matchId, playerName }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Submit form data to Netlify form backend

        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <p>Thank you for your report!</p>;
    }

    return (
        <form
            className={styles.form}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="report-form"
            method="POST"
            action="/success"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="report-form" />
            <p className={styles.hidden}>
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
                <label><input type="hidden" name="matchId" id="matchId" value={matchId} /></label>
                <label><input type="hidden" name="playerName" id="playerName" value={playerName} /></label>
            </p>

            <p>
                <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
                <label>Rating: <select name="role[]" multiple>
                    <option value="leader">Bad Player</option>
                    <option value="leader">Good Player</option>
                </select></label>
            </p>
            <label htmlFor="teamwork">
                Teamwork:</label>
                <input type="number" id="teamwork" name="teamwork" min="0" max="5"></input>
            <label>Additional Comments: <input type="text" id="comments" name="comments"/></label>

            <button type="submit">Submit Report</button>
        </form>
    );
};

export default ReportForm;
