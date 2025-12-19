import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";

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

interface BlogDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog: Blog | null;
}

export function BlogDetailsModal({ open, onOpenChange, blog }: BlogDetailsModalProps) {
  if (!blog) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">
            {blog.titre}
          </DialogTitle>
          <DialogDescription className="text-base">
            {blog.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image de l'article */}
          {blog.image && (
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.titre}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Métadonnées de l'article */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}</span>
            </div>
            
            {blog.auteur && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Par {blog.auteur}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <Badge variant="secondary">{blog.badge}</Badge>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Temps de lecture estimé: {Math.ceil(blog.contenu.split(' ').length / 200)} min</span>
            </div>
          </div>

          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.contenu }}
            />
          </div>

          {/* Tags et catégories */}
          <div className="flex items-center gap-2 pt-4 border-t">
            <span className="text-sm font-medium text-muted-foreground">Catégorie:</span>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              {blog.badge}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 