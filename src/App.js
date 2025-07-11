import React from "react";
import "./App.css";
import { Presentation } from "./components/Presentation";
import { Projets } from "./components/Projets";
import { Contact } from "./components/contact";
import { Competences } from "./components/competences";

function App() {
  return (
    <div className="App">
      <header>
      <h1 className="typewriter">Yacine Sall</h1>

  <nav>
    <a href="#presentation">Présentation</a>
    <a href="#projets">Projets</a>
    <a href="#competences">Compétences</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section id="presentation"><Presentation /></section>
  <section id="projets"><Projets /></section>
  <section id="competences"><Competences /></section>
  <section id="contact"><Contact /></section>
</main>

      <footer>
        <p>© 2025 Yacine Sall - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
