'use server'

import { CPFApiHandler } from '@/back/CPFApiHandler'
import ClientPage from './clientPage'
import { createQueryMongoParams } from '@/lib/filter'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { headers } from 'next/headers'

type Props = {
  searchParams: Record<string, string>
  params: { key: string; name: string }
}

async function Page(props: Props) {
  const { searchParams, params } = props
  const { key, name } = params
  const decodedKey = decodeURIComponent(key)
  const decodedName = decodeURIComponent(name)
  const newParams = {
    ...searchParams,
    [decodedKey]: decodedName,
  }

  const paramsFormatted = createQueryMongoParams(newParams)
  const api = new MongoDBHandler()
  const results = await api.getFormations(paramsFormatted)
  const count = await api.getFormationsCount(paramsFormatted)

  const dataFormated = {
    results,
    total_count: count[0]?.total_count,
  }

  return <ClientPage data={JSON.parse(JSON.stringify(dataFormated))} />
}

export default Page
