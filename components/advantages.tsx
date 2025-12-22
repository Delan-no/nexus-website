import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Brain, Globe, Lock, Network, Star } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: BarChart3,
      title: "Vision Panafricaine",
      description: "Faire de NEXUS le leader des investissements stratégiques en Afrique; catalyseur d'un écosystème économique souverain, innovant et connecté au monde.",
      badge: "vision",
    },
    {
      icon: Network,
      title: "Réseau exclusif",
      description: "Accédez à un réseau des plus grands entrepreneurs et experts africains.",
      badge: "Exclusif",
    },
    {
      icon: Brain,
      title: "Intelligence collective",
      description: "Bénéficiez de l'expertise partagée et des analyses approfondies des experts de notre communauté.",
      badge: "Expert",
    },
    {
      icon: Lock,
      title: "Opportunités privées",
      description: "Accès privilégié aux tours de financement privés et aux IPO avant leur ouverture publique.",
      badge: "Privilégié",
    },
    {
      icon: Star,
      title: "Performance supérieure",
      description: "NEXUS transforme chaque investissement en un moteur de croissance et d'innovation pour l'Afrique francophone.",
      badge: "Performance",
    },

    {
      icon: Globe,
      title: "Diversification globale",
      description: "Investissements diversifiés sur tous les continents et secteurs d'activité.",
      badge: "Global",
    },
    
  ]

  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi rejoindre{" "}
            <span className="bg-gradient-to-r text-blue-900 bg-clip-text ">NEXUS</span>{" "}
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avantages exclusifs réservés à nos membres et transformez votre approche de l'investissement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:scale-105 transition-all duration-300 border-border/50 hover:border-purple-600/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {/* <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-lg group-hover:from-purple-600/20 group-hover:to-violet-600/20 transition-colors"> */}
                  <div className="bg-">
                    <advantage.icon className="h-6 w-6 font-bold text-[#1D3F80]" />
                  </div>
                  <Badge variant="secondary" className="bg-white text-[#1D3F80] font-bold border-purple-600/20">
                    {advantage.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#1D3F80] scale- transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center hidden">
          <div className="bg-gradient-to-r from-purple-600/5 to-violet-600/5 rounded-2xl p-8 border border-purple-600/10">
            <h3 className="text-2xl font-bold mb-4">Rejoignez l'élite de l'investissement</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nos membres bénéficient d'un accompagnement personnalisé, d'événements exclusifs et d'un accès privilégié
              aux meilleures opportunités d'investissement du marché.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Membres actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1,6&nbsp;milliard&nbsp;FCFA</div>
                <div className="text-sm text-muted-foreground">Investissement moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
                <div className="text-sm text-muted-foreground">Rendement annuel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
