'use server'

import React from 'react'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { FilterConnector } from '@/lib/filter'
import List from './List'

interface Props {
  name: string
  backgroundColor?: string
}

async function ServerListLink(props: Props) {
  const { name } = props

  const api = new MongoDBHandler()
  const filterName = FilterConnector[name] ?? ''
  const facets = await api.getKeyValues(filterName)
  console.log('facets:', facets)

  return (
    <>
      {/* <List
        facets={facets}
        backgroundColor={`${backgroundColor}`}
        name={name}
      /> */}
    </>
  )
}

export default ServerListLink
