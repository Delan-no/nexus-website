import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Advantages } from "@/components/advantages"
// import { Testimonials } from "@/components/testimonials"
import { Blog } from "@/components/blog"
import { FAQ } from "@/components/faq"
import { AccessForm } from "@/components/access-form"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen nexus-animated-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Advantages />
        {/* <Testimonials /> */}
        <Blog />
        <FAQ />
        <AccessForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
