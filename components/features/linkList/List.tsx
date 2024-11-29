'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TiPlus, TiMinus } from 'react-icons/ti'

interface Props {
  facets: string[]
  backgroundColor?: string
  name: string
}

export default function List(props: Props) {
  const { facets, backgroundColor, name } = props
  const [showList, setShowList] = useState(false)

  return (
    <div>
      <div
        className={
          showList
            ? 'flex flex-wrap gap-5 overflow-hidden'
            : 'flex max-h-[58dvh] flex-wrap gap-5 overflow-hidden'
        }
      >
        {facets.map((facet) => (
          <div key={facet}>
            <li>
              <Button variant="list" className={`${backgroundColor} p-5`}>
                <Link
                  href={`/formations/${name}/${facet}`}
                  className="lg:text-base"
                >
                  {facet}
                </Link>
              </Button>
            </li>
          </div>
        ))}
      </div>
      <Button
        onClick={() => setShowList(!showList)}
        className="p-0 text-sm text-foreground no-underline"
        variant="link"
      >
        <div>
          {showList ? (
            <h4 className="flex flex-row items-center">
              <span className="text-lg font-extrabold">
                <TiMinus />
              </span>
              Afficher moins de catégories
            </h4>
          ) : (
            <h4 className="flex flex-row items-center font-bold">
              <span className="text-lg font-extrabold">
                <TiPlus />
              </span>
              Afficher toutes les catégories
            </h4>
          )}
        </div>
      </Button>
    </div>
  )
}
