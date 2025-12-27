"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Sparkles, Shield, Target, Rocket, Network, Briefcase } from "lucide-react"
import Link from "next/link"

export function Hero() {

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex items-center nexus-animated-bg">
      {/* Background 3D NEXUS */}
      <div className="nexus-3d-background" />
      <div className="nexus-particles" />
      <div className="nexus-particles-extra" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="relative mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-blue-900 drop-shadow-lg">
              Avec NEXUS, investissez dans les rêves de l'Afrique.
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-800/90 mb-12 max-w-4xl mx-auto leading-relaxed font-normal drop-shadow-sm">
            Rejoignez l'élite des investisseurs. Accédez aux opportunités les plus exclusives,{" "}
            <span className="text-amber-600 font-semibold">transformez votre patrimoine</span> avec les stratégies des experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <Button
              size="lg"
              variant="outline"
              className="group text-base md:text-lg px-8 md:px-8 py-6 md:py-7 rounded-xl border-2 border-blue-600/30 text-blue-900 bg-blue-50/80 hover:bg-blue-100/90 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/board">
                Découvrir notre Board
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 hover:from-blue-700 hover:via-blue-800 hover:to-amber-700 text-white text-base md:text-lg px-8 md:px-8 py-6 md:py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              asChild
            >
              <Link href="#access">
                <Shield className="mr-2 h-5 w-5 md:mr-3 md:h-6 md:w-6" />
                Accès Exclusif
                <ArrowRight className="ml-2 h-5 w-5 md:ml-3 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Briefcase,
                title: "NeXus Investor Hub",
                description: "Club d'accès privilégié aux deals d'investissement ",
                serviceType: "club-deal",
              },
              {
                icon: Rocket,
                title: "NEXUS Combinator",
                description: "Incubateur, mentorat personnalisé et financement pour les startups",
                serviceType: "combinator",
              },
              {
                icon: Network,
                title: "NEXUS Connect",
                description: "Communauté privée d'entrepreneurs africains à succès",
                serviceType: "connect",
              },
              
            ].map((feature, index) => (
              <Link
                key={index}
                href={`/${feature.serviceType}`}
                className="group relative text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl transition-all duration-300 block"
              >
                <div className="relative bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-4 md:p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 hover:bg-blue-50/85 cursor-pointer">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-md md:text-lg text-center font-bold mb-2 text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-blue-800/80 text-center text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-6 border-t border-blue-300/50">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-base text-blue-800/90">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-blue-700" />
                <span>Sécurisé & Régulé</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-700" />
                <span>100+ Entreprises (startups)</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
                <span>SPV1 500 millions à investir d'ici 2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation de transition vers la section suivante */}
      <div className="nexus-page-transition" />
    </section>
  )
}
