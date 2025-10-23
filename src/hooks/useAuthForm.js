import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

/**
 * Hook personalizado para manejar la autenticación en formularios
 * @returns {Object} Objeto con funciones y estados para autenticación
 */
export const useAuthForm = () => {
  const { signIn, signUp, resetPassword, loading: authLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  /**
   * Maneja el inicio de sesión
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña del usuario
   * @param {Function} onSuccess - Callback opcional al éxito
   * @returns {Promise<Object>} Resultado de la operación
   */
  const handleSignIn = async (email, password, onSuccess) => {
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const result = await signIn(email, password);
      
      if (result.success) {
        setSuccess('¡Inicio de sesión exitoso!');
        if (onSuccess) onSuccess(result);
        return result;
      } else {
        setError(result.error || 'Error al iniciar sesión');
        return result;
      }
    } catch (err) {
      const errorMessage = 'Error inesperado. Por favor intenta de nuevo.';
      setError(errorMessage);
      console.error('Error en handleSignIn:', err);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Maneja el registro de usuario
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña del usuario
   * @param {Object} metadata - Metadata adicional del usuario
   * @param {Function} onSuccess - Callback opcional al éxito
   * @returns {Promise<Object>} Resultado de la operación
   */
  const handleSignUp = async (email, password, metadata = {}, onSuccess) => {
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const result = await signUp(email, password, metadata);
      
      if (result.success) {
        setSuccess('¡Registro exitoso! Revisa tu email para confirmar tu cuenta.');
        if (onSuccess) onSuccess(result);
        return result;
      } else {
        setError(result.error || 'Error al registrarse');
        return result;
      }
    } catch (err) {
      const errorMessage = 'Error inesperado. Por favor intenta de nuevo.';
      setError(errorMessage);
      console.error('Error en handleSignUp:', err);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Maneja la recuperación de contraseña
   * @param {string} email - Email del usuario
   * @param {Function} onSuccess - Callback opcional al éxito
   * @returns {Promise<Object>} Resultado de la operación
   */
  const handleResetPassword = async (email, onSuccess) => {
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const result = await resetPassword(email);
      
      if (result.success) {
        setSuccess('Se ha enviado un correo para restablecer tu contraseña.');
        if (onSuccess) onSuccess(result);
        return result;
      } else {
        setError(result.error || 'Error al enviar el correo de recuperación');
        return result;
      }
    } catch (err) {
      const errorMessage = 'Error inesperado. Por favor intenta de nuevo.';
      setError(errorMessage);
      console.error('Error en handleResetPassword:', err);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Limpia los mensajes de error y éxito
   */
  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    // Funciones
    handleSignIn,
    handleSignUp,
    handleResetPassword,
    clearMessages,
    
    // Estados
    isSubmitting: isSubmitting || authLoading,
    error,
    success,
  };
};
