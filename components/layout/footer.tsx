"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, color: "#FF69B4" },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, color: "#FF69B4", transition: { duration: 0.3 } },
  };

  const particleVariants = {
    animate: {
      y: [-15, 15],
      opacity: [0, 0.8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#2A0D3A]/80 to-[#4B1959]/60 py-12 overflow-hidden">
      {/* Background Animations */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-4 h-4 bg-[rgba(255,105,180,0.3)] rounded-full"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-[rgba(155,89,182,0.3)] rounded-full"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-5 h-5 bg-[rgba(255,105,180,0.2)] rounded-full"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* About Section */}
          <motion.div variants={sectionVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.5 }}>
                <img
                  src="/logo.png"
                  alt="IEEE ISSATM WIE AG Logo"
                  className="h-20 w-20 object-contain"
                />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent">
                IEEE ISSATM WIE AG
              </span>
            </div>
            <p className="text-gray-200">
              Empowering women to innovate, create, and excel in the world of technology.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex space-x-4"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Link href="https://www.facebook.com/profile.php?id=61556801021082" className="text-gray-200">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover">
                <Link href="https://www.instagram.com/wie.issatm/" className="text-gray-200">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover">
                <Link href="https://www.linkedin.com/company/ieee-women-in-engineering-issatm-student-branch-affinity-group/posts/?feedView=all" className="text-gray-200">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={sectionVariants}>
            <h3 className="font-medium text-lg mb-4 text-[#9B59B6] relative group">
              Quick Links
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
            </h3>
            <ul className="space-y-2">
              {["#home", "#domains", "#events", "#projects"].map((href, i) => (
                <motion.li key={i} variants={linkVariants} whileHover="hover">
                  <Link href={href} className="text-gray-200 transition-colors">
                    {href === "#home" ? "Home" : href === "#domains" ? "Our Domains" : href === "#events" ? "Events" : "Projects"}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={sectionVariants}>
            <h3 className="font-medium text-lg mb-4 text-[#9B59B6] relative group">
              Resources
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
            </h3>
            <ul className="space-y-2">
              {["#", "#", "#events", "#"].map((href, i) => (
                <motion.li key={i} variants={linkVariants} whileHover="hover">
                  <Link href={href} className="text-gray-200 transition-colors">
                    {href === "#" && i === 0 ? "Learning Resources" : href === "#" && i === 1 ? "Blog" : href === "#events" ? "Workshops" : "FAQ"}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={sectionVariants}>
            <h3 className="font-medium text-lg mb-4 text-[#9B59B6] relative group">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
            </h3>
            <address className="not-italic text-gray-200">
              <p>ISSAT MATEUR,</p>
              <p>Route de Tabarka 7030, Mateur (CC-1)</p>
              <motion.a
                href="mailto:nour_saidani@ieee.org"
                className="mt-2 block text-gray-200 hover:text-[#FF69B4] transition-colors"
                variants={linkVariants}
                whileHover="hover"
              >
                Email: nour_saidani@ieee.org
              </motion.a>
            </address>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#9B59B6]/50 mt-8 pt-8 text-center text-gray-200"
        >
          <p>
            © {new Date().getFullYear()} IEEE ISSATM WIE. All rights reserved. Developed By:{" "}
            <span className="bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent">
             <a href="https://www.instagram.com/louuuu007/"> LOUAY RJILI</a>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}