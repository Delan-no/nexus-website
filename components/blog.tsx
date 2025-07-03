import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function Blog() {
  const articles = [
    {
      title: "Les 10 startups à surveiller en 2024",
      excerpt:
        "Découvrez notre sélection des startups les plus prometteuses dans les secteurs de l'IA, la fintech et la greentech.",
      category: "Startups",
      date: "15 Jan 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Stratégies d'investissement en période d'incertitude",
      excerpt: "Comment adapter son portefeuille face aux turbulences économiques et maximiser ses rendements.",
      category: "Stratégie",
      date: "12 Jan 2024",
      readTime: "8 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "L'IA révolutionne l'analyse financière",
      excerpt:
        "Comment l'intelligence artificielle transforme notre approche de l'investissement et de l'analyse des marchés.",
      category: "Tech",
      date: "10 Jan 2024",
      readTime: "6 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Guide complet : Investir dans les crypto-actifs",
      excerpt: "Tout ce qu'il faut savoir pour investir intelligemment dans les cryptomonnaies et la DeFi.",
      category: "Crypto",
      date: "8 Jan 2024",
      readTime: "12 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "ESG : L'investissement responsable en 2024",
      excerpt: "Pourquoi les critères environnementaux, sociaux et de gouvernance sont devenus incontournables.",
      category: "ESG",
      date: "5 Jan 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Analyse : Le marché des IPO en 2024",
      excerpt: "Notre analyse des introductions en bourse les plus attendues et des opportunités à saisir.",
      category: "Bourse",
      date: "3 Jan 2024",
      readTime: "10 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">NEXUS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informé des dernières tendances, analyses et opportunités d'investissement grâce à nos experts et
            notre communauté.
          </p>
        </div>

        {/* Article en vedette */}
        {featuredArticle && (
          <div className="mb-16">
            <Card className="overflow-hidden border-border/50 hover:border-purple-600/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">Article vedette</Badge>
                    <Badge variant="secondary">{featuredArticle.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:text-purple-600 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-purple-600/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-purple-600/20 hover:bg-purple-600/10 bg-transparent">
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
