import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'
import { Button } from '@/components/ui/button'
import Container from './ui/container'

const RSSFeed: React.FC<{ url: string }> = async ({ url }) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)
  const items = feed.items || []

  if (items.length > 0) {
    return (
      <Container>
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
      </Container>
    )
  }

  return <p>{url}</p>
}

export default RSSFeed
