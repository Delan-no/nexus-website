"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, LogIn, LogOut, User, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useAuth } from "@/hooks/use-auth"
import clsx from "clsx"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { user, loading, logout } = useAuth()

  const navItems = [
    { href: "#about", label: "À propos" },
    { href: "#advantages", label: "Avantages" },
    // { href: "#testimonials", label: "Témoignages" },
    { href: "#blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            
          >
            {/* NEXUS */}

            <img src="/Logo0_Plan-removebg-preview.png" alt="Nexus Logo" className="w-32 h-auto" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {!loading && (
              user ? (
                <>
                  <Button asChild variant="outline">
                    <Link href="/admin" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user.firstName}</span>
                    </Link>
                  </Button>
                  <Button onClick={logout} variant="outline">
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </Button>
                </>
              ) : (
                <Button asChild variant="outline">
                  <Link href="/auth/login" className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Connexion</span>
                  </Link>
                </Button>
              )
            )}

            <Button asChild className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600">
              <Link href="#access">Demander un accès</Link>
            </Button>
          </div>

          {/* Hamburger menu mobile */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={clsx(
        "fixed top-0 right-0 h-full w-[80%] bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col space-y-2 mt-4">
            {!loading && (
              user ? (
                <>
                  <Button onClick={() => { logout(); setIsOpen(false); }} variant="outline">
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </Button>
                </>
              ) : (
                <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                  <Link href="/auth/login">
                    <LogIn className="h-4 w-4" />
                    <span>Connexion</span>
                  </Link>
                </Button>
              )
            )}
            <Button asChild className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600" onClick={() => setIsOpen(false)}>
              <Link href="#access">Demander un accès</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
