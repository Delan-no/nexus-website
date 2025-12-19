'use client'

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, DollarSign, Calendar, Search, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import axios from "axios"

// Définition du type pour une demande
export type Demande = {
  _id: string
  prenom: string
  nom: string
  email: string
  phone: string
  activity: string
  experience: string
  capital: string
  motivation: string
  referral: string
  conditionAccepte: boolean
  ActivateNotifs: boolean
  date: string
}

function formatDate(dateStr: any) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AdminRequests() {
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3001/api/candidats")
      .then(res => {
        setDemandes(res.data.data || [])
        setLoading(false)
      })
      .catch(e => {
        setError("Erreur lors du chargement des demandes." as any)
        setLoading(false)
      })
  }, [])

  // Stats
  const total = demandes.length
  const thisWeek = useMemo(() => demandes.filter((req) => {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return new Date(req.date) > weekAgo
  }).length, [demandes])
  const experimentes = useMemo(() => demandes.filter((req) => req.experience?.toLowerCase().includes("exp")).length, [demandes])
  const grosCapitaux = useMemo(() => demandes.filter((req) => Number(req.capital) >= 500000).length, [demandes])

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="px-4 sm:px-6 lg:px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Demandes d'
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">accès</span>
          </h1>
          <p className="text-muted-foreground">Gérez les candidatures pour rejoindre NEXUS</p>
        </div>
        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{total}</p>
                  <p className="text-sm text-muted-foreground">Total demandes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{thisWeek}</p>
                  <p className="text-sm text-muted-foreground">Cette semaine</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{experimentes}</p>
                  <p className="text-sm text-muted-foreground">Expérimentés</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{grosCapitaux}</p>
                  <p className="text-sm text-muted-foreground">Gros capitaux</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Tableau des demandes */}
        {loading ? (
          <div className="text-center py-12 text-lg text-muted-foreground">Chargement...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <DemandesTable demandes={demandes} />
        )}
      </div>
    </div>
  )
}

function DemandesTable({ demandes }: { demandes: Demande[] }) {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Demande | null>(null)
  const [open, setOpen] = useState(false)
  const perPage = 5

  const filtered = useMemo(() =>
    demandes.filter((d) =>
      (d.prenom + " " + d.nom + " " + d.email).toLowerCase().includes(search.toLowerCase())
    ), [search, demandes]
  )
  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4 gap-2">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou email..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          className="border rounded px-2 py-1 w-full max-w-xs focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="p-2 text-left">Prénom</th>
              <th className="p-2 text-left">Nom</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Téléphone</th>
              {/* <th className="p-2 text-left">Activité</th> */}
              {/* <th className="p-2 text-left">Expérience</th> */}
              <th className="p-2 text-left">Capital (€)</th>
              {/* <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Motivation</th> */}
              {/* <th className="p-2 text-left">Referral</th> */}
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center p-8 text-muted-foreground">Aucune demande trouvée.</td>
              </tr>
            )}
            {paginated.map((d) => (
              <tr key={d._id} className="border-b hover:bg-muted/30">
                <td className="p-2">{d.prenom}</td>
                <td className="p-2">{d.nom}</td>
                <td className="p-2 ">{d.email}</td>
                <td className="p-2">{d.phone}</td>
                {/* <td className="p-2">{d.activity}</td>
                <td className="p-2">{d.experience}</td> */}
                <td className="p-2">{d.capital}</td>
                {/* <td className="p-2">{formatDate(d.date)}</td>
                <td className="p-2 max-w-xs truncate" title={d.motivation}>{d.motivation}</td> */}
                {/* <td className="p-2">{d.referral}</td> */}
                <td className="p-2 text-center">
                  <button
                    className="hover:text-purple-600 transition-colors"
                    title="Voir les détails"
                    onClick={() => { setSelected(d); setOpen(true) }}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-muted-foreground">
          Page {page} sur {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-muted text-muted-foreground disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Précédent
          </button>
          <button
            className="px-3 py-1 rounded bg-muted text-muted-foreground disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages || totalPages === 0}
          >
            Suivant
          </button>
        </div>
      </div>
      {/* Modal de détails */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-full p-8 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="mb-3">Détails de la demande</DialogTitle>
            <DialogDescription className="mb-3">
              {selected ? `Demande de ${selected.prenom} ${selected.nom}` : ''}
            </DialogDescription>
          </DialogHeader>
          {selected && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2"><span className="font-semibold">👤 Prénom :</span> <span>{selected.prenom}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">👥 Nom :</span> <span>{selected.nom}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">✉️ Email :</span> <span>{selected.email}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">📞 Téléphone :</span> <span>{selected.phone}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">💼 Activité :</span> <span>{selected.activity}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">🎓 Expérience :</span> <span>{selected.experience}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">💰 Capital :</span> <span>{selected.capital} €</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">📅 Date :</span> <span>{formatDate(selected.date)}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">🔗 Referral :</span> <span>{selected.referral}</span></div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">📝 Motivation :</span>
                  <div className="bg-muted/70 rounded p-3 mt-2 text-sm whitespace-pre-line border border-muted">
                    {selected.motivation}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="font-semibold">Conditions acceptées :</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${selected.conditionAccepte ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{selected.conditionAccepte ? 'Oui' : 'Non'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Notifications activées :</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${selected.ActivateNotifs ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{selected.ActivateNotifs ? 'Oui' : 'Non'}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
