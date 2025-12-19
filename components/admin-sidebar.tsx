"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, MessageSquare, LogOut, Newspaper, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { logoutAdmin } from "@/app/actions"

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/demandes",
      label: "Demandes d'accès",
      icon: Users,
    },
    {
      href: "/admin/messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      href: "/admin/blogs",
      label: "Blogs",
      icon: Newspaper,
    },
    {
      href: "/admin/faq",
      label: "FAQ",
      icon: HelpCircle,
    },
  ]

  return (
    <aside className="h-screen w-64 bg-background border-r border-border flex flex-col py-6 px-4 fixed left-0 top-0 z-30">
      <div className="mb-8">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
        >
          NEXUS Admin
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
              pathname === item.href
                ? "bg-purple-600/10 text-purple-600"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8">
       <form action={logoutAdmin} className="w-full">
  <button type="submit" className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
    <LogOut className="h-5 w-5 mr-3" />
    Déconnexion
  </button>
</form>
      </div>
    </aside>
  )
} 