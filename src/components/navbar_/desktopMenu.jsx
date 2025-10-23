import NavLink from "./navLink";
import { useAuth } from "../../contexts/AuthContext";
import { LogOut, User } from "lucide-react";

const DesktopMenu = ({ isScrolled, menuItems, onMenuItemClick }) => {
  const { user, signOut, isAuthenticated } = useAuth();

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      console.log("Sesión cerrada exitosamente");
    }
  };

  return (
    <div className="hidden md:flex justify-between items-center py-4">
      <div className="flex items-center ml-4">
        <img src="/logo.png" alt="IA Academy Logo" className="h-8 w-8 mr-2" />
        <span className={`text-xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
          IA Generation Academy
        </span>
      </div>
      <ul className="flex justify-center gap-8 items-center">
        {menuItems.map((item) => (
          <li key={item.href || item.label}>
            {item.action === "showLogin" && !isAuthenticated ? (
              <button
                onClick={() => onMenuItemClick(item)}
                className={`font-bold cursor-pointer transition-colors duration-200
                  ${isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-400"}`}
              >
                {item.label}
              </button>
            ) : item.action !== "showLogin" ? (
              <NavLink
                href={item.href}
                isScrolled={isScrolled}
                onClick={() => onMenuItemClick(item)}
              >
                {item.label}
              </NavLink>
            ) : null}
          </li>
        ))}

        {/* Mostrar usuario autenticado */}
        {isAuthenticated && (
          <li className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              <User size={20} />
              <span className="font-medium">{user?.email?.split("@")[0]}</span>
            </div>
            <button
              onClick={handleSignOut}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors duration-200
                ${isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              title="Cerrar sesión"
            >
              <LogOut size={18} />
              <span>Salir</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
