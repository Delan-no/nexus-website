import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "CEO, TechVenture",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "NEXUS m'a permis de diversifier mon portefeuille avec des opportunités que je n'aurais jamais découvertes seule. Le réseau est exceptionnel et les rendements dépassent mes attentes.",
      rating: 5,
    },
    {
      name: "Marc Lefebvre",
      role: "Investisseur privé",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "L'expertise collective de NEXUS est incomparable. Chaque investissement est analysé en profondeur par des experts. J'ai multiplié mon capital par 3 en 2 ans.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Directrice Financière",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "La plateforme d'analyse de NEXUS utilise l'IA pour identifier les meilleures opportunités. C'est révolutionnaire pour quelqu'un comme moi qui n'a pas le temps d'analyser chaque deal.",
      rating: 5,
    },
    {
      name: "Thomas Chen",
      role: "Entrepreneur",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Grâce à NEXUS, j'ai pu investir dans des startups prometteuses dès leurs premiers tours. L'accès privilégié aux deals privés est un véritable game-changer.",
      rating: 5,
    },
    {
      name: "Amélie Martin",
      role: "Gestionnaire de patrimoine",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Les événements exclusifs de NEXUS m'ont permis de rencontrer des entrepreneurs brillants et d'investir dans leurs projets avant tout le monde. Le ROI est exceptionnel.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Angel Investor",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "NEXUS combine le meilleur de l'investissement traditionnel et de l'innovation. Leur approche data-driven et leur réseau exclusif font toute la différence.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              membres
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages de nos membres qui ont transformé leur approche de l'investissement avec NEXUS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-purple-600/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-purple-600/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mr-1"
                      ></div>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/5 to-violet-600/5 rounded-2xl p-8 border border-purple-600/10">
            <h3 className="text-2xl font-bold mb-4">Rejoignez une communauté d'exception</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos membres partagent leurs succès, leurs stratégies et leurs opportunités. Ensemble, nous construisons
              l'avenir de l'investissement intelligent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
