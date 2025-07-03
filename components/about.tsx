import { Building2, LineChart, Rocket, Shield } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">NEXUS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NEXUS est bien plus qu'un club d'investissement. C'est une communauté exclusive qui réunit les esprits les
            plus brillants du monde financier et entrepreneurial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nous croyons que l'investissement intelligent nécessite plus que du capital. Il faut de l'expertise, un
              réseau solide et l'accès aux meilleures opportunités. NEXUS offre tout cela à ses membres dans un
              environnement exclusif et collaboratif.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre approche combine analyse rigoureuse, innovation technologique et intelligence collective pour
              identifier et saisir les opportunités d'investissement les plus prometteuses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-background rounded-lg border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Startups</h4>
              <p className="text-sm text-muted-foreground">Investissement dans l'innovation</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <LineChart className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Bourse</h4>
              <p className="text-sm text-muted-foreground">Trading et investissement</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Entreprises</h4>
              <p className="text-sm text-muted-foreground">Acquisitions stratégiques</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">Sécurité</h4>
              <p className="text-sm text-muted-foreground">Gestion des risques</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-2xl p-8 border border-purple-600/20">
          <h3 className="text-2xl font-bold mb-4">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-purple-600">Excellence</h4>
              <p className="text-sm text-muted-foreground">Nous visons l'excellence dans chaque investissement</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-600">Transparence</h4>
              <p className="text-sm text-muted-foreground">Communication claire et honnête avec nos membres</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-600">Innovation</h4>
              <p className="text-sm text-muted-foreground">Adoption des dernières technologies et stratégies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
