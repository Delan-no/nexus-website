"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rocket, ArrowLeft, CheckCircle, Users, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function CombinatorPage() {
  return (
    <div className="min-h-screen nexus-animated-bg">
      <div className="nexus-3d-background" />
      <div className="nexus-particles" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl shadow-lg">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">
              NEXUS Combinator
            </h1>
            <p className="text-xl text-blue-800/90 max-w-3xl mx-auto">
              Pour les porteurs de projets et jeunes entrepreneurs
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg text-justify max-w-none text-blue-900">
              <p className="text-lg leading-relaxed mb-6">
                L'Afrique a besoin de vos rêves. Chaque idée audacieuse, chaque projet innovant peut transformer le continent et impacter le monde. NeXus Combinator a été conçu pour créer les conditions optimales pour l'émergence et le succès des startups en Afrique francophone. Nous offrons un accompagnement complet : financement stratégique, mentorat opérationnel, développement commercial et accès à un réseau d'experts, investisseurs et partenaires internationaux.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Inspiré de Y Combinator, le célèbre incubateur de la Silicon Valley, NeXus Combinator adapte ce modèle de réussite à la réalité africaine. Nous identifions les projets à fort potentiel et les soutenons pour qu'ils deviennent des entreprises durables, créatrices d'emplois et génératrices de valeur sur le continent et au-delà.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-blue-900 mb-3">🚀 Vision 2050</h4>
                <p className="text-blue-800">
                  D'ici 2050, NeXus Combinator sera la maison de fabrication des licornes africaines, propulsant les startups les plus innovantes sur la scène mondiale et transformant l'écosystème entrepreneurial africain.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 font-medium">
                Vous avez un rêve, une idée ou une solution qui peut façonner l'avenir de l'Afrique ? Chez NEXUS, nous vous accueillons comme les héros que vous êtes.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
                <h4 className="text-xl font-bold text-amber-800 mb-2">Rejoignez la Révolution X</h4>
                <p className="text-amber-700">
                  Candidatez dès maintenant et offrez à votre rêve la chance de bâtir l'Afrique à l'ère de la Révolution X.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Candidater au programme
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="votre@email.com" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Téléphone *
                </label>
                <Input placeholder="+212 6XX XXX XXX" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Nom de votre startup *
                </label>
                <Input placeholder="Nom de votre projet" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Décrivez votre projet *
                </label>
                <Textarea 
                  placeholder="Décrivez votre startup, le problème que vous résolvez, votre marché cible..."
                  className="min-h-32"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Stade de développement *
                </label>
                <select className="w-full h-12 px-3 border border-gray-300 rounded-md">
                  <option>Idée</option>
                  <option>Prototype</option>
                  <option>MVP</option>
                  <option>Premiers clients</option>
                  <option>Revenus récurrents</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-semibold text-lg"
              >
                Envoyer ma candidature
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}