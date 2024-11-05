import React from 'react'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { createQueryMongoParams } from '@/lib/filter'
import ClientPage from './clientPage'

type Props = {
  params: { key: string }
}

async function page(props: Props) {
  const { params } = props
  const { key } = params
  const api = new MongoDBHandler()
  const decodedKey = decodeURIComponent(key)
  const newParams = { id: decodedKey }
  const paramsFormatted = createQueryMongoParams(newParams)
  const results = await api.getFormations(paramsFormatted)

  const DataFormatted = {
    result: results && results.length > 0 ? results[0] : null,
  }

  return <ClientPage data={JSON.parse(JSON.stringify(DataFormatted.result))} />
}

export default page
