import { useState, useEffect } from 'react';
import { contactService } from '../services/contactService';

/**
 * Hook personalizado para manejar el formulario de contacto
 * @returns {Object} Estado y funciones del formulario
 */
export const useContactForm = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingCursos, setLoadingCursos] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Cargar cursos al montar el componente
  useEffect(() => {
    loadCursos();
  }, []);

  /**
   * Carga la lista de cursos disponibles
   */
  const loadCursos = async () => {
    setLoadingCursos(true);
    try {
      const result = await contactService.getCursos();
      
      if (result.success) {
        setCursos(result.data || []);
      } else {
        setError(result.error || 'Error al cargar los cursos');
      }
    } catch (err) {
      setError('Error inesperado al cargar los cursos');
      console.error('Error en loadCursos:', err);
    } finally {
      setLoadingCursos(false);
    }
  };

  /**
   * Envía el formulario de contacto
   * @param {Object} formData - Datos del formulario
   * @param {Function} onSuccess - Callback de éxito opcional
   * @returns {Promise<Object>} Resultado de la operación
   */
  const submitForm = async (formData, onSuccess) => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const result = await contactService.enviarSolicitud(formData);

      if (result.success) {
        setSuccess(result.message || '¡Solicitud enviada con éxito!');
        if (onSuccess) onSuccess(result);
        return { success: true, data: result.data };
      } else {
        setError(result.error || 'Error al enviar la solicitud');
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMessage = 'Error inesperado. Por favor intenta de nuevo.';
      setError(errorMessage);
      console.error('Error en submitForm:', err);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Limpia los mensajes de error y éxito
   */
  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  /**
   * Reinicia el formulario
   */
  const resetForm = () => {
    setError(null);
    setSuccess(null);
    setLoading(false);
  };

  return {
    // Datos
    cursos,
    
    // Estados
    loading,
    loadingCursos,
    error,
    success,
    
    // Funciones
    submitForm,
    clearMessages,
    resetForm,
    reloadCursos: loadCursos,
  };
};
