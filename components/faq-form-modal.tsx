import { useState, useEffect } from "react";
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

interface FAQFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues?: {
    option?: string;
    description?: string;
    isactive?: boolean;
  };
  onSubmit: (values: {
    option: string;
    description: string;
    isactive: boolean;
  }) => Promise<void>;
  mode: "ajout" | "edition";
}

export function FAQFormModal({ open, onOpenChange, initialValues, onSubmit, mode }: FAQFormModalProps) {
  const [option, setOption] = useState(initialValues?.option || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [isactive, setIsactive] = useState(initialValues?.isactive ?? true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOption(initialValues?.option || "");
    setDescription(initialValues?.description || "");
    setIsactive(initialValues?.isactive ?? true);
  }, [initialValues, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ option, description, isactive });
    setLoading(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>{mode === "ajout" ? "Ajouter une question" : "Éditer la question"}</DialogTitle>
          <DialogDescription>
            {mode === "ajout"
              ? "Remplissez le formulaire pour ajouter une nouvelle question."
              : "Modifiez les informations de la question puis validez."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Question</label>
            <Input value={option} onChange={e => setOption(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Réponse</label>
            <Textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} required />
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={isactive} onCheckedChange={setIsactive} />
            <span className="text-sm">Actif</span>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">
              {loading ? "Enregistrement..." : mode === "ajout" ? "Créer" : "Enregistrer"}
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">Annuler</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 