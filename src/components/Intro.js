import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Intro.css";

export default function Intro() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  
  return (
    <section className="hero intro is-fullheight">
    
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
            <div className="navbar-end ">
              <Link className="navbar-item has-text-danger" to="projects" smooth={true}>
                Projects
              </Link>
              <Link className="navbar-item has-text-danger" to="skills" smooth={true}>
                Skills
              </Link>
              <Link className="navbar-item has-text-danger" to="story" smooth={true}>
                My Story
              </Link>
              <Link className="navbar-item has-text-danger" to="contact" smooth={true}>
                Contact
              </Link>
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
          <h2 className="title has-text-danger">Hey,</h2>
          <h2 className="subtitle has-text-dark anim">
            I'm SAVAN TRADA, Web Developer and UI Enthusiast based in ontario and I'm a person totally obsessive about making things look good.
            Crafting smooth and immersive experiences through code are my thing and I always seek to perfect myself in this field.
            That was an Ice Breaker! Cool, You are still reading. I can tell you
            more about me then. <br />
            I'm a mix of{" "} 
            <span className="tooltip has-text-danger">ENTJ<span className="tooltiptext">Extraversion Intuition Thinking Judgment</span></span>{" "} 
            & <span className="tooltip has-text-danger">ISFP<span className="tooltiptext">Introversion Sensing Feeling Perception</span></span>{" "}
            ,loves watching sci-fi movies, playing cricket,chess and ... I forgot.<br/>
            Did you just ask me about my passion? I can define it in two words,
            <b>"Web Development"</b>. <br />
            Still curious, check out{" "}
            <Link to="story" smooth={true} className="has-text-light">
              My Story
            </Link>{" "}
            or check out{" "}
            <a className="has-text-light" href={process.env.PUBLIC_URL+ "./documents/Savankumar_Trada_Resume.pdf"}>Resume</a> to know more.</h2>                
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
      <svg id="introclouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"></path>
</svg>   
    </section>
  );
}
