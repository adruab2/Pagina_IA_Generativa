import React, { useState } from "react";
import { useAuthForm } from "../hooks/useAuthForm";
import { X, Mail, Lock, AlertCircle, Loader2, CheckCircle } from "lucide-react";

const Login = ({ onClose }) => {
  const { handleSignIn, isSubmitting, error, success } = useAuthForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await handleSignIn(email, password, () => {
      // Callback de éxito: cerrar modal después de un breve delay
      setTimeout(() => {
        onClose();
      }, 1000);
    });

    if (!result.success) {
      console.error("Error al iniciar sesión:", result.error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-in fade-in zoom-in duration-200">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h2>
          <p className="text-sm text-gray-600 mt-1">Accede a tu cuenta de IA Generation Academy</p>
        </div>

        {/* Formulario */}
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Mensaje de éxito */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="email"
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="password"
                type="password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Olvidé mi contraseña */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
              onClick={() => {
                // Aquí puedes implementar la funcionalidad de recuperar contraseña
                console.log("Recuperar contraseña");
              }}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Iniciando...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          <p className="text-sm text-gray-600 text-center">
            ¿No tienes una cuenta?{" "}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              onClick={() => {
                // Aquí puedes implementar la navegación al registro
                console.log("Ir a registro");
              }}
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
