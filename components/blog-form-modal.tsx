import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Editor } from "primereact/editor";

interface BlogFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues?: {
    titre?: string;
    auteur?: string;
    contenu?: string;
    image?: string;
    actif?: boolean;
    badge?: string;
    description?: string;
  };
  onSubmit: (values: {
    titre: string;
    auteur: string;
    contenu: string;
    image?: string;
    actif: boolean;
    badge: string;
    description: string;
  }) => void;
  mode: "ajout" | "edition";
}

export function BlogFormModal({ open, onOpenChange, initialValues, onSubmit, mode }: BlogFormModalProps) {
  const [titre, setTitre] = useState(initialValues?.titre || "");
  const [auteur, setAuteur] = useState(initialValues?.auteur || "");
  const [contenu, setContenu] = useState(initialValues?.contenu || "");
  const [image, setImage] = useState<string>("");
  const [actif, setActif] = useState(initialValues?.actif ?? true);
  const [badge, setBadge] = useState(initialValues?.badge || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ titre, auteur, contenu, image, actif, badge, description });
    setLoading(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">
            {mode === "ajout" ? "Nouvel Article" : "Modifier l'Article"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {mode === "ajout"
              ? "Créez un nouvel article de blog pour votre communauté."
              : "Modifiez les informations de l'article."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="titre" className="text-sm font-medium">
                Titre de l'article *
              </Label>
              <Input
                id="titre"
                value={titre}
                onChange={e => setTitre(e.target.value)}
                placeholder="Entrez le titre de l'article"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auteur" className="text-sm font-medium">
                Auteur *
              </Label>
              <Input
                id="auteur"
                value={auteur}
                onChange={e => setAuteur(e.target.value)}
                placeholder="Nom de l'auteur"
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="badge" className="text-sm font-medium">
                Catégorie *
              </Label>
              <Input
                id="badge"
                value={badge}
                onChange={e => setBadge(e.target.value)}
                placeholder="Ex: Investissement, Analyse, Conseil"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-sm font-medium">
                Image de l'article
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = () => setImage(reader.result as string)
                    reader.readAsDataURL(file)
                  }
                }}
                className="w-full"
              />
              {image && (
                <img src={image} alt="Aperçu" className="w-32 h-32 object-cover rounded-md" />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description courte *
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Résumé de l'article en quelques lignes..."
              rows={3}
              required
              className="w-full resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Contenu de l'article *
            </Label>
            <div className="border rounded-md">
              <Editor
                value={contenu}
                onTextChange={e => setContenu(e.htmlValue || "")}
                style={{ height: '300px' }}
                placeholder="Rédigez le contenu de votre article..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
            <Switch
              id="actif"
              checked={actif}
              onCheckedChange={setActif}
            />
            <Label htmlFor="actif" className="text-sm font-medium cursor-pointer">
              Publier l'article immédiatement
            </Label>
          </div>
        </form>

        <DialogFooter className="pt-4 border-t">
          <DialogClose asChild>
            <Button type="button" variant="outline" disabled={loading}>
              Annuler
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Enregistrement...
              </>
            ) : (
              mode === "ajout" ? "Créer l'article" : "Enregistrer les modifications"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
