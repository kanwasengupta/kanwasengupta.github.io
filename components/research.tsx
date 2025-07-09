"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin } from "lucide-react"

const researchProjects = [
  {
    id: 1,
    title: "Enhanced Precambrian Decarbonation",
    description:
      "Investigating enhanced decarbonation during the Proterozoic, as a result of regional metamorphism during the Grenville Orogeny.",
    status: "Ongoing",
    location: "Ontario, Canada",
    methods: ["Field Mapping", "Petrography", "Geochemical Analysis", "Thermodynamic Modeling"],
    publications: [],
    funding: "NSF grant awarded to Dr. Emily Stewart",
  },
  {
    id: 2,
    title: "Role of carbon metasomatism in weakening the crust and slow slips",
    description: "Investigating the role of carbon metasomatism at the paleosubduction interface in talc formation.",
    status: "Ongoing",
    location: "Santa Catalina Island, California, USA",
    methods: ["Field Mapping", "Petrography", "Geochemical Analysis", "Thermodynamic Modeling"],
    publications: [],
    funding: "No funding",
  },
  {
    id: 3,
    title: "Influence of Fluid Infiltration in a contact aureole",
    description:
      "Investigating the role of fluid infiltration in metamorphic evolution of a contact aureole mineralogy, mass and heat transfer and carbon loss.",
    status: "Ongoing",
    location: "Ontario, Canada",
    methods: ["Field Mapping", "Petrography", "Geochemical Analysis", "Thermodynamic Modeling"],
    publications: [],
    funding: "NSF grant to Dr. Emily Stewart",
  },
  {
    id: 4,
    title:
      "Metamorphic evolution of K-feldspar-kyanite migmatite zone rocks from the Lesser Himalayan Sequence of the Western Arunachal Himalayas",
    description: "Investigating the metamorphic evolution of highest grade of rocks in the lower Himalayan Sequence.",
    status: "Master's Thesis",
    location: "Arunachal Pradesh, India",
    methods: ["Petrography", "Geochemical Analyses", "Thermobarometry", "Thermodynamic Modelling"],
    publications: [],
    funding: "No funding",
  },
]

const publications = [
  {
    title:
      "Extreme Thermal Gradient and Carbon Loss in Contact Metamorphic Rocks: A Field-Based Study of the Tudor Gabbro Contact Aureole, Grenville Orogeny, Canada",
    authors: "SENGUPTA, Kanwa and STEWART, Emily",
    journal: "AGU Fall Meeting",
    year: "2024",
    status: "Published",
    type: "Conference Proceeding",
    url: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Session/237343",
  },
  {
    title: "A field-based estimate of Precambrian metamorphic CO2 degassing",
    authors: "STEWART, Emily, SAHA, Sayantan and SENGUPTA, Kanwa",
    journal: "Goldschmidt Conference",
    year: "2024",
    status: "Published",
    type: "Conference Proceeding",
    url: "https://goldschmidtabstracts.info/2024/23728.pdf",
  },
  {
    title:
      "Constraints on Metamorphic Decarbonation in a Proterozoic Orogen: Observational and Thermodynamic Evidence from the Central Metasedimentary Belt, Grenville Province, Ontario, Canada",
    authors: "SENGUPTA, Kanwa and STEWART, Emily",
    journal: "AGU Fall Meeting",
    year: "2023",
    status: "Published",
    type: "Conference Proceeding",
    url: "https://ui.adsabs.harvard.edu/abs/2023AGUFM.V31D01.2S/abstract",
  },
  {
    title:
      "CONTACT METAMORPHISM AND DECARBONATION DURING EMPLACEMENT OF THE CENTRAL ATLANTIC MAGMATIC PROVINCE, FLORIDA",
    authors: "ALLMAN, Lindsi, SENGUPTA, Kanwa, STEWART, Emily, MOOKHERJEE, Mainak and BASU, Abhisek",
    journal: "Geological Society of America Abstracts with Programs, Vol. 55, No. 2",
    year: "2023",
    status: "Published",
    type: "Conference Proceeding",
    url: "https://gsa.confex.com/gsa/2023SE/webprogram/Paper385667.html",
  },
]

export default function Research() {
  return (
    <section id="research" className="geological-hero py-20 relative">
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
          <h2 className="text-3xl font-bold mb-2">Research</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research focuses on understanding Earth's dynamic processes through metamorphic petrology, geochemistry
            and thermodynamic modelling.
          </p>
        </motion.div>

        {/* Research Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Current Research Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {researchProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm shadow-lg border-amber-200 hover:border-amber-600 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-amber-700">{project.title}</CardTitle>
                      <Badge
                        variant={
                          project.status === "Published"
                            ? "default"
                            : project.status === "Ongoing"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          project.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Ongoing"
                              ? "bg-amber-100 text-amber-700"
                              : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Methods:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.methods.map((method) => (
                          <Badge key={method} variant="outline" className="text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.publications.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Publications:</h4>
                        {project.publications.map((pub, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {pub}
                          </p>
                        ))}
                      </div>
                    )}

                    <div className="text-sm">
                      <span className="font-semibold">Funding: </span>
                      <span className="text-muted-foreground">{project.funding}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Publications</h3>
          <div className="max-w-5xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-amber-200 hover:border-amber-600 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-lg mb-2 leading-tight">{pub.title}</h4>
                        <p className="text-muted-foreground mb-2 text-sm">{pub.authors}</p>
                        <p className="text-sm text-muted-foreground">
                          <em>{pub.journal}</em> ({pub.year})
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge
                          variant={pub.status === "Published" ? "default" : "secondary"}
                          className={
                            pub.status === "Published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                          }
                        >
                          {pub.status}
                        </Badge>
                        <Badge variant="outline" className="border-blue-600 text-blue-600">
                          {pub.type}
                        </Badge>
                      </div>
                    </div>
                    {pub.url && (
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                          asChild
                        >
                          <a href={pub.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            View Publication
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
