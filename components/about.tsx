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

        <div className="container mx-auto text-md md:text-lg mb-16">
          <h2 className="text-xl text-center md:text-4xl font-bold mb-4">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">NEXUS</span>
          </h2>
          <p>
            NeXus Capital Group est une société d’investissement panafricaine indépendante, conçue pour structurer, déployer et gérer du capital stratégique au service de la transformation économique de l’Afrique francophone et de l’espace UEMOA.
          </p>
          <p>
          Née de la conviction que l’Afrique ne manque ni de talents ni d’opportunités, mais d’infrastructures financières solides et d’exécution à grande échelle, NeXus Capital se positionne comme un acteur de nouvelle génération, à l’intersection du Private Equity, du Venture Capital, des marchés financiers et de la structuration de véhicules d’investissement.
          </p>
          <p>
          Notre approche repose sur une vision long terme à l’horizon 2050, une discipline institutionnelle rigoureuse et une compréhension fine des réalités africaines, combinées aux standards internationaux de gouvernance, de gestion du risque et de performance.
          </p>
          <p>
          Nous intervenons là où le capital est rare mais décisif : structuration de champions locaux, accompagnement de la croissance, consolidation sectorielle et allocation stratégique sur les marchés financiers.
          </p>
          <p>
          NeXus Capital Group s’inscrit dans une ambition claire : bâtir une plateforme d’investissement de référence, capable de relier l’Afrique aux grands flux mondiaux de capitaux, tout en générant une valeur durable, mesurable et souveraine.
          </p>
          <span>Invest in Africa Dreams.</span>
        </div>

        <div className="grid container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Notre mission est de structurer et d’investir des capitaux intelligents pour bâtir les champions économiques africains de demain.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nous intervenons à chaque étape de la chaîne de valeur — de l’idéation à la croissance, de la structuration à l’acquisition, du marché privé aux marchés financiers — avec une approche disciplinée, long terme et orientée performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Chez NeXus Capital, nous ne finançons pas uniquement des projets. Nous construisons des trajectoires de croissance, des institutions économiques et des héritages financiers.
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
