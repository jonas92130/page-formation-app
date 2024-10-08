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
    <>
      <div className="mx-5 my-5 flex flex-wrap gap-5 overflow-hidden">
        {facets.slice(0, 6).map((facet) => (
          <div key={facet.value}>
            <li>
              <Button
                variant="link"
                className={`rounded-full ${backgroundColor} h-fit text-ellipsis whitespace-normal break-words py-2 text-foreground drop-shadow-md`}
                asChild
              >
                <Link href={`/formations/${name}/${facet.value}`}>
                  {facet.value}
                </Link>
              </Button>
            </li>
          </div>
        ))}

        {showList &&
          facets.slice(6).map((facet) => (
            <div key={facet.value}>
              <li>
                <Button
                  variant="link"
                  className={`rounded-full ${backgroundColor} h-fit text-ellipsis whitespace-normal break-words py-2 text-foreground drop-shadow-md`}
                  asChild
                >
                  <Link href={`/formations/${name}/${facet.value}`}>
                    {facet.value}
                  </Link>
                </Button>
              </li>
            </div>
          ))}

        <Button
          onClick={() => setShowList(!showList)}
          className="bg-background text-sm text-foreground"
        >
          <div className="">
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
      </div>
    </>
  )
}
