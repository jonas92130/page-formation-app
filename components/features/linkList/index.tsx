import { FormationFacetsResponseModel } from '@/model/formation'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FilterConnector } from '@/lib/filter'
import { Suspense } from 'react'
import ServerListLink from './serverListLink'

interface Props {
  name: string
  label?: string
}

function LinkList(props: Props) {
  const { name, label } = props

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">{label ?? name}</h2>
      <ul className="flex flex-wrap gap-1">
        <Suspense fallback={<div>Loading...</div>}>
          <ServerListLink name={name} />
        </Suspense>
      </ul>
    </div>
  )
}

export default LinkList
