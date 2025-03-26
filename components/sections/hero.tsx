"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start as false, toggle manually
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
    // Audio autoplay attempt
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio started successfully");
          setIsPlaying(true); // Set to true if autoplay succeeds
        })
        .catch((error) => {
          console.error("Audio autoplay failed:", error);
          setAutoplayFailed(true);
        });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset to start
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
      }
      setIsPlaying(!isPlaying); // Toggle state
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", bounce: 0.4 } },
    hover: { scale: 1.05, boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)" },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-[#4B1959]/10 to-transparent">
      {/* Moving Pink Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF69B4] rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF69B4] rounded-full opacity-15 animate-float-delay-1"></div>
      <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-[#FF69B4] rounded-full opacity-25 animate-float-delay-2"></div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none"
            >
              Innovate. <span className="block md:inline">Build.</span> Succeed.
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-200 max-w-lg select-none"
            >
              The IEEE ISSATM Women in Engineering Affinity Group is a dynamic community at our university, committed to advancing women in STEM fields. We unite driven students from all backgrounds to inspire, collaborate, and innovate through impactful engineering projects.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-200 max-w-lg select-none"
            >
              Through engaging workshops, mentorship programs, and technical events, we empower members to sharpen their skills, embrace cutting-edge technologies, and pave the way for thriving careers in engineering and beyond.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link href="https://www.facebook.com/profile.php?id=61556801021082">
                  <Button
                    size="lg"
                    className="bg-[#9B59B6] hover:bg-[#FF69B4] text-white transition-all duration-300"
                  >
                    Join Our Affinity Group
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link href="#projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#9B59B6] text-[#9B59B6] hover:border-[#FF69B4] hover:text-[#FF69B4] hover:bg-[#FF69B4]/10 transition-all duration-300"
                  >
                    Explore Projects
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button
                  size="lg"
                  onClick={toggleAudio}
                  className={`${
                    isPlaying ? "bg-[#FF69B4] hover:bg-[#FF69B4]/80" : "bg-[#9B59B6] hover:bg-[#FF69B4]"
                  } text-white transition-all duration-300`}
                >
                  {isPlaying ? "Music Off" : "Music On"}
                </Button>
              </motion.div>
            </motion.div>
            {autoplayFailed && !isPlaying && (
              <motion.p
                variants={textVariants}
                className="text-sm text-gray-400 mt-2"
              >
                Autoplay blocked by your browser. Click "Music On" to start.
              </motion.p>
            )}
            <audio ref={audioRef} loop>
              <source src="/song.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>

          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="max-w-md mx-auto lg:mx-0"
          >
            <video
              ref={videoRef}
              className="w-full h-[600px] object-contain rounded-xl border-2 border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20 hover:shadow-[#FF69B4]/40 transition-all duration-300"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
