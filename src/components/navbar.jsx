import React from "react";
import { useNavbar } from "../hooks/useNavbar";
import { menuItems } from "../constants/menuItems";
import { DesktopMenu, MobileMenu, MobileMenuToggle } from "./navbar_";

const Navbar = ({ onShowLogin }) => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, handleLinkClick } = useNavbar();

  
  const handleMenuClick = (item) => {
    if (item.action === 'showLogin') {
      onShowLogin();  
      if (isMobileMenuOpen) toggleMobileMenu(); 
    } else if (item.href) {
      handleLinkClick(item.href);
      if (isMobileMenuOpen) toggleMobileMenu(); 
    }
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 bg-white/95 backdrop-blur-sm shadow-lg"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <DesktopMenu
          isScrolled={isScrolled}
          menuItems={menuItems}
          onMenuItemClick={handleMenuClick}  
        />

        <MobileMenuToggle
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
        />

        <MobileMenu
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          menuItems={menuItems}
          onMenuItemClick={handleMenuClick}  
        />
      </div>
    </nav>
  );
};

export default Navbar;
