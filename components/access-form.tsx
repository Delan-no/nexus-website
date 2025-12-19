"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { submitAccessRequest } from "@/app/actions"
import { Loader2, CheckCircle } from "lucide-react"
import { sendCandidatForm } from "@/lib/candidats";

export function AccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  //gestion de message retourné par le back
  const [message, setMessage] =useState<string>("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      // 2. Transformer les données du formulaire
      const data = {
        prenom: formData.get("firstName") as string,
        nom: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        activity: formData.get("activity") as string,
        experience: formData.get("experience") as string,
        capital: formData.get("capital") as string,
        motivation: formData.get("motivation") as string,
        referral: formData.get("referral") as string,
        conditionAccepte: !!formData.get("terms"),
        activateNotifs: !!formData.get("newsletter"),
      };

      
        const response = await sendCandidatForm(data);
    
      if (typeof response === "string") {
        setMessage(response);
      } else if (response && typeof response === "object" && "message" in response) {
        setMessage(response.message);
      }
      setIsSubmitted(true);
      // Optionnel : afficher le message du back
      // alert(typeof message === "string" ? message : message.message);
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setMessage("Une erreur est survenue lors de l'envoi deu formulaire");
    } finally {
      setIsSubmitting(false);
    }
  }
function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  handleSubmit(formData);
}
  if (isSubmitted) {
    return (
      <section id="access" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
               {message && <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                  {message}
                  
                </h3>}
                <p className="text-green-700 dark:text-green-300">
                  Merci pour votre intérêt pour NEXUS. Notre équipe va examiner votre demande et vous contactera dans
                  les 48 heures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="access" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Demander un{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">accès</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez une communauté exclusive d'investisseurs passionnés. Remplissez ce formulaire pour commencer votre
            parcours avec NEXUS.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Formulaire de candidature</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" name="firstName" required placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" name="lastName" required placeholder="Votre nom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="votre.email@exemple.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+229 01 01 01 01 01" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity">Activité professionnelle *</Label>
                  <Select name="activity" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre activité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="porteur">Porteur de projet</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                      <SelectItem value="investisseur">Investisseur privé</SelectItem>
                      <SelectItem value="dirigeant">Dirigeant d'entreprise</SelectItem>
                      <SelectItem value="financier">Professionnel de la finance</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Expérience en investissement *</Label>
                  <Select name="experience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debutant">Débutant (moins de 2 ans)</SelectItem>
                      <SelectItem value="intermediaire">Intermédiaire (2-5 ans)</SelectItem>
                      <SelectItem value="experimente">Expérimenté (5-10 ans)</SelectItem>
                      <SelectItem value="expert">Expert (plus de 10 ans)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capital">Capital d'investissement disponible *</Label>
                  <Select name="capital" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre capital disponible" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-100k">50 000 - 100 000</SelectItem>
                      <SelectItem value="100k-250k">100 000 - 250 000</SelectItem>
                      <SelectItem value="250k-500k">250 000 - 500 000</SelectItem>
                      <SelectItem value="500k-1m">500 000 - 1 000 000</SelectItem>
                      <SelectItem value="1m+">Plus de 1 000 000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Motivation *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    required
                    placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre NEXUS et quels sont vos objectifs d'investissement..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral">Comment avez-vous connu NEXUS ?</Label>
                  <Select name="referral">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recherche">Recherche Google</SelectItem>
                      <SelectItem value="reseaux">Réseaux sociaux</SelectItem>
                      <SelectItem value="recommandation">Recommandation</SelectItem>
                      <SelectItem value="evenement">Événement</SelectItem>
                      <SelectItem value="presse">Article de presse</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      conditions d'utilisation
                    </a>{" "}
                    et la{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      politique de confidentialité
                    </a>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" name="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Je souhaite recevoir les actualités et conseils de NEXUS
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
