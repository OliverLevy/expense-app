import React from "react";
import "./About.scss";

import email from "./email.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

export default function About() {
  return (
    <section className="about">
      <article>
        <h2>About the Expense Tracker</h2>
        <p>
          Hi, my name's Oli! If you like this app, and want to work with me /
          hire me, I'd love to hear from you.
        </p>
        <br />

        <p>
          I made <i>Expense Tracker</i> to experiment with React Hooks and
          Firebase.
          <br />
          To use the app, you must sign in with either Google or Facebook.
          <br />
          Once in the app, you can add your monthly income and expenses to track
          your monthly spending. That's it! <br />
          <br />
          *All your information is secure in firebase and will never be used for
          anything outside of this application.
        </p>
      </article>

      <div className="social-icon__container">
        <a href="mailto:oliver.levy.ol@gmail.com">
          <img src={email} alt="email icon" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/oli_levy/">
          <img src={instagram} alt="instagram icon" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/oliver-levy/">
          <img src={linkedin} alt="linkedin icon" className="social-icon" />
        </a>
      </div>
    </section>
  );
}
