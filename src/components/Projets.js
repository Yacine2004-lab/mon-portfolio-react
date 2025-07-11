import React from "react";

export function Projets() {
  const projets = [
    {
      titre: "Portfolio React",
      description: "Site personnel avec React, animations CSS et publication GitHub Pages.",
      lienSite: "https://yacine2004-lab.github.io/portfolio/",
      lienCode: "https://github.com/yacine2004-lab/portfolio",
      couleur: "#81c784"
    },
    {
      titre: "ToDo List",
      description: "App React simple avec gestion des tâches dynamiques.",
      lienSite: "#",
      lienCode: "#",
      couleur: "#64b5f6"
    },
    {
      titre: "Portfolio HTML/CSS",
      description: "Version statique de mon portfolio avec formulaire de contact.",
      lienSite: "#",
      lienCode: "#",
      couleur: "#ffb74d"
    },
    {
      titre: "Gestion bancaire Java",
      description: "Swing + fichiers texte pour clients, comptes, prêts, alertes email.",
      lienSite: "#",
      lienCode: "#",
      couleur: "#9575cd"
    },
    {
      titre: "Gestion état civil - Mairie",
      description: "Base de données complète (SQL) pour une mairie (projet SGBDR).",
      lienSite: "#",
      lienCode: "#",
      couleur: "#4db6ac"
    },
    {
      titre: "Analyse Réseau Wireshark",
      description: "Capture et analyse du trafic réseau avec rapport détaillé.",
      lienSite: "#",
      lienCode: "#",
      couleur: "#f06292"
    },
    {
      titre: "Pizzeria - JavaScript Modules",
      description: "TP JavaScript découpé en modules ES6 (menus, commandes, etc.).",
      lienSite: "#",
      lienCode: "#",
      couleur: "#7986cb"
    },
    {
      titre: "API Agence Immobilière - NestJS",
      description: "Back-end RESTful sécurisé avec gestion des rôles et JWT.",
      lienSite: "#",
      lienCode: "#",
      couleur: "#ff8a65"
    }
  ];

  return (
    <section className="projets">
      <h2>Mes projets</h2>
      <div className="projets-container">
        {projets.map((projet, index) => (
          <div
            key={index}
            className="projet-item"
            style={{ backgroundColor: projet.couleur }}
          >
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="projet-links">
             
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
