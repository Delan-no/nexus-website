"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const [faqs, setFaqs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios.get("http://localhost:3001/api/details") 
      .then(res => {
        if (res.data && res.data.success) {
          setFaqs(res.data.data)
        } else {
          setError("Erreur lors du chargement des options.")
        }
      })
      .catch(() => setError("Erreur lors du chargement des options."))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur NEXUS et notre approche de l'investissement.
          </p>
        </div>

        <div className="max-w-full mx-auto">
          {loading ? (
            <div className="text-center py-10 text-muted-foreground">Chargement...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq._id || index}
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-lg px-6 hover:border-purple-600/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-purple-600 transition-colors py-6">
                    {faq.option}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.image && (
                      <img
                        src={faq.image}
                        alt={faq.option}
                        className="mb-4 max-h-40 object-contain mx-auto rounded"
                      />
                    )}
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/5 to-violet-600/5 rounded-2xl p-8 border border-purple-600/10">
            <h3 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter pour toute question spécifique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="mailto:contact@nexus-invest.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-600/20 rounded-lg hover:bg-purple-600/10 transition-colors"
              >
                contact@nexus-invest.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
