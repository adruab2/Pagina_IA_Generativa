import NavLink from "./navLink";
import { useAuth } from "../../contexts/AuthContext";
import { LogOut, User } from "lucide-react";

const MobileMenu = ({ isScrolled, isMobileMenuOpen, menuItems, onMenuItemClick }) => {
  const { user, signOut, isAuthenticated } = useAuth();

  if (!isMobileMenuOpen) return null;

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      console.log("Sesión cerrada exitosamente");
    }
  };

  return (
    <div
      className={`md:hidden transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-black/80 backdrop-blur-sm"
      } absolute top-full left-0 w-full border-t ${
        isScrolled ? "border-gray-200" : "border-white/20"
      }`}
    >
      <ul className="py-4 px-4 space-y-2">
        {/* Usuario autenticado */}
        {isAuthenticated && (
          <li
            className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-2 ${
              isScrolled ? "bg-gray-100" : "bg-white/10"
            }`}
          >
            <User size={20} className={isScrolled ? "text-gray-800" : "text-white"} />
            <span className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
              {user?.email}
            </span>
          </li>
        )}

        {menuItems.map((item) => (
          <li key={item.href || item.label}>
            {item.action === "showLogin" && !isAuthenticated ? (
              <button
                onClick={() => onMenuItemClick(item)}
                className={`w-full text-left py-2 px-4 rounded font-medium ${
                  isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ) : item.action !== "showLogin" ? (
              <NavLink
                href={item.href}
                isScrolled={isScrolled}
                onClick={(e) => {
                  e.preventDefault();
                  onMenuItemClick(item);
                }}
                className={`block py-2 px-4 rounded ${
                  isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                }`}
              >
                {item.label}
              </NavLink>
            ) : null}
          </li>
        ))}

        {/* Botón de cerrar sesión */}
        {isAuthenticated && (
          <li>
            <button
              onClick={handleSignOut}
              className={`w-full flex items-center gap-2 py-2 px-4 rounded font-medium ${
                isScrolled ? "text-red-600 hover:bg-red-50" : "text-red-400 hover:bg-white/10"
              }`}
            >
              <LogOut size={18} />
              <span>Cerrar Sesión</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
