"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Download, FileText, ExternalLink } from "lucide-react"
import Typed from "typed.js"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import "./geological-background.css"

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Geologist", "PhD Student", "Researcher"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section
      id="home"
      className="geological-hero relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="mountain-silhouette"></div>
      <div className="stars"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#d97706", "#dc2626", "#7c3aed", "#059669"],
            },
            links: {
              color: "#d97706",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 120,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
              options: {
                polygon: {
                  sides: 6,
                },
              },
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-amber-600">Kanwa Sengupta</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a <span ref={typedRef} className="text-amber-600"></span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Combined my love for exploring and science. Understanding the history of the earth using tools of geology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="gap-2 bg-amber-600 hover:bg-amber-700"
              onClick={() => document.querySelector("#research")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FileText className="h-4 w-4" />
              View My Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-sky-500 text-sky-500 hover:bg-sky-50 bg-transparent"
              asChild
            >
              <a
                href="https://kanwasengupta.github.io/New_CV_March_2025%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                My CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              asChild
            >
              <a
                href="https://www.researchgate.net/profile/Kanwa-Sengupta?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                ResearchGate
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              asChild
            >
              <a
                href="https://scholar.google.com/citations?user=yAXC1ywAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Google Scholar
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-amber-600 hover:text-amber-700 hover:bg-amber-50"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
