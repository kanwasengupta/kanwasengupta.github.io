"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import BlogSearch from "./blog-search"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

export default function Blog() {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts)

  return (
    <section id="blog" className="geological-hero py-20 relative">
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
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights about geology, research experiences, and the fascinating world of Earth sciences.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
        >
          {/* Search */}
          <BlogSearch posts={blogPosts} onFilter={setFilteredPosts} />

          {/* Results */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/95 backdrop-blur-sm shadow-lg border-amber-200 hover:border-amber-600 transition-colors group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-amber-600 transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-amber-600 hover:text-amber-700 hover:bg-amber-50 w-full"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              asChild
            >
              <a href="https://kanwasengupta.github.io/" target="_blank" rel="noopener noreferrer">
                View Original Blog on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
