"use client";

import { motion } from "framer-motion";
import { Zap, Monitor, Battery, Bot, Signal, Heart, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const domains = [
  {
    title: "Electrical Engineering",
    description: "Innovate in circuit design, electronics, and power systems to advance technology.",
    icon: Zap,
    techStack: ["MATLAB", "Multisim", "LTspice", "PCB Design", "Arduino"],
  },
  {
    title: "Computer Engineering",
    description: "Develop cutting-edge software and hardware solutions for modern computing challenges.",
    icon: Monitor,
    techStack: ["C", "Verilog", "VHDL", "Python", "Embedded Systems"],
  },
  {
    title: "Power and Energy",
    description: "Create sustainable energy solutions and smart grids for a greener future.",
    icon: Battery,
    techStack: ["Simulink", "PSCAD", "ETAP", "Solar PV Tools", "MATLAB"],
  },
  {
    title: "Robotics",
    description: "Design and program robots to automate tasks and enhance human capabilities.",
    icon: Bot,
    techStack: ["ROS", "Arduino", "Raspberry Pi", "OpenCV", "Python"],
  },
  {
    title: "Communications",
    description: "Build robust networks and communication systems for global connectivity.",
    icon: Signal,
    techStack: ["MATLAB", "Wireshark", "Cisco Packet Tracer", "5G Tools", "SDR"],
  },
  {
    title: "Biomedical Engineering",
    description: "Engineer solutions for healthcare, from medical devices to diagnostics.",
    icon: Heart,
    techStack: ["LabVIEW", "MATLAB", "3D Printing", "BioSensors", "Python"],
  },
  {
    title: "Aerospace Technology",
    description: "Advance satellite systems and aerospace innovations for exploration and defense.",
    icon: Rocket,
    techStack: ["MATLAB", "STK", "AutoCAD", "Embedded C", "Simulink"],
  },
  {
    title: "Leadership in STEM",
    description: "Empower women in STEM through mentorship, workshops, and career development.",
    icon: Users,
    techStack: ["Project Management", "Public Speaking", "Networking", "IEEE Tools", "Collaboration Platforms"],
  },
];

export default function Domains() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF69B4] rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FF69B4] rounded-full opacity-10 animate-float-delay-1"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FF69B4] rounded-full opacity-10 animate-float-delay-2"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none">
          Our Domains
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto select-none">
          Explore our diverse technical domains where you can learn, collaborate, and build innovative projects.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {domains.map((domain, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-[#FF69B4]/20 transition-all duration-300 border-2 border-[#9B59B6] hover:border-[#FF69B4] hover:scale-105 rounded-xl">
              <CardHeader className="pb-2">
                <motion.div
                  className="w-14 h-14 rounded-full bg-[#9B59B6]/10 flex items-center justify-center mb-4 text-[#9B59B6] group-hover:bg-[#FF69B4] group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <domain.icon className="w-8 h-8" />
                </motion.div>
                <CardTitle className="text-xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300">
                  {domain.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-gray-700">{domain.description}</CardDescription>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-[#9B59B6]">Tech Stack:</h4>
                  <motion.div
                    variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap gap-2"
                  >
                    {domain.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={techTagVariants}
                        className="text-xs px-2 py-1 rounded-full bg-[#9B59B6]/10 text-[#9B59B6] group-hover:bg-[#FF69B4]/20 group-hover:text-[#FF69B4] transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 2s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float 2s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}