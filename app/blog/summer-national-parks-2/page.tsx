import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogNavigation from "@/components/blog-navigation"
import SocialShare from "@/components/social-share"
import { getAdjacentPosts } from "@/lib/blog-data"

export default function SummerNationalParks2() {
  const { previous, next } = getAdjacentPosts("summer-national-parks-2")

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
              title="A Summer of National Parks Part II"
              url="/blog/summer-national-parks-2"
              description="Olympic National Park and Smoky Mountains adventures"
            />
          </div>

          {/* Blog Post Content */}
          <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border-amber-200 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-amber-700">A Summer of National Parks Part II</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-02-05">February 5, 2025</time>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">A summer of Travel - II</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                From Glacier national park, we flew to Seattle to meet a few friends. We had only a day to explore and
                it was a tough choice between Rainier and Olympic national parks. Considering that Rainier needed timed
                entry permits, we decided to go to Olympic National Park.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                It was a good decision indeed, because Olympic became one of my favorite national parks because of its
                rich variety.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Saw the snow clad Olympic national mountains, the rainforests and the Pacific Coast in a day.
              </p>

              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Image
                    src="/images/blog/olympic-mountains.jpg"
                    alt="Olympic Mountains"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <Image
                    src="/images/blog/olympic-rainforest.jpg"
                    alt="Olympic Rainforest"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <Image
                    src="/images/blog/pacific-coast.jpg"
                    alt="Pacific Coast"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <Image
                    src="/images/blog/smoky-mountains.jpg"
                    alt="Smoky Mountains"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                After that classes started and needed a much needed break. So a group of us went to Smoky Mountain
                National Park on the Labor day Weekend. Even though I have been to Smokies before but it was the first
                time I was staying in Gatlinburg. Saw black bears right on the porch of our cabin, hiked a couple of
                hikes and had a good time with friends.
              </p>
            </div>

            <BlogNavigation previousPost={previous} nextPost={next} />
          </article>
        </div>
      </div>
    </div>
  )
}
