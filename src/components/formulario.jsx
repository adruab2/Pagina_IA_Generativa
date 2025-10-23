import React, { useState } from "react";
import { User, Mail, BookOpen, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const Formulario = () => {
  const { cursos, loading, loadingCursos, error, success, submitForm } = useContactForm();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    curso_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await submitForm(formData, () => {
      // Resetear formulario después de envío exitoso
      setFormData({
        nombre: '',
        correo: '',
        curso_id: ''
      });
    });

    if (!result.success) {
      console.error('Error al enviar solicitud:', result.error);
    }
  };

  return (
    <section id="inscripcion" className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Formulario de Inscripción
        </h2>

        {/* Tarjeta del formulario */}
        <div className="bg-white rounded-2xl shadow-md p-8 border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mensaje de éxito */}
            {success && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-green-700 font-medium">{success}</p>
              </div>
            )}

            {/* Mensaje de error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
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
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu nombre"
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  placeholder="tucorreo@ejemplo.com"
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  name="curso_id"
                  value={formData.curso_id}
                  onChange={handleChange}
                  required
                  disabled={loading || loadingCursos}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {loadingCursos ? 'Cargando cursos...' : 'Selecciona un curso'}
                  </option>
                  {cursos.map((curso) => (
                    <option key={curso.id} value={curso.id}>
                      {curso.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={loading || loadingCursos}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Enviando...
                </>
              ) : (
                'Enviar Inscripción'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;

