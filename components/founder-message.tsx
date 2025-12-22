"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FounderMessage() {
  const [showFull, setShowFull] = useState(false)

  const paragraphs = [
    {
      content: "L'Afrique ne manque pas de liquidité, elle manque de capitaux. Son potentiel est colossal : plus de 1,3 milliard d'habitants, une jeunesse audacieuse représentant plus de 60 % de la population d'ici 2050, et un continent riche en talents, en ressources et en idées novatrices. Le Rêve Africain, c'est maintenant que ça se construit. Avec NEXUS, nous investissons dans les rêves de l'Afrique, nous mobilisons les capitaux, l'expertise et les réseaux pour transformer chaque idée, chaque ambition en impact concret."
    },
    {
      content: "Aux investisseurs africains, de la diaspora et internationaux, je dis ceci : l'Afrique n'a pas besoin de liquidités supplémentaires, elle a besoin de capitaux intelligemment mobilisés. En rejoignant NEXUS, vous ne placez pas seulement vos fonds : vous devenez acteur de la Révolution X, bâtisseur du futur économique du continent et partenaire des entrepreneurs qui vont créer les licornes africaines de demain. Avec nous, vos capitaux ne sont pas seulement investis, ils sont stratégiquement orientés pour générer croissance, innovation et impact durable."
    },
    {
      content: "Aux entrepreneurs, hommes d'affaires et consultants expérimentés, je dis : l'Afrique n'a plus besoin d'individualités isolées, elle a besoin de réseaux puissants, de coalitions solides et d'institutions compétitives. NEXUS Connect vous offre la plateforme et le réseau pour bâtir ensemble des entreprises solides et des alliances stratégiques capables de rivaliser sur la scène mondiale. Votre expertise, votre influence et votre vision sont essentielles pour transformer le continent."
    },
    {
      content: "Aux jeunes porteurs de projets et startups, je dis : vos idées comptent, vos rêves comptent. L'Afrique a besoin de vos solutions, de votre audace et de votre créativité. NEXUS Combinator vous accompagne de l'idée au marché, avec financement, mentorat et accès à un réseau international. Rêvez grand, osez innover et construisez les entreprises qui feront briller l'Afrique sur le plan mondial."
    },
    {
      content: "Nous nous inspirons des meilleurs modèles mondiaux : Y Combinator pour l'innovation, BlackRock et Leonis pour la structuration du capital, et les clubs d'affaires internationaux pour les réseaux stratégiques. Mais notre mission est unique : créer un écosystème africain solide, inclusif et compétitif, où chaque projet, chaque entreprise et chaque investisseur contribue à bâtir un continent capable de rivaliser avec le reste du monde."
    },
    {
      content: "Le futur de l'Afrique ne se construira pas demain, il se construit maintenant. Avec NEXUS, chaque rêve devient un projet concret, chaque ambition un moteur de changement. Ensemble, nous pouvons ",
      special: true,
      italicText: "Make Africa's dreams a reality"
    },
    {
      content: "Je vous invite à rejoindre cette aventure historique. Porteurs de projets, entrepreneurs, investisseurs et institutions : votre place est chez NEXUS. Candidatez dès maintenant via notre formulaire et devenez acteur de la Révolution X, architecte de l'Afrique de demain.",
      isLast: true
    }
  ]

  const visibleParagraphs = showFull ? paragraphs : paragraphs.slice(0, 2)

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-2xl p-8 md:p-12 border border-purple-200/50 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
          {/* Photo du fondateur */}
          <div className="relative w-full max-w-[300px]  mx-auto md:mx-0">
            <div className="relative aspect-[3/4] rounded-full overflow-hidden shadow-xl border-4 border-purple-100">
              <Image
                src="/images/founder.jpg"
                alt="Fondateur de NEXUS"
                fill
                className="object-cover "
                priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-xl font-bold text-amber-400">Message from the Founder</h3>
            </div>
          </div>

          {/* Message du fondateur */}
          <div className="space-y-6 text-muted-foreground md:max-h-96 md:overflow-y-auto text-justify leading-relaxed">
            {visibleParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-base ${paragraph.isLast ? 'text-amber-500 font-semibold border-t border-purple-200 pt-6 mt-6' : ''}`}
              >
                {paragraph.special ? (
                  <>
                    {paragraph.content}
                    <span className="font-semibold text-blue-400 italic">{paragraph.italicText}</span>.
                  </>
                ) : (
                  paragraph.content
                )}
              </p>
            ))}

            {!showFull ? (
              <button
                onClick={() => setShowFull(true)}
                className="flex items-center gap-2 text-blue-800/90 hover:text-purple-700 font-semibold transition-colors duration-200 mt-4 group"
              >
                Lire la suite
                <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
              </button>
            ) : (
              <button
                onClick={() => setShowFull(false)}
                className="flex items-center gap-2 text-blue-800/90 hover:text-purple-700 font-semibold transition-colors duration-200 mt-4 group"
              >
                Réduire
                <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

