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
        >
            <input type="hidden" name="form-name" value="report-form" />
            <p className={styles.hidden}>
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            <input type="hidden" name="matchId" value={matchId} />
            <input type="hidden" name="playerName" value={playerName} />

            {/* Add other form fields as needed */}
            <label htmlFor="teamwork">
                Teamwork:
                <input type="number" id="teamwork" name="teamwork" min="0" max="5"></input>
            </label>

            <label>
                Additional Comments:
                <textarea name="comments" required />
            </label>

            <button type="submit">Submit Report</button>
        </form>
    );
};

export default ReportForm;
