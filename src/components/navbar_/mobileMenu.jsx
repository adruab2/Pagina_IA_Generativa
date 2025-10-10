import NavLink from './navLink';

const MobileMenu = ({ isScrolled, isMobileMenuOpen, menuItems, onMenuItemClick }) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div
      className={`md:hidden transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'
      } absolute top-full left-0 w-full border-t ${
        isScrolled ? 'border-gray-200' : 'border-white/20'
      }`}
    >
      <ul className="py-4 px-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.href || item.label}>
            {item.action === 'showLogin' ? (
              <button
                onClick={() => onMenuItemClick(item)}
                className={`w-full text-left py-2 px-4 rounded font-medium ${
                  isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                href={item.href}
                isScrolled={isScrolled}
                onClick={(e) => {
                  e.preventDefault();
                  onMenuItemClick(item);
                }}
                className={`block py-2 px-4 rounded ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;