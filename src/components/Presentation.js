import React from "react";

export function Presentation() {
  return (
    <section className="presentation fade-in">

      <img src="/images/ma-photo.jpg" alt="Yacine Sall" />
      <h2>À propos de moi</h2>
      <p>
        Actuellement étudiante en Licence 2 Génie Informatique, je suis passionnée par le développement web et les technologies émergentes.  
        Rigoureuse et méthodique, je m’efforce de concevoir des applications performantes, sécurisées et centrées sur l’expérience utilisateur.  
        Mon parcours académique m’a permis d’acquérir de solides compétences en React, JavaScript, HTML et CSS, que je mets en œuvre avec créativité et professionnalisme.  
        Ambitieuse et curieuse, je suis constamment à la recherche de nouvelles opportunités pour élargir mes connaissances et contribuer efficacement à des projets innovants.  
        Je souhaite intégrer un environnement stimulant où je pourrai continuer à apprendre, collaborer avec des experts et relever des défis techniques complexes.
      </p>
      {/* Bouton Télécharger CV */}
      <a href="/cv.pdf" download className="btn-cv">
        Télécharger mon CV
      </a>


    </section>
  );
}
