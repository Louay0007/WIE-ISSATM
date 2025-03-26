"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const SHOW_RECRUITMENT = true;

interface RecruitmentProps {
  visible?: boolean;
  posterSrc?: string; // Kept for compatibility
}

export default function Recruitment({
  visible = SHOW_RECRUITMENT,
  posterSrc,
}: RecruitmentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  if (!visible) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.5 } },
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const particleVariants = {
    animate: {
      y: [-20, 20],
      opacity: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="recruitment" className="relative py-20 overflow-hidden bg-gradient-to-br from-[#4B1959]/10 to-[#9B59B6]/5">
      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#FF69B4] rounded-full opacity-30"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-[#9B59B6] rounded-full opacity-20"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-5 h-5 bg-[#FF69B4] rounded-full opacity-25"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Video Section */}
          <motion.div
            variants={videoVariants}
            className="w-full md:w-1/2 max-w-md mx-auto relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#9B59B6]/20 to-[#FF69B4]/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <video
              ref={videoRef}
              className="w-full h-[600px] object-contain rounded-xl border-2 border-[#FF69B4] shadow-lg shadow-[#FF69B4]/30 group-hover:shadow-[#FF69B4]/50 transition-all duration-300 relative z-10"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/intro1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, repeat: 1, repeatType: "reverse" as const }}
            >
              Join the Future: Recruitment
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-200 max-w-md mx-auto md:mx-0 select-none"
            >
              The IEEE ISSATM Women in Engineering Affinity Group is seeking passionate trailblazers to join our cosmic community. Whether you’re a newbie or a tech wizard, step into a world of collaboration, learning, and innovation.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-200 max-w-md mx-auto md:mx-0 select-none"
            >
              Our application window is <b className="text-[#FF69B4]">closing soon</b>, but the galaxy of opportunities will reopen! Stay tuned to launch your journey with us.
            </motion.p>
            <motion.div variants={buttonVariants} whileHover="hover">
              <a href="https://forms.gle/91FTvS5pMwMSpz1d6">
                <Button
                  size="lg"
                  className="relative bg-[#9B59B6] hover:bg-[#FF69B4] text-white transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10">Apply Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] to-[#9B59B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute w-2 h-2 bg-white rounded-full top-1 right-1 opacity-0 group-hover:opacity-100 animate-sparkle"></span>
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkle Animation */}
      <style jsx>{`
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(0); opacity: 0; }
        }
        .animate-sparkle {
          animation: sparkle 1s infinite;
        }
      `}</style>
    </section>
  );
}