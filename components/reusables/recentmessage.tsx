'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
const messages = [
  {
    title: "Walking by Faith",
    series: "Faith Series",
    date: "Dec 10, 2023",
    duration: "42 min",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    image: "/message2.jpg",
  },
  {
    title: "The Gift of Emmanuel",
    series: "Christmas",
    date: "Dec 24, 2023",
    duration: "38 min",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: "/message1.jpg",
  },
  {
    title: "A Heart of Gratitude",
    series: "Worship",
    date: "Nov 26, 2023",
    duration: "35 min",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    image: "/message3.jpg",
  },
];

import { X } from "lucide-react";

const Message = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  return (
    <section>
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-black/20 to-purple-900/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent{" "}
                <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                    Messages
                </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be encouraged and challenged in your faith journey through God's word.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {messages.map((message, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer transition-transform hover:scale-105"
                    onClick={() => {
                      setSelectedVideo(message.videoUrl);
                      setSelectedTitle(message.title);
                      setOpen(true);
                    }}
                  >
                    <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <Image
                          src={message.image ?? "/default-image.jpg"}
                          alt={message.title}
                          className="object-cover w-full h-full"
                          fill />
                      </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button
                                size="sm"
                                className="bg-white/90 text-gray-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-transform"
                                >
                                <Play className="w-4 h-4 mr-2" />
                                Play
                                </Button>
                            </div>
                        </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/30 mb-3">
                        {message.series}
                      </Badge>
                      <h3 className="font-semibold text-lg text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {message.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{message.date}</span>
                        <span>{message.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button
                variant="outline"
                size="lg"
                className="border-purple-400/50 text-purple-200 hover:bg-purple-500/10 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                View All Messages
                <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
            </div>

            {/* Modal/Card for YouTube Video */}
            {open && selectedVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative p-4">
                  <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-gray-900">{selectedTitle}</h2>
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      width="100%"
                      height="315"
                      src={selectedVideo}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0 }}
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
        </section>
    </section>
  );
};

export default Message;
