"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.3 } },
    hover: { scale: 1.02, boxShadow: "0 0 20px rgba(255, 105, 180, 0.5)" },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const particleVariants = {
    animate: {
      y: [-30, 30],
      x: [-20, 20],
      opacity: [0, 0.8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Enhanced Background Animations */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-4 h-4 bg-[rgba(255,105,180,0.3)] rounded-full"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-[rgba(155,89,182,0.3)] rounded-full"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-5 h-5 bg-[rgba(255,105,180,0.2)] rounded-star"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-[rgba(155,89,182,0.3)] rounded-full"
        variants={orbitVariants}
        animate="animate"
      >
        <motion.div
          className="w-2 h-2 bg-[rgba(155,89,182,0.4)] rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0], transition: { duration: 2, repeat: Infinity } }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-10 h-10 border-2 border-[rgba(255,105,180,0.2)] rounded-full"
        variants={orbitVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-3 h-3 bg-[rgba(255,105,180,0.3)] rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -15, 0], transition: { duration: 2.5, repeat: Infinity } }}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          variants={imageVariants}
          className="relative rounded-xl overflow-hidden shadow-xl w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mx-auto border-2 border-[#9B59B6] hover:border-[#FF69B4] transition-all duration-300"
        >
          <img
            src="/b1.jpg"
            alt="IEEE ISSATM WIE AG Event"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/20 to-transparent" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl font-bold text-center lg:text-left bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none"
          >
            About IEEE ISSATM WIE AG
          </motion.h2>

          <motion.div variants={textVariants} className="space-y-3 md:space-y-4 group">
            <h3 className="text-xl font-semibold text-[#9B59B6] select-none relative">
              Our Vision
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FF69B4] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </h3>
            <p className="text-muted-foreground select-none">
              To empower women in engineering and technology by fostering a global community that drives innovation, supports astronautics-inspired solutions, and advances AI for space exploration.
            </p>
          </motion.div>

          <motion.div variants={textVariants} className="space-y-3 md:space-y-4 group">
            <h3 className="text-xl font-semibold text-[#9B59B6] select-none relative">
              Our Mission
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FF69B4] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </h3>
            <p className="text-muted-foreground select-none">
              IEEE ISSATM WIE AG is committed to bridging the gender gap in STEM through cutting-edge projects, astronaut-focused AI innovations, and hands-on learning opportunities that inspire the next generation of space pioneers.
            </p>
          </motion.div>

          <motion.div variants={textVariants} className="space-y-3 md:space-y-4">
            <h3 className="text-xl font-semibold text-[#9B59B6] select-none relative group">
              What We Do
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FF69B4] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </h3>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 select-none">
              {[
                "Host workshops and hackathons on AI and astronautics",
                "Collaborate with space industry leaders for mentorship",
                "Develop AI-driven tools for astronaut missions",
                "Build a supportive network for women in tech",
                "Provide resources for space tech skill development",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF69B4] transition-all duration-300 group-hover:w-full" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .rounded-star {
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
        }
      `}</style>
    </div>
  );
}