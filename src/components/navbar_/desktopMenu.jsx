import NavLink from './navLink';

const DesktopMenu = ({ isScrolled, menuItems }) => {
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
          <li key={item.href}>
            <NavLink href={item.href} isScrolled={isScrolled}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;