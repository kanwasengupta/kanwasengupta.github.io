"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  content?: string
}

interface BlogSearchProps {
  posts: BlogPost[]
  onFilter: (filteredPosts: BlogPost[]) => void
}

export default function BlogSearch({ posts, onFilter }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term: string) => {
    setSearchTerm(term)

    if (!term.trim()) {
      onFilter(posts)
      return
    }

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(term.toLowerCase()),
    )

    onFilter(filtered)
  }

  const clearSearch = () => {
    setSearchTerm("")
    onFilter(posts)
  }

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 border-amber-200 focus-visible:ring-amber-600"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-amber-50"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
