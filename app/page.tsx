import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Research from "@/components/research"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
