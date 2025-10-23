import { useState } from 'react';

/**
 * Hook de validación de formularios con soporte para operaciones asíncronas
 * @param {Object} initialValues - Valores iniciales del formulario
 * @param {Object} validationRules - Reglas de validación para cada campo
 * @returns {Object} Estado y funciones para manejar el formulario
 */
export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Valida un campo individual
   * @param {string} fieldName - Nombre del campo
   * @param {any} value - Valor del campo
   * @returns {string} Mensaje de error o cadena vacía
   */
  const validate = (fieldName, value) => {
    const rule = validationRules[fieldName];
    if (!rule) return '';

    if (rule.required && !value) {
      return rule.message || 'Este campo es requerido';
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message || 'Formato inválido';
    }

    if (rule.minLength && value.length < rule.minLength) {
      return rule.message || `Debe tener al menos ${rule.minLength} caracteres`;
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      return rule.message || `Debe tener máximo ${rule.maxLength} caracteres`;
    }

    if (rule.custom && typeof rule.custom === 'function') {
      return rule.custom(value, values) || '';
    }

    return '';
  };

  /**
   * Maneja cambios en los inputs
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  /**
   * Maneja cuando un campo pierde el foco
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  /**
   * Maneja el envío del formulario
   * @param {Function} onSubmit - Función a ejecutar si la validación es exitosa
   * @returns {Function} Handler del evento submit
   */
  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      const error = validate(field, values[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched(Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Error en handleSubmit:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  /**
   * Resetea el formulario a sus valores iniciales
   */
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  /**
   * Actualiza los valores del formulario
   */
  const setFieldValue = (fieldName, value) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  /**
   * Actualiza un error específico
   */
  const setFieldError = (fieldName, error) => {
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  return { 
    values, 
    errors, 
    touched, 
    isSubmitting,
    handleChange, 
    handleBlur, 
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError
  };
};
