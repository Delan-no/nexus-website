"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Network, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConnectPage() {
  return (
    <div className="min-h-screen nexus-animated-bg">
      <div className="nexus-3d-background" />
      <div className="nexus-particles" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center nexus-text-secondary hover:nexus-text mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 nexus-gradient rounded-2xl shadow-lg">
                <Network className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black nexus-text mb-6">
              NEXUS Connect
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="nexus-surface/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold nexus-text mb-8">Rejoignez l'élite entrepreneuriale</h2>

            <div className="prose prose-lg max-w-none text-justify nexus-text">
              <p className="text-lg leading-relaxed mb-6 nexus-text-secondary">
                L'Afrique n'a plus besoin d'individualités isolées. Elle a besoin de fortes institutions, de réseaux puissants et de coalitions stratégiques capables de transformer le continent et de rivaliser avec les plus grands acteurs mondiaux. NeXus Connect rassemble les entrepreneurs, hommes d'affaires, experts et consultants autour d'opportunités de croissance, de partenariats stratégiques et de développement international.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 nexus-text-secondary">
                Inspiré des plus grands clubs d'affaires et réseaux d'entrepreneurs du monde, NeXus Connect offre un environnement unique pour développer l'influence, sécuriser les transactions et accélérer le succès des entreprises africaines. Nous connectons les leaders visionnaires, facilitons les échanges et fournissons les outils nécessaires pour bâtir des institutions solides, pérennes et compétitives à l'échelle mondiale.
              </p>
              
              <div className="bg-gradient-to-r from-[hsl(var(--nexus-primary))]/10 to-[hsl(var(--nexus-secondary))]/10 nexus-border border rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold nexus-text mb-3">🚀 Vision 2050</h4>
                <p className="nexus-text-secondary">
                  D'ici 2050, NeXus Connect sera la référence africaine en matière de networking et de développement d'affaires, un catalyseur incontournable pour la création de réseaux puissants et d'institutions capables de rivaliser avec les leaders mondiaux.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 font-medium nexus-text">
                Vous êtes un entrepreneur, un expert ou un consultant avec l'ambition de bâtir quelque chose de grand pour l'Afrique ? Chez NEXUS, nous vous accueillons comme les bâtisseurs du futur.
              </p>
              
              <div className="bg-gradient-to-r from-[hsl(var(--nexus-secondary))]/10 to-[hsl(var(--nexus-secondary))]/5 nexus-border-variant border rounded-lg p-6 mt-8">
                <h4 className="text-xl font-bold text-[hsl(var(--nexus-secondary))] mb-2"> Rejoignez la Révolution X</h4>
                <p className="nexus-text-secondary">
                  Rejoignez NeXus Connect dès maintenant et participez à la construction des institutions et réseaux qui façonneront l'Afrique à l'ère de la Révolution X.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto">
          <div className="nexus-surface/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold nexus-text mb-8 text-center">
              Demander l'adhésion
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
                  Entreprise *
                </label>
                <Input placeholder="Nom de votre entreprise" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Poste *
                </label>
                <Input placeholder="Votre fonction" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Secteur d'activité *
                </label>
                <select className="w-full h-12 px-3 nexus-border border rounded-md nexus-surface">
                  <option>Fintech</option>
                  <option>E-commerce</option>
                  <option>Agritech</option>
                  <option>Healthtech</option>
                  <option>Edtech</option>
                  <option>Immobilier</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium nexus-text mb-2">
                  Présentez votre parcours *
                </label>
                <Textarea 
                  placeholder="Parlez-nous de votre entreprise, vos réalisations, votre vision..."
                  className="min-h-32"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 nexus-gradient text-white font-semibold text-lg"
              >
                Soumettre ma candidature
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}