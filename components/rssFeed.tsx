import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'

const RSSFeed: React.FC<{ url: string }> = ({ url }) => {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const parser = new Parser({})
        const feed = await parser.parseURL(url)

        console.log('feed:', feed)
        setItems(feed.items)
      } catch (error) {
        console.error('Error fetching RSS feed:', error)
      }
    }

    fetchRSS()
  }, [url])

  if (items.length > 0) {
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return <p>{url}</p>
}

export default RSSFeed
