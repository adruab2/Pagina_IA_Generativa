
const NavLink = ({ href, children, isScrolled, onClick, className = "" }) => {
  const baseClasses = "font-semibold transition-colors duration-200";
  const colorClasses = isScrolled 
    ? 'text-gray-700 hover:text-blue-600' 
    : 'text-white hover:text-blue-300';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;