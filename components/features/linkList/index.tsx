import { FormationFacetsResponseModel } from '@/model/formation'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FilterConnector } from '@/lib/filter'

interface Props {
  facetsResponse: FormationFacetsResponseModel
  name: string
  label?: string
}

function LinkList(props: Props) {
  const { facetsResponse, name, label } = props
  const keyName = FilterConnector[name]

  const facetsFilterWithName = facetsResponse.facets.find(
    (facet) => facet.name === keyName
  )
  const facets = facetsFilterWithName ? facetsFilterWithName.facets : []

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">{label ?? name}</h2>
      <ul className="flex flex-wrap gap-1">
        {facets.map((facet) => (
          <li key={facet.value}>
            <Button variant="link" className="w-fit" asChild>
              <Link href={`/formations/${name}/${facet.value}`}>
                {facet.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkList
