"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Rocket, LineChart, Building2, Shield, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

type AboutServiceType = "startups" | "bourse" | "entreprises" | "securite"

type AboutServiceDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceType: AboutServiceType | null
}

const aboutServiceContents = {
  startups: {
    icon: Rocket,
    title: "Startups",
    subtitle: "Investissement dans l'innovation",
    content: [
      "Grâce à notre approche Private Equity & Capital Venture, NEXUS investit dans les idées et projets les plus audacieux. Nous accompagnons les porteurs de projets de l'idée au marché, avec mentorat, financement et réseau, pour créer les licornes africaines de demain."
    ],
    // ctaText: "En savoir plus"
  },
  bourse: {
    icon: LineChart,
    title: "Bourse",
    subtitle: "Trading et Investissement",
    content: [
      "Nos experts structurent des portefeuilles performants et sécurisent vos capitaux à travers des stratégies de trading et d'investissement ciblées. L'objectif : maximiser le rendement tout en maîtrisant les risques, pour faire de chaque investissement une contribution à la croissance économique africaine."
    ],
    // ctaText: "En savoir plus"
  },
  entreprises: {
    icon: Building2,
    title: "Entreprises",
    subtitle: "Acquisitions stratégiques",
    content: [
      "NEXUS accompagne les entreprises dans leurs projets de croissance, fusions et acquisitions, en optimisant les transactions et en créant des alliances stratégiques. Notre objectif : bâtir des institutions fortes et compétitives capables de rivaliser sur le plan mondial."
    ],
    // ctaText: "En savoir plus"
  },
  securite: {
    icon: Shield,
    title: "Sécurité",
    subtitle: "Gestion des risques",
    content: [
      "La protection des capitaux et la pérennité des projets sont au cœur de notre démarche. NEXUS évalue et anticipe les risques financiers, opérationnels et stratégiques, transformant la gestion des risques en levier de confiance et d'impact durable."
    ],
    // ctaText: "En savoir plus"
  }
}

export function AboutServiceDialog({ open, onOpenChange, serviceType }: AboutServiceDialogProps) {
  if (!serviceType) return null

  const service = aboutServiceContents[serviceType]
  const Icon = service.icon

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border border-purple-200/30 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-purple-900 p-0 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-purple-200/30 opacity-50" />
          <div className="relative p-6 sm:p-10 space-y-8">
            <DialogHeader className="space-y-4 text-left">
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="p-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div> */}
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-black leading-tight text-purple-900">
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
                className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 hover:from-purple-700 hover:via-violet-700 hover:to-purple-800 text-white text-base md:text-lg px-8 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
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

