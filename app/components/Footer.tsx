import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-foreground/[0.2] w-full text-center h-[10rem] border-2 relative mt-15">
      <p className="absolute left-1/2 bottom-0 -translate-x-1/2">
        ~ Imprimax Solutions {currentYear} ~
      </p>
    </footer>
  );
};

export default Footer;
