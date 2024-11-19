import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'
import { Button } from '@/components/ui/button'

const RSSFeed: React.FC<{ url: string }> = async ({ url }) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)
  const items = feed.items || []

  if (items.length > 0) {
    return (
      <div className="p-4 text-foreground">
        <div className="mx-auto w-[90%] max-w-[1100px] py-8">
          <h2>Flux RSS</h2>
          <ul className="flex h-[30dvh] flex-col gap-4 overflow-y-auto">
            {items.map((item, index) => (
              <li key={index}>
                <Button variant="link" asChild className="text-wrap text-sm">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return <p>{url}</p>
}

export default RSSFeed
