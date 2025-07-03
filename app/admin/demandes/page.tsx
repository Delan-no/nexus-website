import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAccessRequests } from "@/app/actions"
import { AdminNavbar } from "@/components/admin-navbar"
import { Users, Mail, Phone, Briefcase, TrendingUp, DollarSign, Calendar } from "lucide-react"

export default async function AdminRequests() {
  const accessRequests = await getAccessRequests()

  const getExperienceBadge = (experience: string) => {
    const badges = {
      debutant: { label: "Débutant", variant: "secondary" as const },
      intermediaire: { label: "Intermédiaire", variant: "default" as const },
      experimente: { label: "Expérimenté", variant: "default" as const },
      expert: { label: "Expert", variant: "destructive" as const },
    }
    return badges[experience as keyof typeof badges] || { label: experience, variant: "secondary" as const }
  }

  const getCapitalBadge = (capital: string) => {
    const badges = {
      "50k-100k": { label: "50K-100K€", variant: "secondary" as const },
      "100k-250k": { label: "100K-250K€", variant: "default" as const },
      "250k-500k": { label: "250K-500K€", variant: "default" as const },
      "500k-1m": { label: "500K-1M€", variant: "destructive" as const },
      "1m+": { label: "+1M€", variant: "destructive" as const },
    }
    return badges[capital as keyof typeof badges] || { label: capital, variant: "secondary" as const }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminNavbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  <p className="text-2xl font-bold">{accessRequests.length}</p>
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
                  <p className="text-2xl font-bold">
                    {
                      accessRequests.filter((req) => {
                        const weekAgo = new Date()
                        weekAgo.setDate(weekAgo.getDate() - 7)
                        return new Date(req.createdAt) > weekAgo
                      }).length
                    }
                  </p>
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
                  <p className="text-2xl font-bold">
                    {
                      accessRequests.filter((req) => req.experience === "expert" || req.experience === "experimente")
                        .length
                    }
                  </p>
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
                  <p className="text-2xl font-bold">
                    {accessRequests.filter((req) => req.capital === "500k-1m" || req.capital === "1m+").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Gros capitaux</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des demandes */}
        <div className="space-y-6">
          {accessRequests.map((request) => (
            <Card key={request.id} className="border-border/50 hover:border-purple-600/30 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {request.firstName} {request.lastName}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {new Date(request.createdAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Informations personnelles */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm">{request.email}</span>
                    </div>
                    {request.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-sm">{request.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm capitalize">{request.activity}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge {...getExperienceBadge(request.experience)}>
                        {getExperienceBadge(request.experience).label}
                      </Badge>
                      <Badge {...getCapitalBadge(request.capital)}>{getCapitalBadge(request.capital).label}</Badge>
                      {request.referral && <Badge variant="outline">Via {request.referral}</Badge>}
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h4 className="font-semibold mb-2">Motivation :</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 p-3 rounded-lg">
                      {request.motivation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {accessRequests.length === 0 && (
            <Card className="border-border/50">
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Aucune demande d'accès</h3>
                <p className="text-muted-foreground">Les nouvelles demandes d'accès apparaîtront ici.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
