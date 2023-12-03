import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const outputHTML = (skills) => {
    console.log(skills)
    
    if (skills.skillName === "Dart") {
      return (
        <i className="icon-dart"></i>
      )
    }

    if (skills.skillName === "Spring Boot") {
      return (
        <i className="icon-springboot"></i>
      )
    }

    if (skills.skillName === "Flutter") {
      return (
        <i className="icon-flutter"></i>
      )
    }

    if (skills.skillName === "MongoDB") {
      return (
        <i className="icon-mongodb"></i>
      )
    }

    if (skills.skillName === "Firebase") {
      return (
        <i className="icon-firebase"></i>
      )
    }

    if (skills.skillName === "MySQL") {
      return (
        <i className="icon-mysql"></i>
      )
    }

    if (skills.skillName === "PostgreSQL") {
      return (
        <i className="icon-postgresql"></i>
      )
    }

    if (skills.skillName === "Katalon") {
      return (
        <i className="icon-katalon"></i>
      )
    }
    
    return (
      <i className={skills.fontAwesomeClassname}></i>
    )
 }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                { outputHTML(skills) }
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
