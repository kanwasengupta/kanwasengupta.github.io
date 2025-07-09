import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogNavigation from "@/components/blog-navigation"
import SocialShare from "@/components/social-share"
import { getAdjacentPosts } from "@/lib/blog-data"

export default function EPMAAdventures() {
  const { previous, next } = getAdjacentPosts("epma-adventures")

  return (
    <div className="geological-hero min-h-screen relative">
      <div className="mountain-silhouette"></div>
      <div className="stars"></div>

      <div className="container px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8 flex justify-between items-center">
            <Button
              variant="outline"
              className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-white/90"
              asChild
            >
              <Link href="/#blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <SocialShare
              title="EPMA Adventures at UF"
              url="/blog/epma-adventures"
              description="Electron microprobe analysis experience at University of Florida"
            />
          </div>

          {/* Blog Post Content */}
          <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border-amber-200 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-amber-700">EPMA Adventures at UF</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-07-03">July 3, 2024</time>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">EPMA at UF</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                EPMA or Electron Micro Probe Analyzer is used to obtain micro scale quantitative data. I went to
                Nanoscale Research facility (NRF) at University of Florida to get microscopic composition data of my
                rocks from the Grenville Orogeny.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I was there for four days where two days I was trained by NRF staff and tried hands on to analyze my
                samples for the next two days. Even though it took some time and effort to run the samples, it was a
                fulfilling experience and I will definitely be back with more of my samples.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/bse-map.bmp"
                  alt="false color BSE map of a garnet bearing sample"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  False color BSE map of a garnet bearing sample
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 my-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-amber-700 mb-2">What is EPMA?</h3>
                <p className="text-muted-foreground text-sm">
                  Electron Probe Micro-Analysis (EPMA) is a technique that uses a focused electron beam to determine the
                  chemical composition of solid materials at a microscopic scale. It's particularly useful for analyzing
                  mineral compositions in geological samples, providing quantitative data on major and minor elements.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The experience at UF's Nanoscale Research Facility was invaluable for my research on Grenville Orogeny
                rocks. The quantitative compositional data obtained through EPMA will be crucial for understanding the
                metamorphic processes and P-T conditions experienced by these ancient rocks.
              </p>
            </div>

            <BlogNavigation previousPost={previous} nextPost={next} />
          </article>
        </div>
      </div>
    </div>
  )
}
