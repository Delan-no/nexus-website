"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ClubDealPage() {
  return (
    <div className="min-h-screen nexus-animated-bg">
      <div className="nexus-3d-background" />
      <div className="nexus-particles" />
      
      <div className="container mx-auto px-4 py-5 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center nexus-text-secondary hover:nexus-text mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 nexus-gradient rounded-2xl shadow-lg">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black nexus-text mb-6">
              NeXus Investor Hub
            </h1>
            <p className="text-xl nexus-text-secondary max-w-3xl mx-auto">
              Club d'accès privilégié aux deals d'investissement exclusifs
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl text-justify mx-auto mb-16">
          <div className="nexus-surface/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold nexus-text mb-8">Investissez comme un pro</h2>
            <div className="prose prose-lg max-w-none nexus-text">
              <p className="text-lg leading-relaxed mb-6 nexus-text-secondary">
                L'Afrique n'a pas besoin d'argent. Elle a besoin de capitaux stratégiquement mobilisés pour transformer son immense potentiel en un futur économique solide et durable. NeXus Investor Hub s'inspire des plus grands clubs d'investissement mondiaux, tels que Leonis Investissement et BlackRock, pour offrir aux investisseurs une passerelle unique vers des projets à fort impact sur le continent.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 nexus-text-secondary">
                Ce Hub n'est pas simplement un véhicule financier: c'est l'instrument par lequel les investisseurs construisent la vision NEXUS, en finançant startups, entreprises et projets stratégiques qui façonneront l'Afrique de demain. Nous offrons une sélection rigoureuse des opportunités, une gestion professionnelle des risques et un accompagnement complet pour maximiser rendement et impact.
              </p>
              
              <div className="bg-gradient-to-r from-[hsl(var(--nexus-primary))]/10 to-[hsl(var(--nexus-secondary))]/10 nexus-border border rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold nexus-text mb-3">🚀 Vision 2050</h4>
                <p className="nexus-text-secondary">
                  D'ici 2050, NeXus Investor Hub sera le moteur financier de NEXUS Capital, le futur BlackRock africain: leader incontesté de l'investissement et catalyseur du développement économique continental. Les capitaux investis ici ne servent pas seulement à générer des profits: ils bâtissent les institutions, les entreprises et les infrastructures qui feront de l'Afrique un acteur central de l'économie mondiale.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 font-medium nexus-text">
                Investisseurs africains, diaspora, institutions financières internationales, européens, américains et visionnaires du monde entier: l'Afrique n'attend pas seulement vos fonds, elle attend votre engagement pour transformer son futur. Chez NEXUS, nous vous accueillons comme les architectes du continent de demain.
              </p>
              
              <div className="bg-gradient-to-r from-[hsl(var(--nexus-secondary))]/10 to-[hsl(var(--nexus-secondary))]/5 nexus-border-variant border rounded-lg p-6 mt-8">
                <h4 className="text-xl font-bold text-[hsl(var(--nexus-secondary))] mb-2"> Rejoignez la Révolution X</h4>
                <p className="nexus-text-secondary">
                  Participez à la transformation de l'Afrique en envoyant votre dossier via notre formulaire de candidature.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto">
          <div className="nexus-surface/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold nexus-text mb-8 text-center">
              Dossier de candidature
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium nexus-text mb-2">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium nexus-text mb-2">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="votre@email.com" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Téléphone *
                </label>
                <Input placeholder="+212 6XX XXX XXX" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Capacité d'investissement *
                </label>
                <select className="w-full h-12 px-3 nexus-border border rounded-md nexus-surface">
                  <option>10K€ - 50K€</option>
                  <option>50K€ - 100K€</option>
                  <option>100K€ - 500K€</option>
                  <option>500K€ - 1M€</option>
                  <option>1M€+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Expérience d'investissement *
                </label>
                <select className="w-full h-12 px-3 nexus-border border rounded-md nexus-surface">
                  <option>Débutant</option>
                  <option>Quelques investissements</option>
                  <option>Investisseur expérimenté</option>
                  <option>Investisseur professionnel</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Secteurs d'intérêt *
                </label>
                <Textarea 
                  placeholder="Quels secteurs vous intéressent ? (Fintech, Agritech, Healthtech, etc.)"
                  className="min-h-24"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Profil investisseur
                </label>
                <Textarea 
                  placeholder="Parlez-nous de votre profil, vos objectifs d'investissement..."
                  className="min-h-32"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 nexus-gradient text-white font-semibold text-lg"
              >
                Demander l'accès
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}