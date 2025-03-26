"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  image: string;
  is_past: boolean;
  galleryImages: string[];
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // New state for enlarged image

  const events: Event[] = [
    {
      id: 1,
      title: "Bootcamp",
      description: "We will share the details as soon as possible.",
      date: "?????",
      time: "?????",
      location: "ISSATM",
      capacity: 50,
      registered: 0,
      image: "/boot.jpg",
      is_past: false,
      galleryImages: [],
    },
    
    {
      id: 3,
      title: "Wie Movie",
      description: "Movie Screening by IEEE WIE ISSATM SAG! Join us for a free movie screening, hosted by IEEE WIE ISSATM SAG! A perfect way to unwind and enjoy a great film with fellow students.",
      date: "2025-02-14",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Hall, Faculty",
      capacity: 40,
      registered: 40,
      image: "/A1.jpg",
      is_past: true,
      galleryImages: ["/A2.jpg" , "/A3.jpg", "/A4.jpg" ],
    },
    {
      id: 4,
      title: "Wie Chill",
      description: "🌿🤝 Strengthen bonds, share laughs, and get to know your teammates like never before! Join us for an exciting Team Building Picnic.",
      date: "2025-02-05",
      time: "2:00 PM - 5:00 PM",
      location: "North Park, Mateur",
      capacity: 30,
      registered: 30,
      image: "/wiechill.jpg",
      is_past: true,
      galleryImages: ["/cill1.jpg", "/cill2.jpg", "/CILL3.jpg", "/CILL4.jpg", "/CILL5.jpg"],
    },
    {
      id: 5,
      title: "Valentine's Day",
      description: "Love, laughter, and unforgettable moments captured! ❤️✨ Here’s a glimpse of our Valentine’s Day celebration with IEEE WIE ISSATM SAG—filled with joy, connection, and empowerment. 💕📸 ",
      date: "2025-02-14",
      time: "10:00 AM - 2:00 PM",
      location: "ISSATM",
      capacity: 30,
      registered: 30,
      image: "/val.jpg",
      is_past: true,
      galleryImages: ["/V1.jpg", "/V2.jpg", "/V3.jpg", "/V4.jpg", "/V5.jpg", "/V6.jpg"],
    },
    {
      id: 6,
      title: "IEEE IFTAR",
      description: "🌟 Join us for IEEEIftar, hosted by IEEE WIE ISSATM SAG! 🕌✨ Let’s come together to celebrate the spirit of Ramadan, enjoy a delicious meal, and connect with an amazing community.",
      date: "2025-03-05",
      time: "AT IFTAR",
      location: "FOYER",
      capacity: 30,
      registered: 30,
      image: "/I1.jpg",
      is_past: true,
      galleryImages: [],
    },
  ];

  const handleSeeDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleImageClick = (img: string) => {
    setSelectedImage(img); // Set the clicked image to upscale
  };

  const upcomingEvents = events.filter((event) => !event.is_past);
  const pastEvents = events.filter((event) => event.is_past);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const upscaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", bounce: 0.3 } },
  };

  const particleVariants = {
    animate: {
      y: [-20, 20],
      opacity: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] bg-clip-text text-transparent select-none">
          Our ACTIVITIES
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto select-none">
          Join our workshops, hackathons, and soft to boost your skills and connect with the community.
        </p>
      </motion.div>

      <Tabs defaultValue="upcoming" className="w-full relative z-10">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gradient-to-r from-[#9B59B6]/30 to-[#FF69B4]/30 rounded-lg p-1 shadow-md">
          <TabsTrigger
            value="upcoming"
            className="text-[#9B59B6] data-[state=active]:bg-[#FF69B4] data-[state=active]:text-white rounded-md transition-all duration-300 hover:bg-[#FF69B4]/20"
          >
            Upcoming Activities
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="text-[#9B59B6] data-[state=active]:bg-[#FF69B4] data-[state=active]:text-white rounded-md transition-all duration-300 hover:bg-[#FF69B4]/20"
          >
            Past Activities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-200">No upcoming events yet. Stay tuned!</p>
              </div>
            )}
            {upcomingEvents.map((event) => (
              <motion.div key={event.id} variants={cardVariants}>
                <Card className="group overflow-hidden border-2 border-[#9B59B6] hover:border-[#FF69B4] bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 hover:shadow-xl hover:shadow-[#FF69B4]/40 transition-all duration-300 rounded-xl relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 p-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                      <div className="absolute inset-2 bg-[#4B1959]/20 rounded-md shadow-inner shadow-[#FF69B4]/30"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-[#FF69B4] rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF69B4] rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9B59B6] rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9B59B6] rounded-br-lg"></div>
                      <motion.img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="relative w-full max-h-[300px] object-contain rounded-md group-hover:scale-105 transition-transform duration-300 z-10"
                        variants={imageVariants}
                      />
                    </div>
                    <motion.div
                      className="md:col-span-2 p-6 flex flex-col justify-between"
                      variants={contentVariants}
                    >
                      <div>
                        <CardHeader className="p-0 pb-4">
                          <CardTitle className="text-2xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300">
                            {event.title}
                          </CardTitle>
                          <p className="text-base text-gray-200 mt-2">{event.description}</p>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4 mt-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[#9B59B6]" />
                              <span>
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[#9B59B6]" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-[#9B59B6]" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-5 w-5 text-[#9B59B6]" />
                              <span>
                                {event.registered} / {event.capacity} registered
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                      <CardFooter className="p-0 pt-6">
                        <Button
                          onClick={() => handleSeeDetails(event)}
                          className="bg-[#9B59B6] hover:bg-[#FF69B4] text-white transition-all duration-300 hover:scale-105 rounded-lg shadow-md"
                        >
                          See Details
                        </Button>
                      </CardFooter>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="past">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pastEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-200">No past events to display.</p>
              </div>
            )}
            {pastEvents.map((event) => (
              <motion.div key={event.id} variants={cardVariants}>
                <Card className="group overflow-hidden border-2 border-[#9B59B6] hover:border-[#FF69B4] bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 hover:shadow-xl hover:shadow-[#FF69B4]/40 transition-all duration-300 rounded-xl relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 p-4 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9B59B6] to-[#FF69B4] rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                      <div className="absolute inset-2 bg-[#4B1959]/20 rounded-md shadow-inner shadow-[#FF69B4]/30"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-[#FF69B4] rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF69B4] rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#9B59B6] rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9B59B6] rounded-br-lg"></div>
                      <motion.img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="relative w-full max-h-[300px] object-contain rounded-md group-hover:scale-105 transition-transform duration-300 z-10"
                        variants={imageVariants}
                      />
                    </div>
                    <motion.div
                      className="md:col-span-2 p-6 flex flex-col justify-between"
                      variants={contentVariants}
                    >
                      <div>
                        <CardHeader className="p-0 pb-4">
                          <CardTitle className="text-2xl text-[#9B59B6] group-hover:text-[#FF69B4] transition-colors duration-300">
                            {event.title}
                          </CardTitle>
                          <p className="text-base text-gray-200 mt-2">{event.description}</p>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4 mt-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-[#9B59B6]" />
                              <span>
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-[#9B59B6]" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-[#9B59B6]" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-5 w-5 text-[#9B59B6]" />
                              <span>
                                {event.registered} / {event.capacity} attended
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                      <CardFooter className="p-0 pt-6">
                        <Button
                          onClick={() => handleSeeDetails(event)}
                          className="bg-[#9B59B6] hover:bg-[#FF69B4] text-white transition-all duration-300 hover:scale-105 rounded-lg shadow-md"
                        >
                          See Details
                        </Button>
                      </CardFooter>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Gallery Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl bg-gradient-to-br from-[#4B1959]/20 to-[#9B59B6]/10 rounded-lg border-2 border-[#9B59B6]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#9B59B6]">{selectedEvent?.title} - Gallery</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[500px] w-full rounded-md border-2 border-[#FF69B4]/50 p-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="columns-2 md:columns-3 gap-4"
            >
              {selectedEvent?.galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  variants={galleryVariants}
                  className="mb-4 cursor-pointer"
                  onClick={() => handleImageClick(img)} // Trigger upscale on click
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${selectedEvent.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-md hover:scale-105 transition-transform duration-300 shadow-sm border border-[#9B59B6]/50"
                  />
                </motion.div>
              ))}
            </motion.div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Upscaled Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={upscaleVariants}
            className="relative flex items-center justify-center"
          >
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Upscaled Gallery Image"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg border-2 border-[#FF69B4]"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-[#9B59B6] hover:bg-[#FF69B4] text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
            >
              ✕
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0% { opacity: 0.75; }
          50% { opacity: 1; }
          100% { opacity: 0.75; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}