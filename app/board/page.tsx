"use client"

import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const boardMembers = [
  {
    name: "Dr. Amina Kone",
    role: "Présidente & CEO",
    bio: "Ancienne directrice d'investissement chez Goldman Sachs Africa, spécialisée dans les marchés émergents avec 15 ans d'expérience.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "amina@nexus.com"
  },
  {
    name: "Jean-Baptiste Ouedraogo",
    role: "Directeur des Investissements",
    bio: "Ex-partner chez McKinsey & Company, expert en stratégie d'entreprise et développement des marchés africains.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "jb@nexus.com"
  },
  {
    name: "Sarah Mensah",
    role: "Directrice Technique",
    bio: "Ancienne CTO de Jumia Ghana, pionnière de la transformation digitale en Afrique de l'Ouest.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "sarah@nexus.com"
  },
  {
    name: "Mohamed Al-Rashid",
    role: "Directeur Régional MENA",
    bio: "15 ans d'expérience dans le capital-risque au Moyen-Orient et en Afrique du Nord, ancien VP chez Abraaj Group.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "mohamed@nexus.com"
  }
]

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2 text-blue-700 hover:text-blue-900">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Notre Board</h1>
              <p className="text-blue-700/80">L'équipe dirigeante de NEXUS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Une équipe d'exception
          </h2>
          <p className="text-lg text-blue-800/90 max-w-3xl mx-auto">
            Notre board réunit des experts reconnus dans l'investissement, la technologie et le développement des marchés africains.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-amber-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-900">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-amber-600 font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-blue-800/80 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <Twitter className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Rejoignez notre réseau
            </h3>
            <p className="text-blue-800/80 mb-6">
              Découvrez comment notre équipe peut vous accompagner dans vos projets d'investissement.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white"
              asChild
            >
              <Link href="#access">
                Demander un accès
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}