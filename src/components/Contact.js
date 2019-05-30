import React from "react";
import "./Contact.css";

export default function Contact() {
  
  return (
    <section className="hero is-small contact" id="contact">
      <div className="hero-body">
        <div className="container">
        <div className="bird-container bird-container--one">
		        <div className="bird bird--one"></div>
	      </div>
        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>
        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
          <h1 className="has-text-danger">Say Hi!	</h1>
          <div className="columns is-centered">
            <div className="column is-half has-text-black">
              <p>
                Thank you for visiting. I hope you liked my portfolio. If you
                have any suggestions or want to say "Hello", Send me your message at {" "}
                <a href="mailto:me@savantrada.com" className="has-text-danger">me@savantrada.com</a>.{" "}
              </p>
</div></div>

        </div>
      </div>
      <div className="hero-foot">
        <p className="is-centered has-text-black">
          Built with &#10084; and React <i className="fab fa-react" />, Bulma.{" "}
          <span className="contact-mobile is-hidden-desktop">
            <a href="https://linkedin.com/in/savantrada/" aria-label="linked in">
              <i className="fab fa-linkedin" />
            </a>{" "}
            <a href="https://github.com/savantrada" aria-label="github">
              <i className="fab fa-github" />
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}