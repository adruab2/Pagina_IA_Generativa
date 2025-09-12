import React from "react";
import Formulario from "./formulario";

const Header = () => {
  return (
    <header className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Explora el Poder de la IA Generativa</h1>
          <p>
            Descubre cómo la inteligencia artificial está transformando la creatividad, los negocios
            y el aprendizaje.
          </p>
        </div>
        <div className="survey-box">
          <h2>Contáctate con Nuestros Cursos</h2>
          <Formulario />
        </div>
      </div>
    </header>
  );
};

export default Header;
