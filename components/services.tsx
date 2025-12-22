import { TrendingUp, BarChart3, Handshake, Users, Globe } from "lucide-react"

export function Services() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent">Nos Domaines d'Intervention</span>
        </h3>
        {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez l'étendue de nos services pour transformer vos ambitions en réalités
        </p> */}
      </div>

      <div className="grid grid-cols-1 text-justify md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Nous transformons les idées audacieuses en entreprises prospères. Nous finançons, accompagnons et propulsons les startups africaines à fort potentiel pour créer les futures licornes du continent. Chaque investissement est sélectionné pour son impact économique et sa capacité à structurer des champions locaux.
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
                2. Trading et investissements sur les marchés financiers
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimisez vos rendements tout en sécurisant votre capital. Nos experts gèrent vos investissements sur les marchés africains et internationaux avec rigueur, stratégie et vision long terme, créant un flux continu de valeur pour le fonds et ses investisseurs.
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
              Bâtir des entreprises solides et compétitives. Nous guidons les fusions, acquisitions et alliances afin de consolider des acteurs clés, renforcer les institutions africaines et générer un impact durable à l'échelle sectorielle et continentale. 
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
                De l'idée au marché, chaque projet bénéficie d'un accompagnement complet : structuration, mentorat stratégique, développement opérationnel et accès à un réseau international. Nous transformons vos rêves en entreprises concrètes, prêtes à attirer les capitaux et à croître durablement.
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
              Connectez-vous aux entrepreneurs, investisseurs et experts visionnaires du continent et de la diaspora. Nous favorisons les collaborations, coalitions et synergies pour faire émerger un écosystème africain puissant, inclusif et structuré, où chaque partenaire contribue à la création de valeur.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

