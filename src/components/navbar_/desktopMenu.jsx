import NavLink from './navLink';

const DesktopMenu = ({ isScrolled, menuItems, onMenuItemClick }) => {
  return (
    <div className="hidden md:flex justify-between items-center py-4">
      <div className="flex items-center ml-4">
        <img 
          src="/logo.png"
          alt="IA Academy Logo" 
          className="h-8 w-8 mr-2"
        />
        <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          IA Generation Academy
        </span>
      </div>
      <ul className="flex justify-center gap-8">
        {menuItems.map((item) => (
          <li key={item.href || item.label}>
            {item.action === 'showLogin' ? (
          <button
             onClick={() => onMenuItemClick(item)}
             className={`font-bold cursor-pointer transition-colors duration-200
              ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}
          >
             {item.label}
          </button>
            ) : (
              <NavLink
                href={item.href}
                isScrolled={isScrolled}
                onClick={() => onMenuItemClick(item)}
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


export default DesktopMenu;