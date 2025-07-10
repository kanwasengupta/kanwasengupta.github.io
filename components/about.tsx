"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="geological-hero py-20 relative">
      <div className="mountain-silhouette"></div>
      <div className="stars"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I am a PhD student at the{" "}
            <a
              href="https://www.eoas.fsu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline"
            >
              EOAS dept at FSU
            </a>
            . I work at the{" "}
            <a
              href="https://myweb.fsu.edu/emstewart/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline"
            >
              Stewart Lab
            </a>{" "}
            where I work on metamorphic rocks to understand evolution of the solid earth and effects on climate and
            habitability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full border-4 border-amber-600">
              <Image src="/images/kanwa-profile.jpg" alt="Kanwa Sengupta" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Kanwa Sengupta</h3>
                <p className="text-muted-foreground mb-6">
                  I am a passionate geologist and PhD student dedicated to understanding Earth's complex systems and
                  processes. My research focuses on metamorphic petrology, geochemistry, volatile cycling and tectonic
                  evolution.
                </p>
                <p className="text-muted-foreground mb-6">
                  Through fieldwork, laboratory analysis, and computational modeling, I strive to unravel the stories
                  written in rocks and contribute to our understanding of Earth's dynamic history.
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 text-amber-700">Education</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-amber-600 pl-4">
                      <h5 className="font-semibold">PhD in Geology</h5>
                      <p className="text-sm text-muted-foreground">Florida State University • 2022-Present</p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-4">
                      <h5 className="font-semibold">M.Sc in Geology</h5>
                      <p className="text-sm text-muted-foreground">
                        Indian Institute of Technology • 2020-2022 • CGPA: 9.72
                      </p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-4">
                      <h5 className="font-semibold">B.Sc (Honors in Geological Sciences)</h5>
                      <p className="text-sm text-muted-foreground">Minor in Mathematics and Chemistry</p>
                      <p className="text-sm text-muted-foreground">Jadavpur University • 2017-2020 • CGPA: 8.88</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
