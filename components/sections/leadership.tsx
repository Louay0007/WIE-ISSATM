"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const leadershipData = [
  {
    name: "Dr. Salah Karoui",
    role: "Current Advisor",
    department: "University Professor",
    image: "/T1.jpg",
    message: "I am proud to support IEEE WIE ISSATM AG as they foster innovation and technical excellence among our students and women.",
    contact: {
      linkedin: "https://www.linkedin.com/in/mohamed-salah-karoui-549a9018/",
    },
  },
  {
    name: "Dr. Rania Chetoui",
    role: "Former Advisor",
    department: "Graduated Student",
    image: "/h1.jpg",
    message: "IEEE WIE ISSATM AG embodies the innovative spirit we aim to cultivate in our community.",
    contact: {
      linkedin: "https://www.facebook.com/chetoui.raniaa",
    },
  },
];

export default function Leadership() {
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
          Our Leadership
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto select-none">
          Meet the visionary leaders who inspire and guide IEEE WIE ISSATM AG toward innovation and excellence.
        </p>
      </motion.div>

      {/* Leadership Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
      >
        {leadershipData.map((leader, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="group"
          >
            <Card className="h-full overflow-hidden border-2 border-[#9B59B6] bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 hover:border-[#FF69B4] transition-all duration-300 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Image */}
                <motion.div
                  className="sm:col-span-1 relative"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover aspect-square rounded-l-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Content */}
                <div className="sm:col-span-2 p-6 flex flex-col justify-between">
                  <motion.div variants={textVariants}>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300">
                        {leader.name}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-200">
                        {leader.role}, {leader.department}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground italic">"{leader.message}"</p>
                    </CardContent>
                  </motion.div>
                  <CardFooter className="p-0 pt-4 flex flex-col items-start gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto bg-[#9B59B6]/80 hover:bg-[#FF69B4] text-white transition-all duration-300"
                        asChild
                      >
                        <a
                          href={leader.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn Profile</span>
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}