import { TrendingUp, BarChart3, Handshake, Users, Globe } from "lucide-react"

export function Services() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Nos Services</span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez l'étendue de nos services pour transformer vos ambitions en réalités
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1: Investissement dans les startups */}
        <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                1. Investissement dans les startups
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous transformons vos idées audacieuses en entreprises prospères. NEXUS finance, accompagne et propulse les startups pour créer les licornes africaines de demain.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2: Trading et investissement à la Bourse */}
        <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                2. Trading et investissement à la Bourse
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Maximisez vos rendements tout en sécurisant vos capitaux. Nos experts accompagnent vos investissements sur les marchés africains et internationaux avec rigueur et stratégie.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3: Acquisitions stratégiques */}
        <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Handshake className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                3. Acquisitions stratégiques
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bâtir des entreprises solides et compétitives. Nous guidons les fusions, acquisitions et alliances pour renforcer les institutions africaines et créer un impact durable.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4: Incubation et accompagnement opérationnel */}
        <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                4. Incubation et accompagnement opérationnel
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                De l'idée au marché, chaque projet bénéficie d'un mentorat stratégique, d'un développement opérationnel et d'un accès à un réseau international pour transformer vos rêves en succès concret.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5: Réseau inclusif et partenariats stratégiques */}
        <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                5. Réseau inclusif et partenariats stratégiques
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connectez-vous avec des entrepreneurs, experts et investisseurs visionnaires. NEXUS favorise les coalitions et collaborations pour faire émerger un écosystème africain puissant et inclusif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

