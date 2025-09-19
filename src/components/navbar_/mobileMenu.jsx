import NavLink from './navLink';

const MobileMenu = ({ isScrolled, isMobileMenuOpen, menuItems, onLinkClick }) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className={`md:hidden transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'
    } absolute top-full left-0 w-full border-t ${
      isScrolled ? 'border-gray-200' : 'border-white/20'
    }`}>
      <ul className="py-4 px-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              isScrolled={isScrolled}
              onClick={onLinkClick}
              className={`block py-2 px-4 rounded ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              }`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;