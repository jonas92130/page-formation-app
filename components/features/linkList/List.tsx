'use client'

import React, { useState } from 'react'
import { Document } from 'mongodb'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TiPlus, TiMinus } from 'react-icons/ti'

interface Props {
  facets: Document[]
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
            ? 'my-5 flex flex-wrap gap-5 overflow-hidden'
            : 'my-5 flex max-h-[58dvh] flex-wrap gap-5 overflow-hidden'
        }
      >
        {facets.map((facet) => (
          <div key={facet.value}>
            <li>
              <Button
                variant="list"
                className={`${backgroundColor} px-5 py-6`}
              >
                <Link
                  href={`/formations/${name}/${facet.value}`}
                  className="lg:text-base"
                >
                  {facet.value}
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
            <h4 className="m-0 flex flex-row items-center">
              <span className="text-lg font-extrabold">
                <TiMinus />
              </span>
              Afficher moins de catégories
            </h4>
          ) : (
            <h4 className="m-0 flex flex-row items-center font-bold">
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
