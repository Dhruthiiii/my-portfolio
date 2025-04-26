
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { SocialIcons } from "./SocialIcons";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Articles", path: "/articles" },
    { name: "Achievements", path: "/achievements" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold font-display">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background">
              AR
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex">
            <SocialIcons />
          </div>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="rounded-full ml-1"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="text-xl font-bold font-display" onClick={closeMenu}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background">
                  AR
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <span className="text-2xl">×</span>
              </Button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl ${
                    location.pathname === link.path ? "font-medium text-primary" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pb-8">
              <div className="flex justify-center mb-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
