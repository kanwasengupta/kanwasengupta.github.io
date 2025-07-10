import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogNavigation from "@/components/blog-navigation"
import SocialShare from "@/components/social-share"
import { getAdjacentPosts } from "@/lib/blog-data"

export default function AGU2024() {
  const { previous, next } = getAdjacentPosts("agu-2024")

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
              title="2024 AGU Conference at Washington DC"
              url="/blog/agu-2024"
              description="Stewart Lab team presents research at the premier geoscience conference"
            />
          </div>

          {/* Blog Post Content */}
          <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border-amber-200 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-amber-700">2024 AGU Conference at Washington DC</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-02-21">February 21, 2025</time>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">AGU 2024</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We had a full house from Stewart Lab with Lindsi and Zhenhao having oral presentations and Sayantan and
                me having poster presentations. I had a nice time interacting with researchers about my poster on mass
                transfer and carbon loss during contact metamorphism.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/agu-poster.jpg"
                  alt="My Poster at AGU 24"
                  width={700}
                  height={500}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">My Poster at AGU 24</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We had a laboratory group lunch at the canteen of the National Museum of the American Indian. I tried
                the delicious Fry bread and Bison chili.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/stewart-lab.jpg"
                  alt="Members of Stewart lab"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  Members of Stewart lab, From L-R Lindsi Allman, Emily Stewart, Kanwa Sengupta and Zhenhao Zhou,
                  missing Sayantan Saha
                </p>
              </div>
            </div>

            <BlogNavigation previousPost={previous} nextPost={next} />
          </article>
        </div>
      </div>
    </div>
  )
}
