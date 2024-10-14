'use client'

import React, { useState } from 'react'
import { Document } from 'mongodb'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { cn } from '@/lib/utils'

interface Props {
  facets: Document[]
  backgroundColor?: string
  name: string
}

export default function List(props: Props) {
  const { facets, backgroundColor, name } = props
  const [showList, setShowList] = useState(false)

  return (
    <>
      <div
        className={
          showList
            ? 'mx-5 my-5 flex flex-wrap gap-5 overflow-hidden'
            : 'mx-5 my-5 flex max-h-[58dvh] flex-wrap gap-5 overflow-hidden'
        }
      >
        {facets.map((facet) => (
          <div key={facet.value}>
            <li>
              <Button
                variant="link"
                className={cn(
                  `h-fit text-ellipsis whitespace-normal break-words rounded-full py-2 text-foreground drop-shadow-md`,
                  backgroundColor
                )}
                asChild
              >
                <Link href={`/formations/${name}/${facet.value}`}>
                  {facet.value}
                </Link>
              </Button>
            </li>
          </div>
        ))}
      </div>
      <Button
        onClick={() => setShowList(!showList)}
        className="text-sm text-foreground no-underline"
        variant="link"
      >
        <div>
          {showList ? (
            <h4 className="flex flex-row items-center gap-x-2">
              <TiMinus /> Afficher moins de catégories
            </h4>
          ) : (
            <h4 className="flex flex-row items-center gap-x-2">
              <TiPlus /> Afficher toutes les catégories
            </h4>
          )}
        </div>
      </Button>
    </>
  )
}
