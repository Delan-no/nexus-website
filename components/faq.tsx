import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Comment puis-je rejoindre NEXUS ?",
      answer:
        "Pour rejoindre NEXUS, vous devez remplir notre formulaire de demande d'accès. Notre équipe évaluera votre profil et votre expérience en investissement. Nous privilégions les investisseurs expérimentés avec un capital minimum de 100 000 FCFA et une vision à long terme.",
    },
    {
      question: "Quel est le montant minimum d'investissement ?",
      answer:
        "Le montant minimum d'investissement varie selon les opportunités. Pour les startups, il est généralement de 100 000 FCFA, pour les investissements en bourse de 1 000 000 FCFA, et pour les acquisitions d'entreprises de 50 000 000 FCFA. Cependant, nous recommandons un capital disponible d'au moins 10 000 000 FCFA pour diversifier efficacement.",
    },
    {
      question: "Quels sont les frais de membership ?",
      answer:
        "NEXUS fonctionne sur un modèle de cotisation annuelle de 1 500 000 FCFA plus une commission de performance de 20% sur les gains réalisés. Cette structure aligne nos intérêts avec ceux de nos membres et garantit que nous ne gagnons que lorsque vous gagnez.",
    },
    {
      question: "Comment sont sélectionnées les opportunités d'investissement ?",
      answer:
        "Nos opportunités sont rigoureusement sélectionnées par notre comité d'experts composé d'anciens dirigeants de fonds d'investissement, d'entrepreneurs à succès et d'analystes financiers. Nous utilisons également des outils d'IA propriétaires pour analyser les tendances du marché et identifier les secteurs porteurs.",
    },
    {
      question: "Puis-je retirer mes investissements à tout moment ?",
      answer:
        "La liquidité dépend du type d'investissement. Les positions en bourse peuvent généralement être liquidées rapidement, tandis que les investissements dans les startups ou les acquisitions d'entreprises ont des horizons plus longs (3-7 ans). Nous fournissons une estimation de liquidité pour chaque opportunité.",
    },
    {
      question: "Quelle est la performance historique de NEXUS ?",
      answer:
        "Sur les 5 dernières années, NEXUS a généré un rendement annuel moyen de 23% pour ses membres, surperformant les indices traditionnels. Cependant, les performances passées ne garantissent pas les résultats futurs, et tout investissement comporte des risques.",
    },
    {
      question: "Comment puis-je suivre mes investissements ?",
      answer:
        "Tous les membres ont accès à notre plateforme propriétaire qui offre un suivi en temps réel de tous vos investissements, des analyses détaillées, des rapports de performance et des alertes personnalisées. Vous recevez également des rapports mensuels détaillés.",
    },
    {
      question: "NEXUS propose-t-il des formations en investissement ?",
      answer:
        "Oui, nous organisons régulièrement des masterclasses, des webinaires et des événements exclusifs avec des experts reconnus. Nos membres bénéficient également d'un accès à notre bibliothèque de ressources éducatives et peuvent participer à des groupes de travail thématiques.",
    },
  ]

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

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 hover:border-purple-600/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-purple-600 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
