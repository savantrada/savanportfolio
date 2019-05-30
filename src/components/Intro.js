import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Intro.css";
import Particlescanvas from './Particles';

export default function Intro() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  
  return (
    <section className="hero intro is-fullheight">
      <Particlescanvas/>
      <div className="hero-head">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              role="button"
              className={`navbar-burger ${active ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              href="/#"
              onClick={toggleActive}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${active ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="projects" smooth={true}>
                Projects
              </Link>
              <Link className="navbar-item" to="skills" smooth={true}>
                Skills
              </Link>
              <Link className="navbar-item" to="story" smooth={true}>
                My Story
              </Link>
              <Link className="navbar-item" to="contact" smooth={true}>
                Contact
              </Link>
              <a
                href="https://github.com/savantrada"
                className="navbar-item is-hidden-desktop"
                aria-hidden="true"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/savantrada/"
                className="navbar-item is-hidden-desktop"
                aria-hidden="true"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="icons">
            <i className="fas fa-utensils"/>
            <i className="fas fa-bed" />
            <i className="fas fa-laptop-code" />
            <i className="fas fa-redo-alt" />
          </div>
          <h2 className="title has-text-danger threeD">Hello,</h2>
          <h2 className="subtitle has-text-dark">
            I'm SAVAN TRADA, Web Developer and UI Enthusiast based in Cambridge, Canada.
            <br />
            That was an Ice Breaker! Cool, You are still reading. I can tell you
            more about me then. <br />
            I'm a mix of{" "} 
            <span className="tooltip has-text-warning">ENTJ<span className="tooltiptext">Extraversion Intuition Thinking Judgment</span></span>{" "} 
            and <span className="tooltip has-text-warning">ISFP<span className="tooltiptext">Introversion Sensing Feeling Perception</span></span>{" "}
            and hobbies include watching sci-fi movies, playing cricket and ... I
            forgot.<br/>
            Did you just ask me about my passion? I can define it in two words,
            <b>"Web Development"</b>. <br />
            Still curious, check out{" "}
            <Link to="story" smooth={true} className="has-text-success">
              My Story
            </Link>{" "}
            or check out{" "}
            <a className="has-text-success" href={process.env.PUBLIC_URL+ "./documents/Savankumar_Trada_Resume.pdf"}>Resume</a> to know more.</h2>                
          <div className="scroll">
            <Link to="projects" smooth={true}>
            <div className="downarrow">
                <span></span>
                <span></span>
                <span></span>
  
                  </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <p>
          I know everyone hates scrolling. But, you might find something
          interesting.
        </p>
      </div>
    </section>
  );
}
