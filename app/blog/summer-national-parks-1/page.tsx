import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogNavigation from "@/components/blog-navigation"
import SocialShare from "@/components/social-share"
import { getAdjacentPosts } from "@/lib/blog-data"

export default function SummerNationalParks1() {
  const { previous, next } = getAdjacentPosts("summer-national-parks-1")

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
              title="A Summer of National Parks Part I"
              url="/blog/summer-national-parks-1"
              description="Grand Canyon, slot canyons, and Glacier National Park adventures"
            />
          </div>

          {/* Blog Post Content */}
          <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border-amber-200 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-amber-700">A Summer of National Parks Part I</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-10-31">October 31, 2024</time>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">A summer of Travel</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I am horribly late at updating, but this summer I embarked on a number of trips. The first part involved
                a visit to the slot canyons of North Arizona, the Grand Canyon and then to Glacier National Park
                followed by a day trip to the beautiful Olympic National Park.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Loved every bit of it. I was awestruck by the vastness of the Grand Canyon and the beauty of the slot
                canyons and the Horseshoe Bend as well.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/canyon.jpg"
                  alt="Contemplating how little I am, in this vast world"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  Contemplating how little I am, in this vast world
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                After spending a few days in Arizona, we flew to Missoula to visit the Glacier National Park. The crown
                of continental USA was majestic indeed. Over four days did three 10 mile+ hikes - The Highline trail
                from Logan pass, Grinnell glacier and the Iceberg lake trail.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The first was really taxing as the way down via the loop really sucked every ounce of stamina from us.
                The next two were longer but were much more enjoyable. We were the last ones at Grinnell glacier and
                constantly had wildlife encounters while coming back. The Iceberg lake was great and couldn't resist
                taking a dip in the ice cold water.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/glacier.jpg"
                  alt="Contemplating how little I am"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">Contemplating how little I am</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Even though it was really hot, the weather became a bit better on our last morning. While driving down
                the much famed Going to the Sun road, was able to take in the essence of the NP at Logan pass.
              </p>

              <div className="my-8">
                <Image
                  src="/images/blog/logan.jpg"
                  alt="Play of shadow and light"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2 italic">Play of shadow and light</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                It was indeed a much needed break from the brutal summer back home in Florida. Will be back with the
                second park involving Olympic NP while returning and then a quick trip to the Smokey Mountains National
                Park in August.
              </p>
            </div>

            <BlogNavigation previousPost={previous} nextPost={next} />
          </article>
        </div>
      </div>
    </div>
  )
}
