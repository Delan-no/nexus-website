'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getBlogs } from "@/lib/blog";
import { BlogDetailsModal } from "./blog-details-modal";

type Blog = {
  _id: string;
  titre: string;
  description: string;
  badge: string;
  contenu: string;
  image?: string;
  date: string;
  auteur?: string;
};

export function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
          console.log("Blogs reçus :", data);
          if (data && Array.isArray(data)) {
            setBlogs(data);
          }
           setLoading(false);
        };
    fetchData();
  }, []);

  const handleReadArticle = (blog: Blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

if (loading) {
  return (
    <section className="py-20 text-center">
      <p className="text-lg text-gray-500">Chargement des articles...</p>
    </section>
  );
}

if (!blogs.length) {
  return (
    <section className="py-20 text-center">
      <p className="text-lg text-gray-500">Aucun article disponible pour le moment.</p>
    </section>
  );
}

  const featuredArticle = blogs[0];
  const regularArticles = blogs.slice(1);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              
              
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informé des dernières tendances, analyses et opportunités d'investissement grâce à nos experts et
            notre communauté.
          </p>
        </div>

        {/* Article vedette */}
        {featuredArticle && (
          <div className="mb-16">
            <Card className="overflow-hidden border-border/50 hover:border-purple-600/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
  <img
    src={featuredArticle.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
    alt={featuredArticle.titre}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }}
  />
</div>

                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">Article vedette</Badge>
                    <Badge variant="secondary">{featuredArticle.badge}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:text-purple-600 transition-colors">
                    {featuredArticle.titre}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      {/* si tu veux le readTime, ajoute-le dans ton modèle */}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-purple-600 hover:text-purple-700"
                      onClick={() => handleReadArticle(featuredArticle)}
                    >
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
          {regularArticles.map((article) => (
            <Card
              key={article._id}
              className="group overflow-hidden border-border/50 hover:border-purple-600/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.titre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {article.titre}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 text-xs"
                    onClick={() => handleReadArticle(article)}
                  >
                    Lire l'article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
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

      {/* Modale de détails de l'article */}
      <BlogDetailsModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        blog={selectedBlog}
      />
    </section>
  );
}
