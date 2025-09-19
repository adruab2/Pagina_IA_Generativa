import React from "react";
import { User, Mail, BookOpen } from "lucide-react";

const Formulario = () => {
  return (
    <section id="inscripcion" className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Formulario de Inscripción
        </h2>

        {/* Tarjeta del formulario */}
        <div className="bg-white rounded-2xl shadow-md p-8 border">
          <form className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nombre
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-5 h-5 text-blue-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Escribe tu nombre"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Correo
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-5 h-5 text-blue-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Curso de interés */}
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Curso de interés
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-2.5 w-5 h-5 text-blue-500" />
                <select
                  id="interest"
                  name="interest"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>IA para principiantes</option>
                  <option>IA en los negocios</option>
                  <option>IA creativa</option>
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Enviar Inscripción
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;

