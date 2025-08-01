import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Users, Calendar, Mail, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E0A2F] to-violet-400/10 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                    Bestselling Author
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ">
                  Sam O. Salau
                </h1>
                <p className="text-xl  leading-relaxed">
                  Crafting stories that bridge worlds, cultures, and hearts through the power of magical realism and
                  contemporary fiction.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#9882B5] hover:bg-[#614B91]">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Latest Book
                </Button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#9882B5] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9882B5] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9882B5] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/sam.png?height=600&width=500"
                  alt="Elena Rodriguez - Author Portrait"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-emerald-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white/10 backdrop-blur-lg border-purple-300/20 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-[#9882B5]" />
              </div>
              <div className="text-3xl font-bold ">12</div>
              <div className="">Published Books</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-8 h-8 text-[#9882B5]" />
              </div>
              <div className="text-3xl font-bold ">8</div>
              <div className="">Literary Awards</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-[#9882B5]" />
              </div>
              <div className="text-3xl font-bold ">2M+</div>
              <div className="">Readers Worldwide</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-8 h-8 text-[#9882B5]" />
              </div>
              <div className="text-3xl font-bold ">15</div>
              <div className="">Years Writing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-gray max-w-none">
            <h2 className="text-3xl font-bold mb-8">Who is Sam?</h2>

            <p className="text-lg leading-relaxed  mb-6">
              Sam O Salau is a Personal Development Coach who works with clients in order to 
              develop strategies to build human capital and improve their individual life, 
              thereby improving the quality of service which they deliver to their respective 
              organizations and creating more values.
            </p>

            <p className="text-lg leading-relaxed  mb-6">
              He is an exceptional communicator who is compassionate about the young 
              leaders and deeply committed to their growth, equipping them with the knowledge, 
              practical skills and motivation to carry out their work activities effectively, 
              thereby building the necessary foundation to make them relevant in the future both 
              to themselves and the society at large.
            </p>

            <p className="text-lg leading-relaxed  mb-8">
              He is a strategist who helps forward-looking organizations align 
              its long term corporate objectives with organizational capability development 
              initiatives by builds training programmes from scratch (from the initial idea 
              through planning, implementation, review and outcomes analysis) for his clients. 
              His clientele cuts across different spheres of the economy.
            </p>


            <p className="text-lg leading-relaxed  mb-6">
              An author of over 25 published books, 
              with the best-selling title “Secrets of Successful Students” 
              sold over 150,000 copies, Sam O Salau currently mentors thousands of students, 
              youths, and young adults in and around the country. He studied Mechanical 
              Engineering in Unilag, and is currently a fellow of CMI.
            </p>

            <p className="text-lg leading-relaxed  mb-6">
              He is the Chairman of Josedar International, President of SOS Publications, CEO of 
              Students Self Help resources, Director of PDF Academy, and currently sits on the 
              board of several other companies across the spectrum of Nigerian’s economic space.
              Experienced Chief Executive Officer with a demonstrated history of working in the 
              management development and publishing industry. A Strong business development 
              professional who is Skilled in Team Motivation, Public Speaking, Management 
              Consulting, Pastoral Counseling, and Academic Publishing. Studied Mechanical 
              Engineering from University of Lagos.
              </p>

            <p className="text-lg leading-relaxed  mb-8">
              Sam. O. Salau, Africa’s leading author on campus issues, is a Professional 
              Student Consultant. Having been dealing and speaking with students for the past 
              ten years, the National Students’ Coach, as he is fondly called by the generality 
              of the academic community, has practical solutions to most of the problems students 
              encounter in their academic pursuit.
            </p>

            <p className="text-lg leading-relaxed  mb-6">
              A regular speaker in all major student conferences in his country and its region, 
              the young and dynamic University of Lagos trained Mechanical Engineer has published 
              over 15 titles that are of help to the generality of students both in their 
              academics and other areas of their lives. He is the most read author on campus 
              issues in Africa. Most of his books are recommended study materials for students 
              in his country. Among them are the best sellers Make Money While in School and 
              Secrets of Successful Students. Some of his titles are also available in French.
            </p>

            <p className="text-lg leading-relaxed  mb-6">
             He is a teaching evangelist who is being used by the Lord to deliver so many youths 
             and students who are under the oppression of the devil, thereby depopulating the 
             kingdom of hell. His uncommon gifts and rare abilities have gained him respect among 
             Christian leaders in his country.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
