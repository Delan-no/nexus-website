import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Shield, Crown, Users } from "lucide-react"

type BoardMembersProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const boardMembers = [
  {
    name: "Élise Laurent",
    title: "Managing Partner",
    bio: "15 ans d'expérience en capital-investissement, pilote les stratégies d'expansion européenne.",
    focus: ["Private Equity", "M&A", "Europe"],
    impact: "€3.2B déployés",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Kofi Mensah",
    title: "Chief Investment Officer",
    bio: "Spécialiste des marchés émergents, construit des portefeuilles résilients et data-driven.",
    focus: ["Marchés émergents", "Macro", "Data"],
    impact: "ROI moyen 18%",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Lena Moreau",
    title: "Head of Venture",
    bio: "Accompagne les scale-ups deeptech et fintech depuis la seed jusqu'à la série C.",
    focus: ["Deeptech", "Fintech", "Scaling"],
    impact: "42 exits réussis",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Adrian Becker",
    title: "Risk & Compliance",
    bio: "Ancien régulateur, sécurise chaque transaction avec une gouvernance exemplaire.",
    focus: ["Risk", "Compliance", "Structuration"],
    impact: "0 incident majeur",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Farah Khelladi",
    title: "Sustainability Strategist",
    bio: "Intègre les critères ESG avancés pour des investissements à impact élevé.",
    focus: ["ESG", "Impact", "Infra"],
    impact: "56 projets verts",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&w=400&h=400&q=80",
  },
]

export function BoardMembersDialog({ open, onOpenChange }: BoardMembersProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border border-white/10 bg-[#030d24] text-white p-0 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(48,96,192,0.4),transparent_50%),radial-gradient(circle_at_85%_0,rgba(15,57,137,0.35),transparent_45%)] opacity-70" />
          <div className="relative p-6 sm:p-10 space-y-10">
            <DialogHeader className="space-y-4 text-left">
              <DialogTitle className="flex flex-col gap-3 text-3xl md:text-4xl font-black">
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.36em] text-[#9bc0ff]">
                  <Sparkles className="h-4 w-4" />
                  Board Vision
                </span>
                <span className="leading-tight">
                  Investissez aux côtés d'esprits{" "}
                  <span className="bg-gradient-to-r from-[#9bc0ff] via-[#4e7dd9] to-[#1f4fa4] bg-clip-text text-transparent">
                    emblématiques
                  </span>
                </span>
              </DialogTitle>
              <DialogDescription className="text-base md:text-lg text-white/80 max-w-3xl">
                Nos membres façonnent les deals les plus sélectifs entre Paris, Dubaï et San Francisco. Découvrez ceux
                qui activent le dealflow, sécurisent les opérations et propulsent les sociétés du portefeuille.
              </DialogDescription>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/70">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <Crown className="h-4 w-4 text-[#f0c36a]" />
                  120+ ans d'expérience cumulée
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <Shield className="h-4 w-4 text-[#7cd4ff]" />
                  Gouvernance AAA
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <Users className="h-4 w-4 text-[#9bc0ff]" />
                  300+ LPs & Family Offices
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {boardMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="group relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-r from-[#061a4a]/80 via-[#08183f]/70 to-[#041030]/90 backdrop-blur-2xl shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4d7fda]/30 via-transparent to-[#9bc0ff]/25" />
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="order-2 md:order-1 p-6 sm:p-8 flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-[#9bc0ff]/80">NEXUS BOARD</p>
                          <h3 className="text-2xl font-semibold">{member.name}</h3>
                        </div>
                        <Badge className="ml-auto bg-[#1f4fa4]/20 text-white border border-white/20 text-xs font-medium">
                          {member.title}
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed text-white/80">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.focus.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="border border-white/20 bg-white/10 text-xs font-medium text-white/80"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-[#5e7fc5]/40 bg-gradient-to-r from-[#9bc0ff]/15 to-[#1f4fa4]/20 px-4 py-3 text-sm font-semibold text-white">
                        Impact vérifié : {member.impact}
                      </div>
                    </div>
                    <div className="order-1 md:order-2 relative h-64 md:h-auto">
                      <div className="absolute inset-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030d24]/70 via-transparent to-[#061a4a]/50 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071a42]/20 to-[#030d24]" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
                        Board
                        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#9bc0ff] via-[#4e7dd9] to-[#1f4fa4]" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

