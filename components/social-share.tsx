"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Linkedin, Facebook, LinkIcon } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface SocialShareProps {
  title: string
  url: string
  description?: string
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const shareUrl = typeof window !== "undefined" ? window.location.origin + url : url
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || title)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-sm border border-amber-200 rounded-lg shadow-lg p-4 z-10 min-w-[200px]">
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 hover:bg-blue-50 hover:text-blue-600"
              asChild
            >
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 hover:bg-blue-50 hover:text-blue-600"
              asChild
            >
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 hover:bg-blue-50 hover:text-blue-600"
              asChild
            >
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="w-full justify-start gap-2 hover:bg-amber-50 hover:text-amber-600"
            >
              <LinkIcon className="h-4 w-4" />
              Copy Link
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
