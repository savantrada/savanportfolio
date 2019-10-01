import React from "react";
import "./Skills.css";
import Carousel from "./Carousel";
import { languages, databases, frameworks, others } from "./SkillsHelper";

export default function Skills() {

  return (
    <section className="hero skills is-fullheight" id="skills">
        <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
    <path d="M0 0 L50 50 L100 0 Z" />
</svg>
      <div className="hero-head">
        <p className="has-text-black">
          Legend(for the image caption): G(Good), C(Comfortable), F(Familiar)
        </p>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="has-text-black">Technologies I Know.</h1>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <h2>Languages</h2>
                <Carousel
                  fields={languages}
                  options={{ isAuto: true, time: 2000, columns: 4 }}
                />
              </div>
              <div className="tile is-child box">
                <h2>DB, Cache & Queue</h2>
                <Carousel fields={databases} options={{ columns: 4 }} />
              </div>
            </div>
            
            <div className="tile is-parent is-vertical">
              <div className="tile is-child box">
                <h2>Other Skills</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fas fa-laptop-code" />
                      </td>
                      <td>Prototyping and wireframing</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-users" />
                      </td>
                      <td>Teamwork and organizational skills</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-cogs" />
                      </td>
                      <td>Operating Systems</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-chart-line" />
                      </td>
                      <td>Data structure and Algorithm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user-shield" />
                      </td>
                      <td>Web Application Security</td>
                    </tr>
                    <tr>
                      <td>
                      <i className="fas fa-rocket"></i>
                      </td>
                      <td>Progressive web apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tile is-parent is-4 is-vertical">
              <div className="tile is-child box">
                <h2>Frameworks & Tools</h2>
                <Carousel
                  fields={frameworks}
                  options={{ isAuto: true, time: 2000, columns: 4 }}
                />
              </div>
              <div className="tile is-child box">
                <h2>Others</h2>
                <Carousel fields={others} options={{ columns: 4 }} />
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
