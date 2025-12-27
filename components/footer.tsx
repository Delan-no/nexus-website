import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="nexus-surface nexus-border-variant border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold nexus-gradient-text"
            >
              NEXUS
            </Link>
            <p className="nexus-text-secondary text-sm leading-relaxed">
              La communauté exclusive d'investisseurs qui transforme l'avenir financier. Rejoignez l'élite de
              l'investissement intelligent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="nexus-text-secondary hover:text-[hsl(var(--nexus-primary))] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="nexus-text-secondary hover:text-[hsl(var(--nexus-primary))] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="nexus-text-secondary hover:text-[hsl(var(--nexus-primary))] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="nexus-text-secondary hover:text-[hsl(var(--nexus-secondary))] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 nexus-text">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="nexus-text-secondary hover:nexus-text transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="nexus-text-secondary hover:nexus-text transition-colors">
                  Avantages
                </Link>
              </li>
              <li>
                <Link href="#blog" className="nexus-text-secondary hover:nexus-text transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="nexus-text-secondary hover:nexus-text transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="nexus-text-secondary hover:nexus-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 nexus-text">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="nexus-text-secondary">Investissement Startups</span>
              </li>
              <li>
                <span className="nexus-text-secondary">Trading Bourse</span>
              </li>
              <li>
                <span className="nexus-text-secondary">Acquisitions</span>
              </li>
              <li>
                <span className="nexus-text-secondary">Incubation</span>
              </li>
              <li>
                <span className="nexus-text-secondary">Réseau Exclusif</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 nexus-text">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[hsl(var(--nexus-primary))]" />
                <span className="nexus-text-secondary">contact@nexus-invest.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[hsl(var(--nexus-primary))]" />
                <span className="nexus-text-secondary">+229 01 01 01 01 01</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-[hsl(var(--nexus-secondary))] mt-0.5" />
                <span className="nexus-text-secondary">
                  Cotonou/Bénin /
                  <br />
                  229 Cotonou, Bénin
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="nexus-border-variant border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="nexus-text-secondary text-sm">© {new Date().getFullYear()} NEXUS. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="nexus-text-secondary hover:nexus-text text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="nexus-text-secondary hover:nexus-text text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="#" className="nexus-text-secondary hover:nexus-text text-sm transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
