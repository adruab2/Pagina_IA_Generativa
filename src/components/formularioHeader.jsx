import React, { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const FormularioHeader = () => {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Mensaje de éxito */}
      {success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-green-700">{success}</p>
        </div>
      )}

      {/* Mensaje de error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          disabled={loading}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          disabled={loading}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
          Curso de interés
        </label>
        <select
          id="interest"
          name="curso_id"
          value={formData.curso_id}
          onChange={handleChange}
          required
          disabled={loading || loadingCursos}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <button
        type="submit"
        disabled={loading || loadingCursos}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Enviando...
          </>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  );
};

export default FormularioHeader;
