import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAccessRequests, getContactMessages } from "@/app/actions"
import { Users, MessageSquare, TrendingUp, Calendar } from "lucide-react"
import { AdminNavbar } from "@/components/admin-navbar"

export default async function AdminDashboard() {
  const accessRequests = await getAccessRequests()
  const contactMessages = await getContactMessages()

  const stats = [
    {
      title: "Demandes d'accès",
      value: accessRequests.length,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Messages reçus",
      value: contactMessages.length,
      icon: MessageSquare,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Cette semaine",
      value: accessRequests.filter((req) => {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return new Date(req.createdAt) > weekAgo
      }).length,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Aujourd'hui",
      value: accessRequests.filter((req) => {
        const today = new Date().toDateString()
        return new Date(req.createdAt).toDateString() === today
      }).length,
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminNavbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Tableau de bord{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">NEXUS</span>
          </h1>
          <p className="text-muted-foreground">Vue d'ensemble de l'activité de votre plateforme</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activité récente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dernières demandes d'accès */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Dernières demandes d'accès
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessRequests.slice(0, 5).map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">
                        {request.firstName} {request.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <p className="text-xs text-muted-foreground">{request.activity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {new Date(request.createdAt).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </div>
                ))}
                {accessRequests.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">Aucune demande pour le moment</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Derniers messages */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                Derniers messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactMessages.slice(0, 5).map((message) => (
                  <div key={message.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{message.name}</p>
                      <p className="text-sm text-muted-foreground">{message.subject}</p>
                      <p className="text-xs text-muted-foreground">{message.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {new Date(message.createdAt).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </div>
                ))}
                {contactMessages.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">Aucun message pour le moment</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
