import React, { useState, useEffect } from "react";
import FormularioHeader from "./formularioHeader";

const carouselImages = [
  "https://marketinlife.com/wp-content/uploads/2024/02/Inteligencia-Artificial-generativa_2253228203.jpg",
  "https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/Ventajas-IA-generativa.jpg",
  "https://www.infobae.com/resizer/v2/SCRBFXN2UJCNXMTGMN3JWF7D7Y.jpg?auth=898804618de8a16837b97d3e88c99292a2b5a0b4128c3d3bfdb05c8836e7bb0d&smart=true&width=1200&height=630&quality=85",
  "https://www.adeccoinstitute.es/wp-content/uploads/2024/06/Inteligencia-Artificial-AI-1.jpg",
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full min-h-[450px] md:h-[500px] overflow-hidden p-16" id="hero">
      {carouselImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col md:flex-row h-full w-full px-6 md:px-12">
        <div className="flex flex-col justify-center items-center md:items-start flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 !bg-gradient-to-r from-blue-600 to-cyan-300 !bg-clip-text !text-transparent">
            ¡Explora el Poder de la IA Generativa!
          </h1>
          <p className="text-base md:text-lg max-w-md italic text-gray-200">
            Descubre cómo la inteligencia artificial está transformando la
            creatividad, los negocios y el aprendizaje.
          </p>
        </div>

        <div className="w-full md:w-[350px] bg-white text-black rounded-xl shadow-lg mt-6 md:mt-0 md:ml-10 p-6 self-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
            Contáctate con Nosotros
          </h2>
          <FormularioHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
