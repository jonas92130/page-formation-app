import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'
import { Button } from '@/components/ui/button'

const RSSFeed: React.FC<{ url: string }> = async ({ url }) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)
  const items = feed.items || []

  if (items.length > 0) {
    return (
      <div className="bg-muted p-4 text-foreground">
        <h3>Flux RSS</h3>
        <ul className="flex h-[30dvh] flex-col gap-2 overflow-y-auto">
          {items.map((item, index) => (
            <li key={index}>
              <Button variant="link" asChild className="text-sm">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return <p>{url}</p>
}

export default RSSFeed
