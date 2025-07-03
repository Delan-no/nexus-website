import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/10 to-violet-600/10 border border-purple-600/20 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Club d'investissement exclusif</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-600 to-violet-600 bg-clip-text text-transparent">
            Investissez dans l'avenir avec
            <span className="block bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez une communauté exclusive d'investisseurs passionnés. Découvrez les startups les plus prometteuses,
            investissez en bourse avec expertise, et développez votre patrimoine avec les meilleurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-lg px-8 py-6"
              asChild
            >
              <Link href="#access">
                Demander un accès
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-purple-600/20 hover:bg-purple-600/10 bg-transparent"
              asChild
            >
              <Link href="#about">En savoir plus</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Rendements optimisés</h3>
              <p className="text-sm text-muted-foreground">Stratégies d'investissement éprouvées</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Communauté exclusive</h3>
              <p className="text-sm text-muted-foreground">Réseau d'investisseurs expérimentés</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Accès privilégié</h3>
              <p className="text-sm text-muted-foreground">Opportunités d'investissement uniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
