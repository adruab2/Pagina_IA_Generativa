import { supabase } from './supabase';

/**
 * Servicio para manejar las operaciones relacionadas con cursos y solicitudes de contacto
 */
export const contactService = {
  /**
   * Obtiene todos los cursos disponibles
   * @returns {Promise<Object>} Lista de cursos o error
   */
  getCursos: async () => {
    try {
      const { data: cursos, error } = await supabase
        .from('cursos')
        .select('id, nombre')
        .order('nombre', { ascending: true });

      if (error) throw error;

      return { success: true, data: cursos };
    } catch (error) {
      console.error('Error al cargar cursos:', error.message);
      return { 
        success: false, 
        error: error.message || 'Error al cargar los cursos' 
      };
    }
  },

  /**
   * Envía una solicitud de contacto
   * @param {Object} solicitud - Datos de la solicitud
   * @param {string} solicitud.nombre - Nombre del usuario
   * @param {string} solicitud.correo - Correo del usuario
   * @param {string} solicitud.curso_id - ID del curso seleccionado
   * @returns {Promise<Object>} Resultado de la operación
   */
  enviarSolicitud: async ({ nombre, correo, curso_id }) => {
    try {
      // Validación básica
      if (!nombre || !correo || !curso_id) {
        throw new Error('Todos los campos son requeridos');
      }

      const { data, error } = await supabase
        .from('solicitudes_contacto')
        .insert({
          nombre: nombre.trim(),
          correo: correo.trim().toLowerCase(),
          curso_id
        })
        .select()
        .single();

      if (error) throw error;

      return { 
        success: true, 
        data,
        message: '¡Solicitud enviada con éxito!' 
      };
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
      return { 
        success: false, 
        error: error.message || 'Error al enviar la solicitud' 
      };
    }
  },

  /**
   * Obtiene todas las solicitudes de contacto (para admin)
   * @returns {Promise<Object>} Lista de solicitudes o error
   */
  getSolicitudes: async () => {
    try {
      const { data, error } = await supabase
        .from('solicitudes_contacto')
        .select(`
          id,
          created_at,
          nombre,
          correo,
          curso:cursos(id, nombre)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return { success: true, data };
    } catch (error) {
      console.error('Error al cargar solicitudes:', error.message);
      return { 
        success: false, 
        error: error.message || 'Error al cargar las solicitudes' 
      };
    }
  }
};
