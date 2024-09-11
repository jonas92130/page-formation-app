'use server'

import { CPFApiHandler } from '@/back/CPFApiHandler'
import ClientPage from './clientPage'
import { createUrlSearchParams } from '@/lib/filter'
import type { Metadata, ResolvingMetadata } from 'next'
import client from '@/tina/__generated__/databaseClient'
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
  const searchParamsUrl = createUrlSearchParams(newParams)
  const api = new CPFApiHandler()
  const data = await api.getAll(searchParamsUrl)

  return <ClientPage data={JSON.parse(JSON.stringify(data))} />
}

export default Page
