"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Facebook } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Nour Saidani",
    role: "ChairWoman",
    image: "/d1.jpg",
    social: { linkedin: "https://www.facebook.com/nour.saidani.161" },
  },
  {
    name: "Farah Hammami",
    role: "Vice Chair",
    image: "/d2.jpg",
    social: { linkedin: "https://www.facebook.com/salsabil.hammami.520" },
  },
  {
    name: "Nidhal Sghaier",
    role: "WebMaster",
    image: "/d3.jpg",
    social: { linkedin: "https://www.facebook.com/nidhal.sgahair.5" },
  },
  {
    name: "Malek Matoussi",
    role: "General Secretary",
    image: "/d4.jpg",
    social: { linkedin: "https://www.facebook.com/malek.matoussi.75" },
  },
  {
    name: "Hiba Bahri",
    role: "Treasurer",
    image: "/d5.jpg",
    social: { linkedin: "https://www.facebook.com/profile.php?id=61565107079548" },
  },
  {
    name: "Zahra Weslati",
    role: "Former Chair",
    image: "/d6.jpg",
    social: { linkedin: "https://www.facebook.com/zahra.weslati.923" },
  },
];

export default function Team() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.3 } },
    hover: { scale: 1.03, boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)" },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, color: "#FF69B4", transition: { duration: 0.3 } },
  };

  const particleVariants = {
    animate: {
      y: [-20, 20],
      opacity: [0, 0.8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Background Animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[rgba(255,105,180,0.3)] rounded-full"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-[rgba(155,89,182,0.3)] rounded-full"
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
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[rgba(155,89,182,0.3)] rounded-full"
        variants={orbitVariants}
        animate="animate"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none">
          Our Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto select-none">
          Meet the brilliant minds driving IEEE WIE ISSATM AG with passion, creativity, and innovation.
        </p>
      </motion.div>

      {/* Team Cards */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="group"
          >
            <Card className="h-full overflow-hidden border-2 border-[#9B59B6] bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 hover:border-[#FF69B4] transition-all duration-300 rounded-xl">
              <div className="relative overflow-hidden">
                <motion.img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-t-xl"
                  variants={imageVariants}
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="p-4">
                <motion.div variants={textVariants}>
                  <CardTitle className="text-xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300 relative">
                    {member.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
                  </CardTitle>
                  <CardDescription className="text-base text-gray-200">
                    {member.role}
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-start gap-4">
                <motion.a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}