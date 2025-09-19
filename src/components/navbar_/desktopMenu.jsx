import NavLink from './navLink';

const DesktopMenu = ({ isScrolled, menuItems }) => {
  return (
    <div className="hidden md:flex justify-between items-center py-4">
      <div className="text-xl font-bold ml-4">
        <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
          IA Academy
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