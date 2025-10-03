import React, { useState } from "react";

const PromotionBar = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(false); // avisamos al padre (App)
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-orange-600 text-white text-center py-2 z-50">
      🎃 Oferta de Halloween: ¡50% en todos los cursos hasta el 31 de Octubre! 👻
      <button
        className="ml-4 bg-black/30 hover:bg-black/50 px-2 py-1 rounded"
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
};

export default PromotionBar;
