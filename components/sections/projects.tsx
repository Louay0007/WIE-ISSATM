"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "LunaHacks 1.0",
    description:
      "🚀🌙 LunaHack1.0 is Starting Soon! 🔭✨ The countdown has begun! ⏳ Get ready to embark on an exciting journey where innovation meets the cosmos. LunaHack, organized by IEEE WIE ISETR student Affinity Group and IEEE WIE Issatm Student Affinity Group , is about to take off! 🌠",
    image: "/l1.jpg",
    techStack: ["AstroTensor", "OpenCV", "TensorFlow", "SpacePy", "AstroMAT", "Keras"],
    demoUrl: "https://www.facebook.com/profile.php?id=61573519354387",
    featured: true,
  },
  {
    id: 2,
    title: "Wamidh 1.0",
    description:
      "Coming Soon !",
    image: "/w1.jpg",
    techStack: ["Movie Making", "Graphic Design"],
    demoUrl: "",
    featured: true,
  },

];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const particleVariants = {
    animate: {
      y: [-30, 30],
      opacity: [0, 1, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden bg-[#1A0B2E]">
      {/* Background Animations */}
      {/* Radial Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#9B59B6]/20 to-[#FF69B4]/10 opacity-50"
        variants={glowVariants}
        animate="animate"
        style={{ zIndex: 0 }}
      />

      {/* Particles */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-3 bg-[#FF69B4] rounded-full opacity-40"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-5 h-5 bg-[#9B59B6] rounded-full opacity-30"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-4 h-4 bg-[#FF69B4] rounded-full opacity-25"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-[#9B59B6] rounded-full opacity-20"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      />

      {/* Orbiting Shapes */}
      <motion.div
        className="absolute top-1/4 left-3/4 w-8 h-8 border-2 border-[#FF69B4]/50 rounded-full opacity-30"
        variants={orbitVariants}
        animate="animate"
        style={{ zIndex: 0 }}
      >
        <motion.div
          className="w-2 h-2 bg-[#FF69B4] rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0], transition: { duration: 2, repeat: Infinity } }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-10 h-10 border-2 border-[#9B59B6]/50 rounded-full opacity-30"
        variants={orbitVariants}
        animate="animate"
        style={{ zIndex: 0 }}
      >
        <motion.div
          className="w-3 h-3 bg-[#9B59B6] rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -15, 0], transition: { duration: 2.5, repeat: Infinity } }}
        />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none">
          Our Events
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto select-none">
          Explore the innovative projects developed by our club members, showcasing their technical skills and creativity.
        </p>
      </motion.div>

      <div className="relative z-10">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 sm:-left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#9B59B6]/80 to-[#FF69B4]/80 hover:from-[#FF69B4] hover:to-[#9B59B6] text-white shadow-lg rounded-full h-10 w-10 transition-all duration-300 hover:scale-110 hidden md:flex"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous project</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 sm:-right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#9B59B6]/80 to-[#FF69B4]/80 hover:from-[#FF69B4] hover:to-[#9B59B6] text-white shadow-lg rounded-full h-10 w-10 transition-all duration-300 hover:scale-110 hidden md:flex"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next project</span>
        </Button>

        {/* Carousel */}
        <div className="overflow-hidden touch-pan-y">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              if (Math.abs(offset.x) > 100) {
                offset.x < 0 ? nextSlide() : prevSlide();
              }
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-full px-4"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card className="overflow-hidden border-2 border-[#9B59B6] bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 hover:border-[#FF69B4] hover:shadow-xl hover:shadow-[#FF69B4]/40 transition-all duration-300 rounded-xl min-h-[600px]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    {/* Image Section */}
                    <div className="relative overflow-hidden group lg:col-span-8">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover bg-center transition-transform duration-500 group-hover:scale-105 rounded-t-xl lg:rounded-l-xl"
                        variants={imageVariants}
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/60 to-[#FF69B4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-[#9B59B6]/80 hover:bg-[#FF69B4] text-white border-none transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Overview
                          </a>
                        </Button>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="p-6 flex flex-col lg:col-span-4">
                      <CardHeader className="p-0 pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          {project.featured && (
                            <Badge className="bg-[#FF69B4] text-white hover:bg-[#FF69B4]/80">Featured</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow">
                        <CardDescription className="text-sm text-gray-200 mb-4">
                          {project.description}
                        </CardDescription>
                        <div>
                          <h4 className="text-xs font-medium text-[#9B59B6] mb-1">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs py-0 bg-[#9B59B6]/20 border-[#FF69B4] text-gray-200 hover:bg-[#FF69B4]/30 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-[#9B59B6] hover:bg-[#FF69B4] text-white border-none transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Details
                          </a>
                        </Button>
                       
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#FF69B4] scale-125" : "bg-[#9B59B6]/50"
              } hover:bg-[#FF69B4] hover:scale-110`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.75; }
          50% { opacity: 1; }
          100% { opacity: 0.75; }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}