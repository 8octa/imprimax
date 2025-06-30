"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import navItems from "../../jsons/navItems.json";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button className="cursor-pointer z-50">
              <a
                href="https://wa.me/+40724274102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} className="text-xl text-[#25D366]" />
              </a>
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <button className="cursor-pointer z-50">
                <a
                  href="https://wa.me/+40724274102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} className="text-xl text-[#25D366]" />
                </a>
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
