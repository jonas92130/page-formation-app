'use server'

import React from 'react'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FilterConnector } from '@/lib/filter'

interface Props {
  name: string
}

async function ServerListLink(props: Props) {
  const { name } = props

  const api = new MongoDBHandler()
  const filterName = FilterConnector[name] ?? ''
  const facets = await api.getKeyValues(filterName)
  console.log('facets:', facets)
  return (
    <>
      {facets.map((facet) => (
        <li key={facet.value}>
          <Button variant="link" className="w-fit" asChild>
            <Link href={`/formations/${name}/${facet.value}`}>
              {facet.value}
            </Link>
          </Button>
        </li>
      ))}
    </>
  )
}

export default ServerListLink
