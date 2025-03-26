"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Domains", href: "#domains" },
  { name: "Activities", href: "#events" },
  { name: "Events", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -2, scale: 1.1, color: "#FF69B4", transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const particleVariants = {
    animate: {
      y: [-20, 20],
      opacity: [0, 1, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-gradient-to-r from-[#9B59B6]/85 to-[#FF69B4]/85 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-[#9B59B6]/20 to-[#FF69B4]/20"
        )}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Particles */}
        <motion.div
          className="absolute top-2 left-2 w-3 h-3 bg-[#FF69B4] rounded-full opacity-30"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-2 right-2 w-4 h-4 bg-[#9B59B6] rounded-full opacity-20"
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />

        <div className="container mx-auto px-4 py-3 relative z-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <motion.img
                src="/logo.png"
                alt="IEEE ISSATM WIE AG Logo"
                className="h-12 w-12 object-contain"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <motion.span
                className="font-bold text-xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                IEEE ISSATM WIE AG
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-white relative group"
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile Navigation Toggle and Theme Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="focus:outline-none p-2 rounded-full bg-[#9B59B6]/80 hover:bg-[#FF69B4] text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 pt-20 px-4 md:hidden bg-gradient-to-br from-[#4B1959]/90 to-[#9B59B6]/80 backdrop-blur-md"
        )}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center absolute top-0 left-0 right-0 px-4 py-3 border-b border-[#FF69B4]/50">
          <Link href="/" className="flex items-center space-x-3">
            <motion.img
              src="/logo.png"
              alt="IEEE ISSATM WIE AG Logo"
              className="h-12 w-12 object-contain"
              whileHover={{ scale: 1.1 }}
            />
            <span className="font-bold text-xl text-white">IEEE ISSATM WIE AG</span>
          </Link>
          <motion.button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="p-2 rounded-full bg-[#FF69B4]/80 hover:bg-[#9B59B6] text-white transition-all duration-300"
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-lg font-medium py-2 text-white hover:text-[#FF69B4] transition-colors relative group"
              custom={i}
              variants={mobileLinkVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
      </motion.div>

      {/* Full-screen Backdrop for Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}