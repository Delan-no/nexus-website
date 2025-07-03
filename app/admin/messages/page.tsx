import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getContactMessages } from "@/app/actions"
import { AdminNavbar } from "@/components/admin-navbar"
import { MessageSquare, Mail, Phone, Calendar, Clock } from "lucide-react"

export default async function AdminMessages() {
  const contactMessages = await getContactMessages()

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminNavbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Messages{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">reçus</span>
          </h1>
          <p className="text-muted-foreground">Gérez les messages de contact de votre site</p>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{contactMessages.length}</p>
                  <p className="text-sm text-muted-foreground">Total messages</p>
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
                      contactMessages.filter((msg) => {
                        const weekAgo = new Date()
                        weekAgo.setDate(weekAgo.getDate() - 7)
                        return new Date(msg.createdAt) > weekAgo
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
                <Clock className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold">
                    {
                      contactMessages.filter((msg) => {
                        const today = new Date().toDateString()
                        return new Date(msg.createdAt).toDateString() === today
                      }).length
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">Aujourd'hui</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des messages */}
        <div className="space-y-6">
          {contactMessages.map((message) => (
            <Card key={message.id} className="border-border/50 hover:border-purple-600/30 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{message.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{new Date(message.createdAt).toLocaleDateString("fr-FR")}</Badge>
                    <Badge variant="secondary">
                      {new Date(message.createdAt).toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Informations de contact */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm">{message.email}</span>
                    </div>
                    {message.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-sm">{message.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Sujet */}
                  <div>
                    <h4 className="font-semibold mb-2">Sujet :</h4>
                    <p className="text-sm bg-muted/50 p-2 rounded">{message.subject}</p>
                  </div>

                  {/* Message */}
                  <div>
                    <h4 className="font-semibold mb-2">Message :</h4>
                    <div className="text-sm text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-lg border-l-4 border-purple-600/30">
                      {message.message.split("\n").map((line: string, index: number) => (
                        <p key={index} className={index > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {contactMessages.length === 0 && (
            <Card className="border-border/50">
              <CardContent className="p-12 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Aucun message</h3>
                <p className="text-muted-foreground">Les nouveaux messages de contact apparaîtront ici.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
