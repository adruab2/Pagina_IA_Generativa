import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">¿Qué es la IA?</a></li>
        <li><a href="#courses">Cursos</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#inscripcion">Inscríbete</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;