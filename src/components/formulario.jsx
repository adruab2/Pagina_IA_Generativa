import React from "react";

const Formulario = () => {
  return (
    <form>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Correo:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="interest">Curso de interés:</label>
      <select id="interest" name="interest">
        <option>IA para principiantes</option>
        <option>IA en los negocios</option>
        <option>IA creativa</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
