import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Star,
  Sparkles,
  BookOpen,
  Calendar,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0A2F] to-[#29164D] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-20 w-4 h-4 text-purple-300/30 animate-pulse" />
        <Sparkles className="absolute top-40 right-32 w-6 h-6 text-violet-300/40 animate-pulse delay-300" />
        <Star className="absolute bottom-32 left-40 w-3 h-3 text-purple-200/20 animate-pulse delay-700" />
        <Sparkles className="absolute bottom-20 right-20 w-5 h-5 text-violet-200/30 animate-pulse delay-1000" />
        <Star className="absolute top-60 left-1/2 w-4 h-4 text-purple-300/25 animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-20 pb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="bg-purple-400/20 text-purple-100 border-purple-300/30 mb-6">
              Let's Connect
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
              Anything from comments to questions, I read every message personally and try to respond within 48 hours.
              Your thoughts matter to me, and I look forward to hearing from you!
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Send me a message</h2>
                    <p className="text-purple-100/70">
                      I read every message personally and try to respond within 48 hours.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-purple-100 mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          className="bg-white/10 border-purple-300/30 text-white placeholder:text-purple-200/50 focus:border-purple-300 focus:ring-purple-300/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-purple-100 mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          className="bg-white/10 border-purple-300/30 text-white placeholder:text-purple-200/50 focus:border-purple-300 focus:ring-purple-300/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/10 border-purple-300/30 text-white placeholder:text-purple-200/50 focus:border-purple-300 focus:ring-purple-300/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-purple-100 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What would you like to talk about?"
                        className="bg-white/10 border-purple-300/30 text-white placeholder:text-purple-200/50 focus:border-purple-300 focus:ring-purple-300/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-purple-100 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Share your thoughts, questions, or just say hello..."
                        className="bg-white/10 border-purple-300/30 text-white placeholder:text-purple-200/50 focus:border-purple-300 focus:ring-purple-300/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Options */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Other Ways to Connect</h3>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-400/20 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Email</h4>
                          <p className="text-purple-100/70 text-sm">hello@samosalau.com</p>
                          <p className="text-purple-200/60 text-xs mt-1">Best for detailed inquiries</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-400/20 p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Phone</h4>
                          <p className="text-purple-100/70 text-sm">+234 (809) 3415 875</p>
                          <p className="text-purple-100/70 text-sm">+234 (813) 5291 769</p>
                          <p className="text-purple-200/60 text-xs mt-1">Media inquiries only</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-400/20 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Location</h4>
                          <p className="text-purple-100/70 text-sm">S. O. S. Int’l
                                                                        P. O. Box 1297
                                                                        Agege, Lagos, Nigeria.
                                                                        </p>
                          <p className="text-purple-200/60 text-xs mt-1">Available for local events</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-400/20 p-3 rounded-lg">
                          <Clock className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Response Time</h4>
                          <p className="text-purple-100/70 text-sm">Within 48 hours</p>
                          <p className="text-purple-200/60 text-xs mt-1">Usually much faster!</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Follow My Journey</h3>

                    <div className="grid grid-cols-3 gap-4">
                      <a
                        href="#"
                        className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-purple-300/20 hover:bg-white/10 hover:border-purple-300/40 transition-all duration-300 group"
                      >
                        <Twitter className="w-8 h-8 text-purple-300 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-purple-100/70">Twitter</span>
                      </a>

                      <a
                        href="#"
                        className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-purple-300/20 hover:bg-white/10 hover:border-purple-300/40 transition-all duration-300 group"
                      >
                        <Instagram className="w-8 h-8 text-purple-300 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-purple-100/70">Instagram</span>
                      </a>

                      <a
                        href="#"
                        className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-purple-300/20 hover:bg-white/10 hover:border-purple-300/40 transition-all duration-300 group"
                      >
                        <Linkedin className="w-8 h-8 text-purple-300 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-purple-100/70">LinkedIn</span>
                      </a>
                    </div>

                    <div className="mt-6 p-4 bg-purple-400/10 rounded-lg border border-purple-300/20">
                      <p className="text-purple-100/80 text-sm text-center">
                        <Sparkles className="w-4 h-4 inline mr-2" />
                        Join 50K+ readers following my daily writing insights and behind-the-scenes moments
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="pb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-400/10 to-violet-400/10 backdrop-blur-lg border-purple-300/20">
              <CardContent className="p-8 text-center">
                <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">A Note from Sam</h3>
                <p className="text-purple-100/80 leading-relaxed max-w-2xl mx-auto">
                  "Every message I receive is a gift—a connection across the digital void that reminds me why I write.
                  Whether you're sharing how a story touched you, asking about the writing process, or simply saying
                  hello, know that your words matter to me. I may not be able to respond to everyone immediately, but I
                  read every single message with gratitude and joy."
                </p>
                <div className="mt-6">
                  <p className="text-purple-200/60 italic">— Sam O. Salau</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
