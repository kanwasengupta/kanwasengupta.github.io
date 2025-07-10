export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Southeastern GSA 2025 at Harrisonburg, Virginia",
    excerpt:
      "Southeastern GSA is a premier regional conference for earth science students in the Southeastern part of USA. This year it was held at Harrisonburg at the Hotel Madison at James Madison University. Being a smaller conference there were a lot of undergrads, and very localised research.",
    date: "2025-03-20",
    slug: "southeastern-gsa-2025",
  },
  {
    id: 2,
    title: "2024 AGU Conference at Washington DC",
    excerpt:
      "We had a full house from Stewart Lab with Lindsi and Zhenhao having oral presentation and Sayantan and me having poster presentation. I had a nice time interacting with researchers about my poster on mass transfer and carbon loss during contact metamorphism.",
    date: "2025-02-21",
    slug: "agu-2024",
  },
  {
    id: 3,
    title: "A Summer of National Parks Part II",
    excerpt:
      "From Glacier national park, we flew to Seattle to meet a few friends. We had only a day to explore and it was a tough choice between Rainier and Olympic national parks. Considering that Rainier needed timed entry permits, we decided to go to Olympic National Park.",
    date: "2025-02-05",
    slug: "summer-national-parks-2",
  },
  {
    id: 4,
    title: "A Summer of National Parks Part I",
    excerpt:
      "I am horribly late at updating, but this summer I embarked on a number of trip. The first part involved a visit to the slot canyons of North Arizona, the Grand Canyon and then to Glacier National Park followed by a day trip to the beautiful olympic National Park.",
    date: "2024-10-31",
    slug: "summer-national-parks-1",
  },
  {
    id: 5,
    title: "EPMA Adventures at UF",
    excerpt:
      "EPMA or Electron Micro Probe Analyzer is used to obtain micro scale quantitative data. I went to Nanoscale Research facility (NRF) at University of Florida to get microscopic composition data of my rocks from the Grenville Orogeny.",
    date: "2024-07-03",
    slug: "epma-adventures",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAdjacentPosts(currentSlug: string): { previous?: BlogPost; next?: BlogPost } {
  const currentIndex = blogPosts.findIndex((post) => post.slug === currentSlug)

  return {
    previous: currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined,
  }
}
