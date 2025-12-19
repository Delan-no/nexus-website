"use client"

import { useState } from "react"
import { Building2, LineChart, Rocket, Shield } from "lucide-react"
import { AboutServiceDialog } from "@/components/about-service-dialog"
import { Services } from "@/components/services"
import { FounderMessage } from "@/components/founder-message"

type AboutServiceType = "startups" | "bourse" | "entreprises" | "securite"

export function About() {
  const [openService, setOpenService] = useState<AboutServiceType | null>(null)

  return (
    <section id="about" className="relative py-20 bg-muted/30">
      {/* Animation de transition depuis la section précédente */}
      <div className="nexus-page-transition-top" />
      <div className=" px-4 sm:px-6 lg:px-8">
        <FounderMessage />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">NEXUS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Nexus Capital est une société panafricaine d’investissement et de capital-développement dont l’ambition est de faire de l’Afrique une puissance financière autonome, en mobilisant les capitaux locaux, la diaspora et les partenaires internationaux autour de projets durables et stratégiques à fort impact.
          Elle se positionne comme la première plateforme francophone de gestion d’actifs, de capital-investissement et de conseil stratégique dédiée à l’essor des économies africaines.
          </p>
        </div>

        <div className="grid container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nous croyons que l'investissement intelligent nécessite plus que du capital. Il faut de l'expertise, un
              réseau solide et l'accès aux meilleures opportunités. NEXUS offre tout cela à ses membres dans un
              environnement exclusif et collaboratif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre approche combine analyse rigoureuse, innovation technologique et intelligence collective pour
              identifier et saisir les opportunités d'investissement les plus prometteuses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => setOpenService("startups")}
              className="text-center p-6 bg-background rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full group-hover:from-blue-600/20 group-hover:to-amber-500/20 transition-all duration-300">
                  <Rocket className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Startups</h4>
              <p className="text-sm text-muted-foreground">Investissement dans l'innovation</p>
            </button>
            <button
              onClick={() => setOpenService("bourse")}
              className="text-center p-6 bg-background rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full group-hover:from-blue-600/20 group-hover:to-amber-500/20 transition-all duration-300">
                  <LineChart className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Bourse</h4>
              <p className="text-sm text-muted-foreground">Trading et investissement</p>
            </button>
            <button
              onClick={() => setOpenService("entreprises")}
              className="text-center p-6 bg-background rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full group-hover:from-blue-600/20 group-hover:to-amber-500/20 transition-all duration-300">
                  <Building2 className="h-8 w-8 text-amber-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Entreprises</h4>
              <p className="text-sm text-muted-foreground">Acquisitions stratégiques</p>
            </button>
            <button
              onClick={() => setOpenService("securite")}
              className="text-center p-6 bg-background rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full group-hover:from-blue-600/20 group-hover:to-amber-500/20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Sécurité</h4>
              <p className="text-sm text-muted-foreground">Gestion des risques</p>
            </button>
          </div>
        </div>
        <div className="container mx-auto">
            <Services />
        </div>
        <div className="text-center grid container mx-auto bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-2xl p-8 border border-blue-600/20">
          <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-blue-600">Excellence</h4>
              <p className="text-sm text-muted-foreground">Nous visons l'excellence dans chaque investissement</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-blue-600">Transparence</h4>
              <p className="text-sm text-muted-foreground">Communication claire et honnête avec nos membres</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-amber-600">Innovation</h4>
              <p className="text-sm text-muted-foreground">Adoption des dernières technologies et stratégies</p>
            </div>
          </div>
        </div>
      </div>
      <AboutServiceDialog 
        open={openService !== null} 
        onOpenChange={(open) => !open && setOpenService(null)}
        serviceType={openService}
      />
    </section>
  )
}
