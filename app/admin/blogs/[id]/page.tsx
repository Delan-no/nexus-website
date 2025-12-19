import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

// TODO: Remplacer par un vrai fetch côté serveur
const blogs = [
  {
    id: "1",
    titre: "Premier article de blog",
    auteur: "Jean Dupont",
    date: "2024-06-01",
    actif: true,
    contenu: "Ceci est le contenu complet du premier article de blog. Il peut contenir du texte, des images, etc.",
  },
  {
    id: "2",
    titre: "Investir en 2024 : les tendances",
    auteur: "Marie Curie",
    date: "2024-05-20",
    actif: false,
    contenu: "Voici un article détaillé sur les tendances d'investissement en 2024...",
  },
];

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id);
  if (!blog) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-purple-600" />
            {blog.titre}
            {blog.actif && (
              <span className="flex items-center text-green-600 text-xs font-semibold ml-2">
                <CheckCircle className="h-4 w-4 mr-1" /> Actif
              </span>
            )}
          </CardTitle>
          <div className="text-sm text-muted-foreground mt-2">
            Par <span className="font-semibold">{blog.auteur}</span> — {new Date(blog.date).toLocaleDateString("fr-FR")}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none text-base text-foreground">
            {blog.contenu}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 