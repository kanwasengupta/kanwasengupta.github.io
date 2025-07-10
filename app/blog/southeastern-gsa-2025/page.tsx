import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogNavigation from "@/components/blog-navigation"
import SocialShare from "@/components/social-share"
import { getAdjacentPosts } from "@/lib/blog-data"

export default function SoutheasternGSA2025() {
  const { previous, next } = getAdjacentPosts("southeastern-gsa-2025")

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
              title="Southeastern GSA 2025 at Harrisonburg, Virginia"
              url="/blog/southeastern-gsa-2025"
              description="Conference experience at the premier regional earth science conference"
            />
          </div>

          {/* Blog Post Content */}
          <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border-amber-200 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-amber-700">
                Southeastern GSA 2025 at Harrisonburg, Virginia
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-03-20">March 20, 2025</time>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Southeastern GSA 2025</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Southeastern GSA is a premier regional conference for earth science students in the Southeastern part of
                USA. This year it was held at Harrisonburg at the Hotel Madison at James Madison University. A bunch of
                students, both graduate and undergraduates set off very early from Tallahassee (before 6 AM) for
                Harrisonburg. It was a long journey of 15+ hours but it was a fun and a scenic one especially in
                northern NC and VA.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Being a smaller conference there were a lot of undergrads, and very localised research.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                In most conferences there is a dearth of sessions focusing on petrology and deformation. So this year we
                convened a session focusing on the deformation and metamorphism of orogens especially Southern
                Appalachians. Our session had a good mix of early career researchers and seasoned researchers. Read more
                in my{" "}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7309198409939214336/"
                  className="text-amber-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Post here.
                </a>
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/gsa-conference.jpg"
                  alt="Southeastern GSA 2025 Conference"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  Conference scenes from Southeastern GSA 2025
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I had a lot of fun convening a session. Got to see and discuss some exciting new science. Looking
                forward to similar future opportunities.
              </p>
            </div>

            <BlogNavigation previousPost={previous} nextPost={next} />
          </article>
        </div>
      </div>
    </div>
  )
}
