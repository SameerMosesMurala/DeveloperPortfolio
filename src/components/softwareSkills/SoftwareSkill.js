import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <div className="logo">
              <li className="software-skill-inline" name={skills.skillName}>
                {/* <i title={skills.skillName} className={skills.fontAwesomeClassname}></i> */}
                <img alt="Sameer Work Information" id="logoimage" src={skills.url}></img>
                <span class="caption">{skills.skillName}</span>
              </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
