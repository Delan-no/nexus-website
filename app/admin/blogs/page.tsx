"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Edit, Trash2, CheckCircle, Plus, Sparkles, AlertTriangle } from "lucide-react";
import { BlogFormModal } from "@/components/blog-form-modal";
import { toast } from "sonner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'ajout' | 'edition'>("ajout");
  const [editBlog, setEditBlog] = useState<any>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/blog/all");
      const blogsData = res.data.data || res.data || [];
      setBlogs(Array.isArray(blogsData) ? blogsData : []);
    } catch (error: any) {
      toast.error("Erreur de chargement", {
        description: error.response?.data?.message || "Impossible de charger les blogs",
        duration: 4000,
      });
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setModalMode("ajout");
    setEditBlog(null);
    setModalOpen(true);
  };

  const handleEdit = (blog: any) => {
    setModalMode("edition");
    setEditBlog(blog);
    setModalOpen(true);
  };

  const handleSubmit = async (values: any) => {
    try {
      if (modalMode === "ajout") {
        const res = await axios.post("http://localhost:3001/api/blog/create", values);
        const newBlog = res.data.data || res.data.blog || res.data;
        
        if (newBlog && newBlog._id) {
          setBlogs([newBlog, ...blogs]);
          toast.success("Blog créé avec succès !", {
            description: `L'article "${values.titre}" a été publié`,
            duration: 3000,
            icon: <Sparkles className="h-4 w-4" />,
          });
          setModalOpen(false);
        } else {
          await fetchBlogs();
          toast.success("Blog créé !", {
            description: "L'article a été ajouté à votre collection",
            duration: 3000,
          });
          setModalOpen(false);
        }
      } else {
        const res = await axios.put(`http://localhost:3001/api/blog/update/${editBlog._id}`, values);
        const updatedBlog = res.data.data || res.data.blog || res.data;
        
        if (updatedBlog && updatedBlog._id) {
          setBlogs(blogs.map(b => b._id === editBlog._id ? updatedBlog : b));
          toast.success("Modifications enregistrées !", {
            description: `L'article "${values.titre}" a été mis à jour`,
            duration: 3000,
            icon: <CheckCircle className="h-4 w-4" />,
          });
          setModalOpen(false);
        } else {
          await fetchBlogs();
          toast.success("Article modifié !", {
            description: "Les changements ont été appliqués",
            duration: 3000,
          });
          setModalOpen(false);
        }
      }
    } catch (error: any) {
      toast.error("Erreur lors de l'opération", {
        description: error.response?.data?.message || "Une erreur inattendue s'est produite",
        duration: 5000,
        icon: <AlertTriangle className="h-4 w-4" />,
      });
    }
  };

  const handleToggleActive = async (blog: any) => {
    try {
      const action = blog.isactive ? "desactiver" : "activer";
      const res = await axios.put(`http://localhost:3001/api/blog/${action}/${blog._id}`);
      setBlogs(blogs.map(b => b._id === blog._id ? { ...b, isactive: !blog.isactive } : b));
      
      toast.success(blog.isactive ? "Article désactivé" : "Article activé", {
        description: blog.isactive 
          ? `"${blog.titre}" n'est plus visible publiquement`
          : `"${blog.titre}" est maintenant visible publiquement`,
        duration: 3000,
        icon: <CheckCircle className="h-4 w-4" />,
      });
    } catch (error: any) {
      toast.error("Erreur de statut", {
        description: error.response?.data?.message || "Impossible de changer le statut",
        duration: 4000,
      });
    }
  };
const MySwal = withReactContent(Swal);

// const handleDelete = async (blog: any) => {
  
//   const result = confirm(`Êtes-vous sûr de vouloir supprimer "${blog.titre}" ?`);
//   if (!result) return;
  
//   try {
//     await axios.delete(`http://localhost:3001/api/blog/supprimer/${blog._id}`);
//     setBlogs(blogs.filter(b => b._id !== blog._id));
//     toast.success("Blog supprimé !", {
//       description: `L'article "${blog.titre}" a été définitivement supprimé`,
//       duration: 3000,
//     });
//   } catch (error: any) {
//     toast.error("Erreur de suppression", {
//       description: error.response?.data?.message || "Impossible de supprimer l'article",
//       duration: 4000,
//     });
//   }
// };




const handleDelete = async (blog: any) => {
  const result = await MySwal.fire({
    title: `Supprimer "${blog.titre}" ?`,
    text: "Cette action est irréversible !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Oui, supprimer",
    cancelButtonText: "Annuler",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  });

  if (!result.isConfirmed) return;

  try {
    await axios.delete(`http://localhost:3001/api/blog/supprimer/${blog._id}`);
    setBlogs(blogs.filter(b => b._id !== blog._id));
    
    toast.success("Blog supprimé !", {
      description: `L'article "${blog.titre}" a été définitivement supprimé`,
      duration: 3000,
    });
  } catch (error: any) {
    toast.error("Erreur de suppression", {
      description: error.response?.data?.message || "Impossible de supprimer l'article",
      duration: 4000,
    });
  }
};



  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Newspaper className="h-7 w-7 mr-2 text-purple-600" />
              Blogs
            </h1>
            <p className="text-muted-foreground">Gérez les articles de blog</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-violet-600" onClick={handleAdd}>
            <Plus className="h-5 w-5 mr-2" />
            Ajouter
          </Button>
        </div>

        <BlogFormModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          initialValues={editBlog}
          onSubmit={handleSubmit}
          mode={modalMode}
        />

        {loading ? (
          <div className="text-center py-12">Chargement...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">Aucun blog</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Card key={blog._id || `blog-${index}`} className="hover:border-purple-600/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="truncate">{blog.titre}</span>
                    <span className={`text-xs px-2 py-1 rounded ${blog.isactive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                      {blog.isactive ? 'Actif' : 'Inactif'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Par {blog.auteur}</p>
                  <p className="text-xs text-muted-foreground mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(blog)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600" onClick={() => handleDelete(blog)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleActive(blog)}
                      className={blog.isactive ? "text-red-600" : "text-green-600"}
                    >
                      <CheckCircle className="h-4 w-4" />
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
