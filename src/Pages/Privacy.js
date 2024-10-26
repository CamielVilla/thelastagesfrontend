import React from "react";
import Page from "./Page/Page";

function Privacy(){
    return(
        <Page
            backgroundTitle="background-privacy"
            outer="outer-privacy"
            inner="inner-privacy"
        >
            <h2>Privacy Policy for The Last Ages Mobile App</h2>
            <h3>Last Updated: 10-26-24</h3>

            <h3>Information We Collect:</h3>
            <p>We do not collect personally identifiable information. The app only stores board game scores on the
                device and does not share them with third parties.</p>
            <h3>Use of Information:</h3>
            <p>The collected information is solely used to support the functionality of the app, with the sole purpose
                of keeping track of board game scores.</p>

            <h3>Sharing of Information:</h3>
            <p>No sharing of information occurs with third parties because no personal information is collected.</p>

            <h3>Data Retention:</h3>
            <p>All board game scores are stored locally on the device and remain there until the app is deleted.</p>

            <h3>Security:</h3>
            <p>We take reasonable measures to protect the information in the app from unauthorized access or
                disclosure.</p>

            <h3>Changes to Privacy Policy:</h3>
            <p>This privacy policy may be updated from time to time. Any changes will be published on this page.</p>

            <h3>Contact:</h3>
            <p>If you have any questions about this privacy policy, please contact us via thelastagesgame@gmail.com</p>
        </Page>
    )
}

export default Privacy;