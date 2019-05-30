import React from "react";
import "./Skills.css";
import Carousel from "./Carousel";
import { languages, databases, frameworks, others } from "./SkillsHelper";

export default function Skills() {
  return (
    <section className="hero skills is-fullheight" id="skills">
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
                      <td>Staitic and dynamic analysis of malwares and forensics analysis</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user-shield" />
                      </td>
                      <td>OWASPS and a11y complience</td>
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
