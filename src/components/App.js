import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Story from "./Story";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

export default function App() {
  return (
    <main>
      <Intro />
      <Projects />
      <Skills />
      <Story />
      <Contact />
      <div className="social-media is-hidden-mobile">
      
        <p className="stickyicons">
          <a
            href="https://github.com/savantrada"
            aria-label="Link to Github profile"
          >
            <i className="fab fa-github has-text-black" />
            <span className="hover-content has-text-black">
                Github
            </span>
          </a>
        </p>

        <p className="stickyicons">
          <a
            href="https://www.linkedin.com/in/savantrada/"
            aria-label="Link to Linkedin profile"
          >
            <i className="fab fa-linkedin has-text-link" />
            <span className="hover-content has-text-link">
                Linked In
            </span>
          </a>
        </p>

        <p className="stickyicons">
          <a
            href="mailto:savan@savantrada.com"
            aria-label="Link to Linkedin profile"
          >
            <i className="fa fa-envelope has-text-info" />
            <span className="hover-content has-text-info">
                Mail
            </span>
          </a>
        </p>
      </div>
    </main>
  );
}
