"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  Heart,
  Users,
  BookOpen,
  Mic,
  Globe,
  Calendar,
  Play,
  Download,
  ArrowRight,
  Church,
  GraduationCap,
  Handshake,
  MessageSquare,
  Star,
  Clock,
  MapPin,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react"
import Message from "@/components/reusables/recentmessage"

export default function Ministries() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        <div
          className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <Badge
              variant="secondary"
              className="bg-purple-500/20 text-purple-200 border-purple-400/30 mb-6 animate-fade-in"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Called to Serve
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                Ministry
              </span>
              <br />
              <span className="text-white">& Entrepreneurship</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Bridging faith and academic excellence through authentic teaching, compassionate leadership, and transformative
              writing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Join Our Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400/50 text-purple-200 hover:bg-purple-500/10 bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Latest Message
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "2,500+", label: "Lives Touched" },
              { icon: BookOpen, number: "15", label: "Books Published" },
              { icon: Mic, number: "500+", label: "Messages Shared" },
              { icon: Globe, number: "15+", label: "Years in Ministry" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-violet-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-4 group-hover:text-purple-200 transition-colors" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Ministries */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                Ministries
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving God's people through diverse expressions of faith, leadership, and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Church,
                title: "Pastoral Leadership",
                description: "Leading with vision, compassion, and biblical wisdom in our growing faith community.",
                color: "from-purple-500/20 to-violet-600/20",
                iconColor: "text-purple-300",
              },
              {
                icon: GraduationCap,
                title: "Teaching & Discipleship",
                description: "Equipping believers through systematic Bible study and spiritual mentorship programs.",
                color: "from-indigo-500/20 to-purple-600/20",
                iconColor: "text-indigo-300",
              },
              {
                icon: BookOpen,
                title: "Author & Writer",
                description: "Sharing biblical truths through books, articles, and devotional content worldwide.",
                color: "from-violet-500/20 to-purple-600/20",
                iconColor: "text-violet-300",
              },
              {
                icon: Heart,
                title: "Community Outreach",
                description: "Demonstrating Christ's love through compassionate action and community service.",
                color: "from-pink-500/20 to-purple-600/20",
                iconColor: "text-pink-300",
              },
              {
                icon: Handshake,
                title: "Counselling & Support",
                description: "Providing biblical counseling and spiritual guidance for life's challenges.",
                color: "from-blue-500/20 to-indigo-600/20",
                iconColor: "text-blue-300",
              },
              {
                icon: Mic,
                title: "Conference Speaking",
                description: "Ministering at conferences, retreats, and events across denominational lines.",
                color: "from-teal-500/20 to-blue-600/20",
                iconColor: "text-teal-300",
              },
            ].map((ministry, index) => (
              <Card
                key={index}
                className={`group bg-gradient-to-br ${ministry.color} backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <ministry.icon className={`w-7 h-7 ${ministry.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-200 transition-colors">
                    {ministry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{ministry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Messages */}
      <Message/>
      {/* Books Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Published{" "}
              <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deepen your faith with resources designed to transform your relationship with God.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Secrets of Successful Students", rating: 4.8, image: "/1.jpg" },
              { title: "Living a 1st class life with a 3rd Class Degree", rating: 4.9, image: "/2.jpg" },
              { title: "Running a Successful Youth Ministry", rating: 4.7, image: "/4.jpg" },
              { title: "Handling Academic Failure", rating: 4.8, image: "/10.jpg" },
            ].map((book, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={book.image}
                      alt={book.title + " cover"}
                      width={300}
                      height={400}
                      className="mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {book.title}
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-400">({book.rating})</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our{" "}
                <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience authentic worship, biblical teaching, and genuine fellowship. All are welcome in God's house.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Sunday Services", detail: "9:00 AM & 11:00 AM" },
                  { icon: MapPin, title: "Location", detail: "123 Faith Avenue, Hope City" },
                  { icon: Mail, title: "Contact", detail: "pastor@gracecommunity.org" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-br from-purple-500/20 to-violet-600/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-gray-300">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-sm border border-purple-400/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-400/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-400/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-400/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
