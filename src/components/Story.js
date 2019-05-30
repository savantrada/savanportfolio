import React from "react";
import "./Story.css";

export default function Story() {
  return (
    <section className="hero is-fullheight story" id="story">
      <div className="hero-head">
        <p>CAUTION: A lot of technical jargon ahead!</p>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1>My Story</h1>
          <div className="timeline is-centered">
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Begin{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2010</p>
                <p>
                  Saw a C program running first time. Struggled with the syntax.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}bachelor's degree{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2012</p>
                <p>
                  Followed my instincts and enrolled in computer Science.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Intermediate{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2013</p>
                <p>
                  First OOP experience. Got C++ simple certification by college professor.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Learning{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2014</p>
                <p>
                  Learned fundamentals of Computer Science.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}undergraduate{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2015-2016</p>
                <p>
                  Worked on live project with Indian space agency(BISAG).
                  This project happens to be Showcased at Techfest'16.<br/>
                  Became Software Engineer.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Web developer{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2017</p>
                <p>
                  Worked on Frontend developing. A lot of context
                  switching, optimizations, frameworks and tools.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Post Graduation{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2017-2018</p>
                <p>
                  Advanced computer application development. Worked with a client as capstone project.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Security{"/>"}</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2018-2019</p>
                <p>
                   Advanced computer application security. Learned many important things.
                   Spoke at Cyber Security Workshop. 
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">{"<"}Present{"/>"}</span>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
