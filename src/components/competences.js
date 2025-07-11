import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";

export function Competences() {
  const skills = [
    { nom: "HTML", logo: html },
    { nom: "CSS", logo: css },
    { nom: "JavaScript", logo: js },
    { nom: "React", logo: react },
    { nom: "Node.js", logo: node }
  ];

  return (
    <section className="competences">
      <h2>Mes compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.nom} />
            <p>{skill.nom}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
