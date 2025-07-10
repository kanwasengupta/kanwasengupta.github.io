"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  slug: string
}

interface BlogNavigationProps {
  previousPost?: BlogPost
  nextPost?: BlogPost
}

export default function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-amber-200">
      <div className="flex-1">
        {previousPost && (
          <Button
            variant="outline"
            className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
            asChild
          >
            <Link href={`/blog/${previousPost.slug}`}>
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium truncate max-w-[200px]">{previousPost.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>

      <div className="flex-1 text-right">
        {nextPost && (
          <Button
            variant="outline"
            className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
            asChild
          >
            <Link href={`/blog/${nextPost.slug}`}>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium truncate max-w-[200px]">{nextPost.title}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
