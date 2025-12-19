"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2, CheckCircle, Plus } from "lucide-react";
import { toast } from "sonner";
import { FAQFormModal } from "@/components/faq-form-modal";

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'ajout' | 'edition'>("ajout");
  const [editFaq, setEditFaq] = useState<any>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/details/all");
        if (res.data && Array.isArray(res.data.data)) {
          setFaqs(res.data.data);
        } else {
          setFaqs([]);
        }
      } catch (e) {
        toast.error("Erreur lors du chargement des FAQ.");
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  // Ouvre la modale pour ajouter 
  const handleAdd = () => {
    setModalMode("ajout");
    setEditFaq(null);
    setModalOpen(true);
  };

  // Ouvre la modale pour éditer 
  const handleEdit = (faq: any) => {
    setModalMode("edition");
    setEditFaq(faq);
    setModalOpen(true);
  };

  // Suppression d'une FAQ
  const handleDelete = async (faq: any) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette question ?")) return;
    try {
      const res = await axios.delete(`http://localhost:3001/api/details/${faq._id}`);
      if (res.data && res.data.success) {
        setFaqs(faqs.filter((f) => f._id !== faq._id));
        toast.success("Question supprimée avec succès !");
      } else {
        toast.error(res.data.message || "Erreur lors de la suppression.");
      }
    } catch (e) {
      toast.error("Erreur réseau lors de la suppression.");
    }
  };

  // Activer/désactiver une FAQ
  const handleToggleActive = async (faq: any) => {
    const action = faq.isactive ? "desactivate" : "activate";
    try {
      const res = await axios.patch(`http://localhost:3001/api/details/${action}/${faq._id}`);
      if (res.data && res.data.success) {
        setFaqs(
          faqs.map((f) =>
            f._id === faq._id ? { ...f, isactive: !faq.isactive } : f
          )
        );
        toast.success(
          faq.isactive ? "Question désactivée !" : "Question activée !"
        );
      } else {
        toast.error(res.data.message || "Erreur lors du changement d'état.");
      }
    } catch (e) {
      toast.error("Erreur réseau lors du changement d'état.");
    }
  };

  // Ajout/édition d'une FAQ
  const handleSubmit = async (values: { option: string; description: string; isactive: boolean }) => {
    try {
      if (modalMode === "ajout") {
        const res = await axios.post("http://localhost:3001/api/details", values);
        if (res.data && res.data.success && res.data.data) {
          setFaqs([res.data.data, ...faqs]);
          toast.success("Question ajoutée avec succès !");
        } else {
          toast.error(res.data.message || "Erreur lors de l'ajout.");
        }
      } else if (modalMode === "edition" && editFaq) {
        const res = await axios.put(`http://localhost:3001/api/details/${editFaq._id}`, values);
        if (res.data && res.data.success) {
          setFaqs(faqs.map(f => f._id === editFaq._id ? { ...f, ...values } : f));
          toast.success("Question modifiée avec succès !");
        } else {
          toast.error(res.data.message || "Erreur lors de la modification.");
        }
      }
    } catch (e) {
      toast.error("Erreur réseau lors de l'enregistrement.");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <span className="mr-2 text-purple-600">FAQ</span>
            </h1>
            <p className="text-muted-foreground">Gérez les questions/réponses affichées sur la plateforme</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white" onClick={handleAdd}>
            <Plus className="h-5 w-5 mr-2" />
            Ajouter une question
          </Button>
        </div>

        {/* Modal d'ajout/édition à implémenter plus tard */}
        <FAQFormModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          initialValues={modalMode === "edition" && editFaq ? editFaq : undefined}
          onSubmit={handleSubmit}
          mode={modalMode}
        />

        {loading ? (
          <div className="text-center text-muted-foreground py-12">Chargement des questions...</div>
        ) : faqs.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">Aucune question pour le moment.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <Card key={faq._id} className="border-border/50 hover:border-purple-600/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{faq.option}</span>
                    {faq.isactive ? (
                      <span className="flex items-center text-green-600 text-xs font-semibold">
                        <CheckCircle className="h-4 w-4 mr-1" /> Actif
                      </span>
                    ) : (
                      <span className="flex items-center text-gray-400 text-xs font-semibold">
                        <CheckCircle className="h-4 w-4 mr-1" /> Inactif
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-sm text-muted-foreground">{faq.description}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(faq)}>
                      <Edit className="h-4 w-4 mr-1" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200" onClick={() => handleDelete(faq)}>
                      <Trash2 className="h-4 w-4 mr-1" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleActive(faq)}
                      className={faq.isactive ? "bg-red-100 text-red-600 border-red-200 hover:bg-red-200" : "bg-green-100 text-green-600 border-green-200 hover:bg-green-200"}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {faq.isactive ? "Désactiver" : "Activer"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 