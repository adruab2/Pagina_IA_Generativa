import React from "react";
import { useNavbar } from "../hooks/useNavbar";
import { menuItems } from "../constants/menuItems";
import { DesktopMenu, MobileMenu, MobileMenuToggle } from "./navbar_";

const Navbar = ({ promoVisible }) => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, handleLinkClick } = useNavbar();

  return (
    <nav
      className={`w-full z-40 transition-all duration-300 ${
        isScrolled
          ? `fixed ${promoVisible ? "top-[40px]" : "top-0"} bg-white/95 backdrop-blur-sm shadow-lg`
          : `absolute ${promoVisible ? "top-[40px]" : "top-0"} bg-transparent`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <DesktopMenu isScrolled={isScrolled} menuItems={menuItems} />
        <MobileMenuToggle
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
        />
        <MobileMenu
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          menuItems={menuItems}
          onLinkClick={handleLinkClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;

