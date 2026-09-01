/**
 * =============================================================
 *  EDIT THIS FILE TO UPDATE THE WEBSITE
 * =============================================================
 * Everything shown on the site (name, bio, research, publications,
 * CV, contact details) lives here. Change the text below, save, and
 * the whole site updates. No other file needs to be touched.
 *
 * Images live in `src/assets/` — replace those files (keeping the
 * same names) to swap the portrait and research photos.
 */

import portrait from "../assets/portrait.jpg";
import lab from "../assets/research-lab.jpg";
import minerals from "../assets/research-minerals.jpg";
import field from "../assets/research-field.jpg";
import carbonCycleAsset from "../assets/carbon-cycle.png.asset.json";
import fluidRock from "../assets/research-fluid-rock.jpg";
import subduction from "../assets/research-subduction.jpg";
import ptPath from "../assets/research-pt-path.jpg";
import glacierAsset from "../assets/glacier-np.jpg.asset.json";

export const images = {
  portrait,
  lab,
  minerals,
  field,
  carbonCycle: carbonCycleAsset.url,
  fluidRock,
  subduction,
  ptPath,
  glacier: glacierAsset.url,
};

/* ------------------------------------------------------------------ */
/* 1. Identity                                                        */
/* ------------------------------------------------------------------ */

export const person = {
  /** Full name, shown in the page title and on the home page. */
  fullName: "KANWA SENGUPTA",
  /** Short version used in the header logo. */
  shortName: "KANWA SENGUPTA",
  /** Small label next to the header logo. */
  headerTag: "",
  role: "PhD Candidate, Geology",
  institution: "Florida State University",
  department: "Department of Earth, Ocean and Atmospheric Science",
  location: "Tallahassee, Florida, USA",
  /** Keyword line above the name on the home page. */
  fields: "METAMORPHIC PETROLOGY · GEOCHEMISTRY · FLUID-ROCK INTERACTIONS",
  portraitAlt: "Portrait of Kanwa Sengupta in a mountain field",
};

/* ------------------------------------------------------------------ */
/* 2. Home page                                                       */
/* ------------------------------------------------------------------ */

export const home = {
    news: [
    {
      date: "August 2026",
      text: "Received Harold T. Stearns Research Award from the Geological Society of America for work on subduction zone carbon cycling in Catalina Islands.",
    },
  ],
  bio: [
    "My research focuses on reconstructing metamorphic pressure–temperature (P–T) evolution to understand the tectonic history of Earth's crust. I investigate fluid–rock interactions and their role in driving metamorphic reactions, mass transfer, and mineral transformation.",
    "I use classical petrologic techniques to address societally relevant geoscience problems, linking fundamental metamorphic processes to carbon release and sequestration, crustal rheology, and earthquake hazards. By bridging basic and applied research, I aim to improve our understanding of Earth's dynamic systems and their implications for natural hazards and the global carbon cycle.",
    "I am currently completing my dissertation and seeking research or applied geoscience positions in academia, national laboratories, or industry.",
  ],
  interests: [
    {
      t: "Metamorphism and Carbon cycle",
      d: "Metamorphic decarbonation during mountain building and their impact on ocean-atmosphere system",
    },
    {
      t: "Fluid-Rock interaction",
      d: "Fluid infiltration and evolution in contact metamorphic settings",
    },
    {
      t: "Subduction zone carbon cycling",
      d: "Devolatilization from sediments during subduction and subsequent resequestration",
    },
    {
      t: "Metamorphic evolution of Convergent settings",
      d: "P-T-fluid evolution of orogenic belts and subduction zones.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Research page (each entry becomes a tab)                        */
/* ------------------------------------------------------------------ */

export const research = {
  intro:
    "I use tools of classical field based petrology and geochemistry to study questions of the past and future like past climates and earthquake hazards",
  projects: [
    {
      id: "metamorphism-carbon",
      label: "Metamorphism and Carbon cycle",
      image: images.carbonCycle,
      caption:
        "Geologic carbon cycle, interactions between solid earth and ocean-atmosphere system",
      imageAlt:
        "Schematic cross-section of the geologic carbon cycle showing decarbonation and carbonation fluxes across collisional orogeny, mid-ocean ridge, and subduction settings",
      lede: "Metamorphic decarbonation during mountain building and their impact on ocean-atmosphere system.",
      body: [
        "My research investigates the processes of metamorphic decarbonation in various tectonic settings, focusing on how carbon is released from the lithosphere and its subsequent impact on the global carbon cycle.",
        "By combining field observations with thermodynamic modeling, I quantify the flux of CO2 during orogenic events and subduction processes.",
      ],
      methods: [
        "Thermodynamic modeling",
        "Stable isotope geochemistry",
        "Field mapping",
        "Petrographic analysis",
      ],
    },
    {
      id: "fluid-rock",
      label: "Fluid-Rock interaction",
      image: images.fluidRock,
      caption:
        "Fluid infiltration and reaction zoning in a contact metamorphic aureole (schematic; image generated using AI)",
      imageAlt:
        "Schematic cross-section of a gabbroic intrusion with magmatic fluids infiltrating outward through marble and calc-silicate reaction zones",
      lede: "Fluid infiltration and evolution in contact metamorphic settings.",
      body: [
        "I study the impact fluid flow and chemical exchange between fluids and rocks during metamorphism.",
        "This work involves characterizing mineralogical changes and isotopic shifts to reconstruct the pathways and compositions of metamorphic fluids.",
      ],
      methods: [
        "Fluid inclusion analysis",
        "Scanning electron microscopy",
        "Reactive transport modeling",
        "Trace element geochemistry",
      ],
    },
    {
      id: "subduction-carbon",
      label: "Subduction zone carbon cycling",
      image: images.subduction,
      caption:
        "Devolatilization and carbonation fluxes along a subduction zone (schematic; image generated using AI)",
      imageAlt:
        "Schematic subduction zone cross-section showing CO2 release from the slab, carbonation of the mantle wedge, and arc volcanism",
      lede: "Devolatilization from sediments during subduction and subsequent resequestration.",
      body: [
        "This research explores the deep carbon cycle, specifically the devolatilization of subducting sediments and the return of carbon to the atmosphere or its sequestration in the deep mantle.",
      ],
      methods: [
        "High-pressure experiments",
        "P-T path reconstruction",
        "Geochemical mass balance",
      ],
    },
    {
      id: "metamorphic-evolution",
      label: "Metamorphic evolution of Convergent settings",
      image: images.glacier,
      caption:
        "Glacially carved cliffs exposing deformed, thrust-stacked sedimentary sequences — clicked at Glacier National Park, Montana",
      imageAlt:
        "Cirque headwall and glacier at Glacier National Park, showing layered, faulted rock sequences above a meltwater lake",
      lede: "P-T-fluid evolution of orogenic belts and subduction zones.",
      body: [
        "I focus on reconstructing the pressure-temperature-time-fluid (P-T-t-X) evolution of crustal rocks in convergent tectonic settings.",
        "Using integrated field observations, petrographic and geochemical analyses, I aim to understand the thermal and mechanical evolution of mountain belts.",
      ],
      methods: [
        "Phase equilibrium modeling",
        "Thermobarometry",
        "Raman spectroscopy",
        "Microstructural analysis",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Publications page                                               */
/* ------------------------------------------------------------------ */

export const publications = {
  intro:
    "Selected journal articles, conference abstracts, and proceedings. Reprints are available on request.",
  journal: [
    {
      year: "2026",
      status: "Submitted",
      authors:
        "Allman, L.J., Stewart, E.M., Sengupta, K., Mookherjee, M., Kelsey, M.M., Hackley, P.C., McAleer, R.J., Jubb, A.M., and Stokes, M.R.",
      title:
        "Release and recapture: limited carbon mobilization in sediment adjacent to Central Atlantic Magmatic Province Sills, Florida",
      venue: "Chemical Geology (submitted 2026)",
      doi: "",
      url: "",
    },
    {
      year: "2026",
      status: "In preparation",
      authors: "Sengupta, K., and Stewart, E.M.",
      title:
        "Magmatic fluid infiltration drives metamorphic evolution and decarbonation in a Proterozoic contact aureole: insights from the Tudor Gabbro contact aureole, Ontario, Canada",
      venue: "To be submitted to Lithos",
      doi: "",
      url: "",
    },
  ],
  conference: [
    {
      year: "2026",
      text: "Sengupta, K., and Stewart, E.M. Protolith chemistry controls decarbonation in a Proterozoic Orogen: a field-based test from the Grenville Orogen, Ontario, Canada. EGU General Assembly 2026, session GMPV4.3.",
      url: "https://meetingorganizer.copernicus.org/EGU26/EGU26-877.html",
    },
    {
      year: "2025",
      text: "Sengupta, K., and Stewart, E.M. Fluid infiltration drives metamorphism, carbon loss, and metasomatism in a Proterozoic contact aureole. GSA Connects 2025.",
      url: "https://gsameetings.secure-platform.com/connects25/solicitations/103002/sessiongallery/schedule/items/95350/application/5601",
    },
    {
      year: "2025",
      text: "Allman, L., Stewart, E.M., Sengupta, K., and Mookherjee, M. Constraining carbon flux from the Central Atlantic Magmatic Province: insights from metasediments from Florida. GSA Connects 2025.",
      url: "https://gsameetings.secure-platform.com/connects25/solicitations/103002/sessiongallery/schedule/items/95174/application/9449",
    },
    {
      year: "2025",
      text: "Sengupta, K., Stewart, E.M., and Hoover, W.F. A stable isotopic approach to understand the influence of CO₂ metasomatism on talc formation at the subduction interface. Penrose 2025 / IEC-15 Conference.",
      url: "https://cdn.sanity.io/files/02ocqogw/production/220e75b17c743461b531c997d70a201ba4eef173.pdf",
    },
    {
      year: "2024",
      text: "Sengupta, K., and Stewart, E.M. Extreme thermal gradient and carbon loss in contact metamorphic rocks: a field-based study of the Tudor Gabbro contact aureole, Grenville Orogeny, Canada. AGU Fall Meeting, 2024.",
      url: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1520968",
    },
    {
      year: "2024",
      text: "Stewart, E.M., Saha, S., and Sengupta, K. A field-based estimate of Precambrian metamorphic CO₂ degassing. Goldschmidt Conference, 2024.",
      url: "https://conf.goldschmidt.info/goldschmidt/2024/meetingapp.cgi/Paper/23728",
    },
    {
      year: "2023",
      text: "Sengupta, K., and Stewart, E.M. Constraints on metamorphic decarbonation in a Proterozoic Orogen: observational and thermodynamic evidence from the Central Metasedimentary Belt, Grenville Province, Ontario, Canada. AGU Fall Meeting, 2023.",
      url: "https://scholar.google.com/scholar?cluster=12964442173839233454&hl=en&oi=scholarr",
    },
    {
      year: "2023",
      text: "Allman, L., Sengupta, K., Stewart, E.M., Mookherjee, M., and Basu, A. Contact metamorphism and decarbonation during emplacement of the Central Atlantic Magmatic Province, Florida. Geological Society of America Abstracts with Programs, Vol. 55, No. 2.",
      url: "https://gsa.confex.com/gsa/2023SE/webprogram/Paper385667.html",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. CV page                                                         */
/* ------------------------------------------------------------------ */

export const cv = {
  /** Put your PDF in `public/` and point this at it. */
  pdfHref: "cv.pdf",
  education: [
    {
      when: "2022 – present",
      what: "Ph.D. in Geology — Florida State University, Tallahassee, FL, USA",
      detail:
        "GPA 4.0/4.0. Dissertation: “Investigating the fate of carbon during metamorphism in convergent tectonic settings.” Advisor: Dr. Emily Stewart. Committee: Prof. Yang Wang, Prof. Mainak Mookherjee, Prof. Oliver Steinbock.",
    },
    {
      when: "2020 – 2022",
      what: "M.Sc. in Geology — Indian Institute of Technology Kharagpur, India",
      detail:
        "CGPA 9.72/10. Thesis: “Metamorphic evolution of K-feldspar–kyanite migmatite zone rocks from the Lesser Himalayan Sequence of the Western Arunachal Himalayas.” Advisor: Prof. Santanu Kumar Bhowmik.",
    },
    {
      when: "2017 – 2020",
      what: "B.Sc. in Geological Sciences — Jadavpur University, Kolkata, India",
      detail:
        "Minors in Chemistry and Mathematics. CGPA 8.88/10 (83.78%). Research seminar: “Petro-geochemical characterization of anorogenic and post-orogenic granites.” Advisor: Prof. Sanjoy Sanyal.",
    },
  ],
  experience: [
    {
      when: "2022 – present",
      what: "Graduate Research Assistant, Florida State University",
      detail:
        "Metamorphic petrology, geochemistry, and volatile cycling. Petrography, thermodynamic and geochemical modelling, electron microscopy, stable isotope mass spectrometry, Raman spectroscopy.",
    },
    {
      when: "2020 – 2022",
      what: "Master's Student, Indian Institute of Technology Kharagpur",
      detail:
        "Metamorphic petrology and tectonics. Petrography, thermodynamic modelling, geochemical modelling.",
    },
  ],
  teaching: [
    {
      when: "Spring 2026",
      what: "GLY 3310L — Igneous and Metamorphic Petrology, Florida State University",
      detail: "Independent lab section leader: course design and grading.",
    },
    {
      when: "Spring 2023, Fall 2023, Spring 2024",
      what: "GLY 2010L — Physical Geology Lab, Florida State University",
      detail:
        "Independent lab section leader: course design, grading, and leading the field trip to southern Alabama.",
    },
    {
      when: "Fall 2022",
      what: "GLY 2010 — Physical Geology, Florida State University",
      detail: "Grader for exams across two lecture sections.",
    },
  ],
  grants: [
    "Harold T. Stearns Fellowship ($2,890) in aid of analytical work — Geological Society of America Graduate Student Research Grant.",
    "Early Career Scientist's Travel Support for participation in the European Geosciences Union General Assembly, 2026.",
    "Drs. Buie, DeVore, and Watkins Fund ($1,500) for summer dissertation fieldwork — FSU Earth, Ocean and Atmospheric Science GLY grant, 2025.",
    "Bob and Cherrie Bierley Award ($1,454) for attending the GSA Penrose Conference — FSU Earth, Ocean and Atmospheric Science GLY grant, 2025.",
    "Early Career Student Grant ($1,500) for attending the GSA Penrose Conference — Geological Society of America, 2025.",
  ],
  awards: [
    "Professor Amitabha Chakrabarti Memorial Award — best student in order of merit, M.Sc. Geology, IIT Kharagpur, 2022.",
    "Institute Silver Medal — best student in order of merit, M.Sc. Geology, IIT Kharagpur, 2022.",
    "INSPIRE-SHE Scholarship — Department of Science and Technology, Government of India, 2017–2022.",
  ],
  distinctions: [
    "IIT Joint Admission Test for M.Sc. (JAM) 2020 — All India Rank 42.",
    "Graduate Aptitude Test in Engineering (GATE) 2022, Geology and Geophysics — All India Rank 127.",
    "Joint CSIR–UGC NET June 2021 — qualified for Lectureship / Assistant Professor.",
  ],
  skills: [
    {
      group: "Analytical",
      items: [
        "Petrography",
        "Electron microscopy (SEM/EPMA)",
        "Stable isotope mass spectrometry",
        "Raman spectroscopy",
      ],
    },
    {
      group: "Modelling",
      items: [
        "Thermodynamic modelling",
        "Geochemical modelling",
        "Phase equilibrium modelling",
        "Thermobarometry",
      ],
    },
    {
      group: "Field",
      items: [
        "Geologic mapping",
        "Field sampling strategy",
        "Structural measurement",
        "Field trip instruction",
      ],
    },
  ],
  service: [
    "European Geosciences Union, 2025 – present",
    "Geological Society of America, 2025 – present",
    "American Geophysical Union, 2023 – 2024",
    "Society of Exploration Geophysicists, 2017 – 2020",
    "Vice President, Society of Exploration Geophysicists — Jadavpur University Student Chapter (2020)",
    "Treasurer, Society of Exploration Geophysicists — Jadavpur University Student Chapter (2019)",
  ],
};


/* ------------------------------------------------------------------ */
/* 6. Contact page                                                    */
/* ------------------------------------------------------------------ */

export const contact = {
  intro:
    "I am always glad to hear about collaborations, seminar invitations, and open positions. Email is the fastest way to reach me.",
  /** Where the contact form sends messages. */
  formRecipient: "officialkuttus@gmail.com",
  channels: [
    {
      label: "Email",
      value: "ks22ba@fsu.edu",
      href: "mailto:ks22ba@fsu.edu",
    },
    {
      label: "Email",
      value: "officialkuttus@gmail.com",
      href: "mailto:officialkuttus@gmail.com",
    },
    {
      label: "Google Scholar",
      value: "scholar profile",
      href: "https://scholar.google.com/citations?user=yAXC1ywAAAAJ&hl=en",
    },
    {
      label: "ORCID",
      value: "0009-0006-3304-0887",
      href: "https://orcid.org/0009-0006-3304-0887",
    },
    {
      label: "GitHub",
      value: "kanwasengupta.github.io",
      href: "https://kanwasengupta.github.io",
    },
    {
      label: "LinkedIn",
      value: "in/kanwa-sengupta",
      href: "https://www.linkedin.com/in/kanwa-sengupta-539795213/",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 7. Navigation                                                      */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
] as const;
