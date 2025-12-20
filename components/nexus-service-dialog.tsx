"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Rocket, Network, Briefcase, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

type ServiceType = "combinator" | "connect" | "club-deal"

type NexusServiceDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceType: ServiceType | null
}

const serviceContents = {
  combinator: {
    icon: Rocket,
    title: "NeXus Combinator",
    subtitle: "Pour les porteurs de projets et jeunes entrepreneurs",
    content: [
      "L'Afrique a besoin de vos rêves. Chaque idée audacieuse, chaque projet innovant peut transformer le continent et impacter le monde. NeXus Combinator a été conçu pour créer les conditions optimales pour l'émergence et le succès des startups en Afrique francophone. Nous offrons un accompagnement complet : financement stratégique, mentorat opérationnel, développement commercial et accès à un réseau d'experts, investisseurs et partenaires internationaux.",
      "Inspiré de Y Combinator, le célèbre incubateur de la Silicon Valley, NeXus Combinator adapte ce modèle de réussite à la réalité africaine. Nous identifions les projets à fort potentiel et les soutenons pour qu'ils deviennent des entreprises durables, créatrices d'emplois et génératrices de valeur sur le continent et au-delà.",
      "D'ici 2050, NeXus Combinator sera la maison de fabrication des licornes africaines, propulsant les startups les plus innovantes sur la scène mondiale et transformant l'écosystème entrepreneurial africain.",
      "Vous avez un rêve, une idée ou une solution qui peut façonner l'avenir de l'Afrique ? Chez NEXUS, nous vous accueillons comme les héros que vous êtes. Candidatez dès maintenant et offrez à votre rêve la chance de bâtir l'Afrique à l'ère de la Révolution X."
    ],
    ctaText: "Candidater maintenant"
  },
  connect: {
    icon: Network,
    title: "NeXus Connect",
    subtitle: "Pour les entrepreneurs, experts et consultants",
    content: [
      "L'Afrique n'a plus besoin d'individualités isolées. Elle a besoin de fortes institutions, de réseaux puissants et de coalitions stratégiques capables de transformer le continent et de rivaliser avec les plus grands acteurs mondiaux. NeXus Connect rassemble les entrepreneurs, hommes d'affaires, experts et consultants autour d'opportunités de croissance, de partenariats stratégiques et de développement international.",
      "Inspiré des plus grands clubs d'affaires et réseaux d'entrepreneurs du monde, NeXus Connect offre un environnement unique pour développer l'influence, sécuriser les transactions et accélérer le succès des entreprises africaines. Nous connectons les leaders visionnaires, facilitons les échanges et fournissons les outils nécessaires pour bâtir des institutions solides, pérennes et compétitives à l'échelle mondiale.",
      "D'ici 2050, NeXus Connect sera la référence africaine en matière de networking et de développement d'affaires, un catalyseur incontournable pour la création de réseaux puissants et d'institutions capables de rivaliser avec les leaders mondiaux.",
      "Vous êtes un entrepreneur, un expert ou un consultant avec l'ambition de bâtir quelque chose de grand pour l'Afrique ? Chez NEXUS, nous vous accueillons comme les bâtisseurs du futur. Rejoignez NeXus Connect dès maintenant et participez à la construction des institutions et réseaux qui façonneront l'Afrique à l'ère de la Révolution X."
    ],
    ctaText: "Rejoindre NeXus Connect"
  },
  "club-deal": {
    icon: Briefcase,
    title: "NeXus Investor Hubs",
    subtitle: "",
    content: [
      "L’Afrique n’a pas besoin d’argent. Elle a besoin de capitaux stratégiquement mobilisés pour transformer son immense potentiel en un futur économique solide et durable. NeXus Investor Hub s’inspire des plus grands clubs d’investissement mondiaux, tels que Leonis Investissement et BlackRock, pour offrir aux investisseurs une passerelle unique vers des projets à fort impact sur le continent.",
      "Ce Hub n’est pas simplement un véhicule financier : c’est l’instrument par lequel les investisseurs construisent la vision NEXUS, en finançant startups, entreprises et projets stratégiques qui façonneront l’Afrique de demain. Nous offrons une sélection rigoureuse des opportunités, une gestion professionnelle des risques et un accompagnement complet pour maximiser rendement et impact.",
      "D’ici 2050, NeXus Investor Hub sera le moteur financier de NEXUS Capital, le futur BlackRock africain : leader incontesté de l’investissement et catalyseur du développement économique continental. Les capitaux investis ici ne servent pas seulement à générer des profits : ils bâtissent les institutions, les entreprises et les infrastructures qui feront de l’Afrique un acteur central de l’économie mondiale.",
      "Investisseurs africains, diaspora, institutions financières internationales, européens, américains et visionnaires du monde entier : l’Afrique n’attend pas seulement vos fonds, elle attend votre engagement pour transformer son futur. Chez NEXUS, nous vous accueillons comme les architectes du continent de demain. Rejoignez NeXus Investor Hub dès maintenant en envoyant votre dossier via notre formulaire de candidature et participez à la Révolution X."
    ],
    ctaText: "Rejoindre NeXus Investor Hubs"
  }
}

export function NexusServiceDialog({ open, onOpenChange, serviceType }: NexusServiceDialogProps) {
  if (!serviceType) return null

  const service = serviceContents[serviceType]
  const Icon = service.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl border border-purple-200/30 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-purple-900 p-0 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-purple-200/30 opacity-50" />
          <div className="relative p-6 sm:p-10 space-y-8">
            <DialogHeader className="space-y-4 text-left">
              <div className="flex items-center  text-center gap-4 mb-4">
                {/* <div className="p-4 bg-blue-900 rounded-xl shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div> */}
                <div>
                  <DialogTitle className="text-3xl md:text-4xl font-black leading-tight text-purple-900">
                    {service.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg md:text-xl text-purple-700 font-medium mt-2">
                    {service.subtitle}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-purple-800/90">
              {service.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* <div className="pt-6 border-t border-purple-200/50">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:from-blue-800 hover:via-blue-900 hover:to-blue-950 text-white text-base md:text-lg px-8 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
                asChild
              >
                <Link href="#access">
                  <Sparkles className="mr-3 h-5 w-5" />
                  {service.ctaText}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

